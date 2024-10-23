-- Enable PostgreSQL extensions
create extension if not exists "uuid-ossp";

-- Posts table
create table if not exists posts (
  id uuid primary key default uuid_generate_v4(),
  platform text not null,
  content text not null,
  schedule_time timestamp with time zone,
  status text check (status in ('draft', 'scheduled', 'published', 'failed')) default 'draft',
  created_at timestamp with time zone default current_timestamp,
  updated_at timestamp with time zone default current_timestamp,
  user_id uuid not null,
  engagement_data jsonb
);

-- Add indexes
create index if not exists idx_posts_user_status on posts(user_id, status);
create index if not exists idx_posts_schedule on posts(schedule_time);

-- Analytics table
create table if not exists analytics (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references posts(id) on delete cascade,
  platform text not null,
  engagement_type text check (engagement_type in ('likes', 'shares', 'comments', 'views')) not null,
  count integer default 0,
  recorded_at timestamp with time zone default current_timestamp
);

-- Add index
create index if not exists idx_analytics_post_platform on analytics(post_id, platform);

-- User settings table
create table if not exists user_settings (
  user_id uuid primary key,
  platform_tokens jsonb,
  posting_preferences jsonb,
  created_at timestamp with time zone default current_timestamp,
  updated_at timestamp with time zone default current_timestamp
);