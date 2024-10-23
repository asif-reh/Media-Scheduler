import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function query(sql: string, params: any[] = []) {
  const { data, error } = await supabase.rpc('query', { query: sql, params });
  if (error) throw error;
  return data;
}

export { supabase };