'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PromptSuggestions } from '@/components/create/prompt-suggestions';
import { Separator } from '@/components/ui/separator';

export default function CreatePage() {
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('');

  const handleGenerate = async () => {
    // TODO: Implement AI content generation
    console.log('Generating content for:', platform, prompt);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create Social Media Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Platform</label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger>
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Content Prompt</label>
            <Textarea
              placeholder="Describe what you want to post about..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
            />
          </div>

          <Separator />

          <PromptSuggestions
            platform={platform}
            onSelect={(suggestion) => setPrompt(suggestion)}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerate} className="w-full">
            Generate Content
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}