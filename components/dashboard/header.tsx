'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your social media content and schedule
        </p>
      </div>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create Post
      </Button>
    </div>
  );
}