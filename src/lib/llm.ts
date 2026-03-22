// Claude API wrapper for admin blog workspace

export interface LLMMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface LLMRequest {
  messages: LLMMessage[];
  systemPrompt?: string;
  maxTokens?: number;
}

export interface LLMResponse {
  content: string;
  usage?: { inputTokens: number; outputTokens: number };
}

const DEFAULT_SYSTEM = `You are a professional content writer and editor specialising in integrative mental health, neuroscience, and holistic wellness.

You assist in creating blog content for neurogenetics.my — the website of Prabhu Sithamparam, a practitioner who uses the Neuro-Genetics 4D Model (Mind • Neuro • Body • Energy) to help clients with anxiety, depression, ADHD, trauma, and stress.

Tone: Professional yet accessible. Clinical credibility with warm, empathetic language.
Audience: Malaysians seeking mental health support; practitioners; caregivers.
SEO: Include relevant keywords naturally.
Format: Use markdown. Include a compelling intro, structured sections, and a clear call-to-action.

When asked to generate images, describe them in detail so they can be sourced from Unsplash or generated via AI tools.`;

export async function callLLM(req: LLMRequest): Promise<LLMResponse> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not configured');
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: req.maxTokens ?? 4096,
      system: req.systemPrompt ?? DEFAULT_SYSTEM,
      messages: req.messages,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Claude API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return {
    content: data.content[0]?.text ?? '',
    usage: data.usage
      ? { inputTokens: data.usage.input_tokens, outputTokens: data.usage.output_tokens }
      : undefined,
  };
}
