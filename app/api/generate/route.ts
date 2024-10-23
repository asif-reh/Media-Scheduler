import { NextResponse } from 'next/server';
import { generateContentSuggestions } from '@/lib/claude';

export async function POST(req: Request) {
  try {
    const { platform, topic } = await req.json();
    
    if (!platform || !topic) {
      return NextResponse.json(
        { error: 'Platform and topic are required' },
        { status: 400 }
      );
    }

    const suggestions = await generateContentSuggestions(platform, topic);
    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}