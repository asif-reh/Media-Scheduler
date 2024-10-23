'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle, Filter } from 'lucide-react';

export function ScheduleHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Content Schedule</h1>
        <p className="text-muted-foreground">
          Plan and manage your social media content calendar
        </p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>
    </div>
  );
}