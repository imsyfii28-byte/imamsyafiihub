import { NextRequest, NextResponse } from 'next/server';
import { getOpenAlexArticle } from '@/lib/api/openalex';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const doi = searchParams.get('doi');
  const id = searchParams.get('id');

  if (!doi && !id) {
    return NextResponse.json({ error: 'DOI or ID required' }, { status: 400 });
  }

  try {
    if (doi) {
      const article = await getOpenAlexArticle(doi);
      if (article) return NextResponse.json(article);
    }
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}
