import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '10mb' }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/search', async (req, res) => {
  try {
    const { query, type, yearFrom, yearTo, language, publisher, openAccess, quartile, subject, page = '1', perPage = '10', sortBy = 'relevance' } = req.query;
    const where: any = {};

    if (query) {
      where.OR = [
        { title: { contains: query as string, mode: 'insensitive' } },
        { abstract: { contains: query as string, mode: 'insensitive' } },
      ];
    }
    if (type) where.type = type as string;
    if (yearFrom) where.year = { ...where.year, gte: parseInt(yearFrom as string) };
    if (yearTo) where.year = { ...where.year, lte: parseInt(yearTo as string) };
    if (language) where.language = language as string;
    if (publisher) where.publisher = { contains: publisher as string, mode: 'insensitive' };
    if (openAccess === 'true') where.openAccess = true;
    if (quartile) where.quartile = quartile as string;
    if (subject) where.subject = subject as string;

    const total = await prisma.article.count({ where });
    const articles = await prisma.article.findMany({
      where,
      skip: (parseInt(page as string) - 1) * parseInt(perPage as string),
      take: parseInt(perPage as string),
      orderBy: sortBy === 'date' ? { year: 'desc' } : sortBy === 'citations' ? { citationCount: 'desc' } : { createdAt: 'desc' },
    });

    res.json({
      articles,
      total,
      page: parseInt(page as string),
      perPage: parseInt(perPage as string),
      totalPages: Math.ceil(total / parseInt(perPage as string)),
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/articles/:id', async (req, res) => {
  try {
    const article = await prisma.article.findUnique({ where: { id: req.params.id } });
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/articles/:id/related', async (req, res) => {
  try {
    const article = await prisma.article.findUnique({ where: { id: req.params.id } });
    if (!article) return res.status(404).json({ error: 'Article not found' });

    const related = await prisma.article.findMany({
      where: {
        id: { not: article.id },
        OR: [
          { subject: article.subject },
          { keywords: { hasSome: article.keywords.slice(0, 3) } },
        ],
      },
      take: 5,
    });
    res.json(related);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/trending', async (req, res) => {
  res.json([
    { keyword: 'Artificial Intelligence', count: 15420, trend: 'up' },
    { keyword: 'Machine Learning', count: 12350, trend: 'up' },
    { keyword: 'Deep Learning', count: 10200, trend: 'up' },
    { keyword: 'Blockchain', count: 8750, trend: 'stable' },
    { keyword: 'Climate Change', count: 7200, trend: 'up' },
    { keyword: 'Quantum Computing', count: 6800, trend: 'up' },
    { keyword: 'CRISPR', count: 5400, trend: 'stable' },
    { keyword: 'Natural Language Processing', count: 4300, trend: 'up' },
    { keyword: 'Computer Vision', count: 3900, trend: 'up' },
    { keyword: 'Cybersecurity', count: 3500, trend: 'up' },
  ]);
});

app.listen(PORT, () => {
  console.log(`ScholarHub API running on port ${PORT}`);
});

export default app;
