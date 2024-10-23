import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquarePlus, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            AI Social Media Manager
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your social media presence with AI-powered content creation and scheduling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link href="/create" className="block">
            <div className="bg-card hover:bg-accent transition-colors p-6 rounded-lg border shadow-sm">
              <MessageSquarePlus className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Create Content</h2>
              <p className="text-muted-foreground">
                Generate engaging posts with AI assistance
              </p>
            </div>
          </Link>

          <Link href="/schedule" className="block">
            <div className="bg-card hover:bg-accent transition-colors p-6 rounded-lg border shadow-sm">
              <Calendar className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Schedule Posts</h2>
              <p className="text-muted-foreground">
                Plan and organize your content calendar
              </p>
            </div>
          </Link>

          <Link href="/dashboard" className="block">
            <div className="bg-card hover:bg-accent transition-colors p-6 rounded-lg border shadow-sm">
              <Clock className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
              <p className="text-muted-foreground">
                Track and analyze your social media performance
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}