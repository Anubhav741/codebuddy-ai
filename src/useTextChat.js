import { useState, useCallback } from 'react';
import { sendChatMessage } from './hfApi';

export function useTextChat() {
  // messages: Array<{ role: 'user'|'assistant', content: string, id: number }>
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { role: 'user', content: trimmed, id: Date.now() };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Only pass role + content to the API
      const apiPayload = updatedMessages.map(({ role, content }) => ({ role, content }));
      const replyText = await sendChatMessage(apiPayload);

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: replyText, id: Date.now() + 1 },
      ]);
    } catch (err) {
      console.error('[Chat]', err);
      setError(err.message || 'Failed to get a response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, isLoading]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return { messages, input, setInput, sendMessage, isLoading, error, clearChat };
}
