import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter required' }, { status: 400 });
  }

  try {
    const decodedUrl = decodeURIComponent(url);

    const res = await fetch(decodedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/pdf,*/*',
      },
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      return NextResponse.json({ error: `Failed to fetch PDF: ${res.status}` }, { status: 502 });
    }

    const contentType = res.headers.get('content-type') || 'application/pdf';
    const contentLength = res.headers.get('content-length');

    const headers: Record<string, string> = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400',
    };

    if (contentLength) {
      headers['Content-Length'] = contentLength;
    }

    const pdfBlob = await res.arrayBuffer();

    return new NextResponse(pdfBlob, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('PDF proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch PDF' },
      { status: 500 }
    );
  }
}
