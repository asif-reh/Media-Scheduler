import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateContentSuggestions(platform: string, topic: string) {
  const prompt = `Generate 3 engaging social media post ideas for ${platform} about ${topic}. 
  Consider the platform's best practices and optimal content format. 
  Format each suggestion as a JSON object with 'content' and 'hashtags' fields.`;

  const response = await anthropic.messages.create({
    model: 'claude-3-opus-20240229',
    max_tokens: 1000,
    messages: [{ role: 'user', content: prompt }],
  });

  return response.content[0].text;
}