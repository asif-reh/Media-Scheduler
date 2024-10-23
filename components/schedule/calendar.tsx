'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';

export function ScheduleCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Calendar View
          <Badge variant="secondary">12 Posts Scheduled</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          className="rounded-md border"
          selected={new Date()}
          components={{
            DayContent: (props) => (
              <div className="relative">
                {props.day}
                {Math.random() > 0.7 && (
                  <div className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </div>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
}