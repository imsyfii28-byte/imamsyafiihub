# ImamSyafiiHub - Academic Research Search Engine

ImamSyafiiHub is a modern, lightweight academic search engine that helps students, researchers, and academics discover scholarly publications from multiple trusted sources worldwide.

## Features

- **Smart Search** - Full-text search across titles, authors, abstracts, DOIs, and keywords
- **Advanced Filters** - Filter by year, language, publisher, document type, open access, citations, quartile, and subject
- **Rich Results** - Detailed article cards with metadata, badges, and quick actions
- **Article Details** - Comprehensive detail pages with abstracts, citations, and related research
- **Citation Generator** - Automatic citation generation in APA, MLA, IEEE, Chicago, Harvard, BibTeX, and RIS formats
- **Bookmarks & History** - Save articles and track search history
- **AI Research Assistant** - Summarize papers, extract key points, identify research gaps, and get recommendations
- **User Dashboard** - Track your research activity and manage your profile
- **Dark Mode** - Light and dark theme support
- **Responsive Design** - Works on desktop, tablet, and mobile

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- ShadCN UI Components
- Framer Motion
- TanStack Query
- React Hook Form
- Zod

### Backend
- Node.js / Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Redis
- JWT Authentication

### Search Engine
- MeiliSearch / ElasticSearch (configurable)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL (optional for mock mode)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/imamsyafiihub.git
cd imamsyafiihub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### Docker Deployment

```bash
docker-compose up -d
```

## Project Structure

```
scholarhub/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Landing page
│   │   ├── search/       # Search page
│   │   ├── article/      # Article detail
│   │   ├── login/        # Authentication
│   │   ├── register/     # Registration
│   │   ├── dashboard/    # User dashboard
│   │   ├── bookmark/     # Saved articles
│   │   ├── history/      # Search history
│   │   ├── profile/      # User profile
│   │   ├── settings/     # User settings
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── privacy/      # Privacy policy
│   │   └── terms/        # Terms of service
│   ├── components/       # Reusable components
│   │   ├── layout/       # Navbar, Footer, Providers
│   │   ├── shared/       # SearchBox, Stats, CTA
│   │   ├── search/       # ArticleCard, Filters
│   │   ├── article/      # Article detail components
│   │   ├── citation/     # Citation Generator
│   │   ├── auth/         # Auth components
│   │   ├── dashboard/    # Dashboard components
│   │   └── ai/           # AI Assistant
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── services/         # API & mock services
│   └── types/            # TypeScript type definitions
├── backend/              # Express API backend
│   ├── src/              # Backend source
│   └── prisma/           # Database schema
├── public/               # Static assets
└── docker-compose.yml    # Docker configuration
```

## API Integrations

ImamSyafiiHub can integrate with:
- Crossref API
- OpenAlex API
- Semantic Scholar API
- CORE API
- DOAJ
- PubMed
- arXiv
- Zenodo
- BASE Search
- Springer Nature

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| NEXT_PUBLIC_API_URL | Backend API URL | http://localhost:3001/api |
| NEXT_PUBLIC_APP_URL | Frontend URL | http://localhost:3000 |
| DATABASE_URL | PostgreSQL connection string | - |
| JWT_SECRET | JWT signing secret | - |
| REDIS_URL | Redis connection string | - |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## License

This project is licensed under the MIT License.
