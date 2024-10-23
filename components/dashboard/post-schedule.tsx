'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

export function PostSchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar mode="single" className="rounded-md border" />
      </CardContent>
    </Card>
  );
}