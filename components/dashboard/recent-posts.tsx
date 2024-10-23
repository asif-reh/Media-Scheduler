import { ScrollArea } from '@/components/ui/scroll-area';

const recentPosts = [
  {
    id: 1,
    content: 'Excited to share our latest product update! 🚀',
    platform: 'Twitter',
    engagement: '2.4k',
    date: '2h ago',
  },
  {
    id: 2,
    content: 'Join us for our upcoming webinar on AI trends',
    platform: 'LinkedIn',
    engagement: '156',
    date: '5h ago',
  },
  {
    id: 3,
    content: 'Behind the scenes at our annual team retreat',
    platform: 'Instagram',
    engagement: '1.2k',
    date: '1d ago',
  },
];

export function RecentPosts() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1">
              <p className="font-medium">{post.content}</p>
              <p className="text-sm text-muted-foreground">
                {post.platform} • {post.date}
              </p>
            </div>
            <div className="text-sm font-medium">{post.engagement}</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}