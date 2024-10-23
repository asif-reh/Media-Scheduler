import { ScheduleList } from '@/components/schedule/list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Scheduled Posts</h1>
        <Link href="/create">
          <Button>Create New Post</Button>
        </Link>
      </div>
      <ScheduleList />
    </div>
  );
}