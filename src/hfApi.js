const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

// ─── Text-to-Image ────────────────────────────────────────────────────────────
/**
 * Calls the Hugging Face SDXL image-generation endpoint.
 * Returns a base64 data-URL string ready for <img src=...>.
 *
 * @param {string} prompt  - User's text description
 * @param {string} style   - Optional style modifier appended to the prompt
 * @returns {Promise<string>} data URL (data:image/png;base64,...)
 */
export async function generateImage(prompt, style = '') {
  const styleMap = {
    'photorealistic': 'photorealistic, ultra detailed, 8k',
    'digital-art': 'digital art, vibrant, concept art style',
    'oil-painting': 'oil painting, classical art, brushstrokes, canvas texture',
    'watercolor': 'watercolor painting, soft edges, artistic, flowing colors',
    'anime': 'anime style, detailed illustration, cel shading',
    'cinematic': 'cinematic lighting, film grain, dramatic composition, movie still',
    '3d-render': '3D render, octane render, volumetric lighting, CGI',
    'pixel-art': 'pixel art, retro game style, 16-bit',
  };

  const styleModifier = styleMap[style] || '';
  const fullPrompt = styleModifier ? `${prompt}, ${styleModifier}` : prompt;

  const response = await fetch(
    'https://router.huggingface.co/nscale/v1/images/generations',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: fullPrompt,
        model: 'stabilityai/stable-diffusion-xl-base-1.0',
        response_format: 'b64_json',
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text().catch(() => response.statusText);
    throw new Error(`Image API error ${response.status}: ${errText}`);
  }

  const data = await response.json();

  // API returns { data: [{ b64_json: "..." }] }
  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error('No image data returned from API.');

  return `data:image/png;base64,${b64}`;
}

// ─── Text-to-Text ─────────────────────────────────────────────────────────────
/**
 * Calls the Hugging Face chat-completions endpoint.
 *
 * @param {Array<{role: string, content: string}>} messages - Conversation history
 * @returns {Promise<string>} Assistant's reply text
 */
export async function sendChatMessage(messages) {
  // Inject a system prompt to support Hinglish
  const systemMessage = {
    role: 'system',
    content: "You are a helpful AI assistant. You easily understand 'Hinglish' (a mix of Hindi and English written in the Latin alphabet). If the user asks a question in Hinglish, respond casually and fluently in Hinglish or English based on the context. Do not mention your underlying model architecture or Hugging Face. Keep responses helpful and concise.",
  };
  
  const payloadMessages = [systemMessage, ...messages];

  const response = await fetch(
    'https://router.huggingface.co/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2.5-1.5B-Instruct:featherless-ai',
        messages: payloadMessages,
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text().catch(() => response.statusText);
    throw new Error(`Chat API error ${response.status}: ${errText}`);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error('No response text returned from API.');
  return text;
}
