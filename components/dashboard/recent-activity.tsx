'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const activities = [
  {
    id: 1,
    platform: 'Twitter',
    content: 'New post scheduled for tomorrow at 10:00 AM',
    time: '2 hours ago',
  },
  {
    id: 2,
    platform: 'Instagram',
    content: 'Story published successfully',
    time: '4 hours ago',
  },
  {
    id: 3,
    platform: 'LinkedIn',
    content: 'Article draft saved',
    time: '5 hours ago',
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center space-x-4 rounded-lg border p-4"
              >
                <div>
                  <p className="font-medium">{activity.platform}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.content}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}