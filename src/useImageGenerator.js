import { useState, useCallback } from 'react';
import { generateImage } from './hfApi';

export function useImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('photorealistic');
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const reset = useCallback(() => {
    setImageUrl(null);
    setError(null);
  }, []);

  const generate = useCallback(async () => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setImageUrl(null);
    setError(null);

    try {
      const dataUrl = await generateImage(trimmed, style);
      setImageUrl(dataUrl);
    } catch (err) {
      console.error('[Image generation]', err);
      setError(err.message || 'Image generation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, style]);

  return { generate, imageUrl, isLoading, error, reset, prompt, setPrompt, style, setStyle };
}
