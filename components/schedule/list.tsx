'use client';

import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const scheduledPosts = [
  {
    id: 1,
    platform: 'Twitter',
    icon: Twitter,
    content: 'Check out our latest blog post on AI trends!',
    time: '3:00 PM',
    date: 'Today',
    status: 'scheduled',
  },
  {
    id: 2,
    platform: 'Facebook',
    icon: Facebook,
    content: 'Join us for an exciting product launch event!',
    time: '5:30 PM',
    date: 'Today',
    status: 'scheduled',
  },
  {
    id: 3,
    platform: 'LinkedIn',
    icon: Linkedin,
    content: "We are thrilled to announce...",
    time: '11:00 AM',
    date: 'Tomorrow',
    status: 'scheduled',
  },
  {
    id: 4,
    platform: 'Instagram',
    icon: Instagram,
    content: 'Behind the scenes look at our team!',
    time: '2:00 PM',
    date: 'Tomorrow',
    status: 'draft',
  },
];

export function ScheduleList() {
  return (
    <ScrollArea className="h-[600px]">
      <div className="space-y-4">
        {scheduledPosts.map((post) => {
          const Icon = post.icon;
          return (
            <div key={post.id} className="flex items-start gap-4 p-4 border rounded-lg">
              <Icon className="w-5 h-5 mt-1 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{post.platform}</p>
                  <Badge variant={post.status === 'scheduled' ? 'default' : 'secondary'}>
                    {post.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{post.content}</p>
                <p className="text-sm text-muted-foreground">
                  {post.date} at {post.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}