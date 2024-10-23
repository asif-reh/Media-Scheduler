'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PromptSuggestionsProps {
  platform: string;
  onSelect: (suggestion: string) => void;
}

export function PromptSuggestions({ platform, onSelect }: PromptSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<Array<{ content: string; hashtags: string[] }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateSuggestions = async () => {
    if (!platform) {
      setError('Please select a platform first');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform,
          topic: 'latest industry trends and company updates',
        }),
      });

      if (!response.ok) throw new Error('Failed to generate suggestions');

      const data = await response.json();
      setSuggestions(JSON.parse(data.suggestions));
    } catch (err) {
      setError('Failed to generate suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Need inspiration?</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={generateSuggestions}
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Generate Ideas
        </Button>
      </div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <div className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <Card
            key={index}
            className={cn(
              'p-4 cursor-pointer hover:bg-accent transition-colors',
              'border border-border/50 hover:border-border'
            )}
            onClick={() => onSelect(suggestion.content)}
          >
            <p className="text-sm">{suggestion.content}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {suggestion.hashtags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}