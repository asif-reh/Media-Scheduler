'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, MessageSquare, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Posts',
    value: '245',
    icon: BarChart3,
    trend: '+12.5%',
  },
  {
    title: 'Engagement Rate',
    value: '8.2%',
    icon: TrendingUp,
    trend: '+2.1%',
  },
  {
    title: 'Followers',
    value: '12.5K',
    icon: Users,
    trend: '+5.2%',
  },
  {
    title: 'Comments',
    value: '1.2K',
    icon: MessageSquare,
    trend: '+8.4%',
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-green-500">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}