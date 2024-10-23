import { NextResponse } from 'next/server';
import { supabase } from '@/lib/db';

export async function GET(req: Request) {
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('schedule_time', { ascending: false })
      .limit(10);

    if (error) throw error;
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { platform, content, scheduleTime } = await req.json();
    
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          platform,
          content,
          schedule_time: scheduleTime,
          user_id: 'user-id' // Replace with actual user ID from auth
        }
      ])
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ success: true, post: data });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}