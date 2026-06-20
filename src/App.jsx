import { useRef, useEffect, useState } from 'react';
import { useImageGenerator } from './useImageGenerator';
import { useTextChat } from './useTextChat';
import './App.css';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconSparkles = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
  </svg>
);
const IconMoon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
const IconSun = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);
const IconImage = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
);
const IconChat = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconDownload = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const IconShare = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);
const IconRefresh = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
    <path d="M21 3v5h-5"/>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
    <path d="M8 16H3v5"/>
  </svg>
);
const IconAlertCircle = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const IconPencil = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
  </svg>
);
const IconSend = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2 11 13"/>
    <path d="M22 2 15 22 11 13 2 9l20-7z"/>
  </svg>
);
const IconTrash = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);
const IconBot = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/>
    <rect width="16" height="12" x="4" y="8" rx="2"/>
    <path d="M2 14h2M20 14h2M9 13v2M15 13v2"/>
  </svg>
);
const IconCode = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconExternalLink = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const IconMail = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconHeart = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconLightbulb = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/><path d="M10 22h4"/>
  </svg>
);

// ─── Constants ────────────────────────────────────────────────────────────────
const MAX_CHARS = 500;
const STYLES = [
  { value: 'photorealistic', label: '📷  Photorealistic' },
  { value: 'digital-art',    label: '🎨  Digital Art' },
  { value: 'oil-painting',   label: '🖼️  Oil Painting' },
  { value: 'watercolor',     label: '💧  Watercolour' },
  { value: 'anime',          label: '✨  Anime' },
  { value: 'cinematic',      label: '🎬  Cinematic' },
  { value: '3d-render',      label: '🧊  3D Render' },
  { value: 'pixel-art',      label: '👾  Pixel Art' },
];

const CHAT_EXAMPLE_PROMPTS = [
  'Explain JavaScript closures',
  'Fix my React error',
  'Summarize this text',
  'Help debug code',
];

// ─── Image Tab ─────────────────────────────────────────────────────────────────
function ImageTab() {
  const {
    generate, imageUrl, isLoading, error, reset,
    prompt, setPrompt, style, setStyle,
  } = useImageGenerator();

  const textareaRef = useRef(null);
  const charsLeft = MAX_CHARS - prompt.length;

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 220) + 'px';
  }, [prompt]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (!isLoading && prompt.trim()) generate();
    }
  };

  const handleDownload = async () => {
    if (!imageUrl) return;
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `generated-${Date.now()}.png`;
    a.click();
  };

  const handleShare = async () => {
    if (!imageUrl) return;
    if (navigator.share) {
      await navigator.share({ title: 'AI Generated Image', url: imageUrl });
    } else {
      await navigator.clipboard.writeText(imageUrl.slice(0, 100) + '…');
      alert('Image data URL copied to clipboard!');
    }
  };

  return (
    <>
      {/* Prompt */}
      <div className="input-group">
        <label className="input-label" htmlFor="prompt-input">
          <IconPencil /> Your Prompt
        </label>
        <div className="input-wrapper">
          <textarea
            id="prompt-input"
            ref={textareaRef}
            className="prompt-textarea"
            value={prompt}
            onChange={(e) => {
              if (e.target.value.length <= MAX_CHARS) {
                setPrompt(e.target.value);
                if (error) reset();
              }
            }}
            onKeyDown={handleKeyDown}
            placeholder="A neon-lit Tokyo street at night, rain reflections, cyberpunk aesthetic…"
            rows={4}
            disabled={isLoading}
          />
          <span className={`char-count${charsLeft < 50 ? ' warn' : ''}`}>{charsLeft}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="controls-row">
        <select
          id="style-select"
          className="style-select"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          disabled={isLoading}
        >
          {STYLES.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>

        <button
          id="generate-btn"
          className="generate-btn"
          onClick={generate}
          disabled={isLoading || !prompt.trim()}
        >
          {isLoading ? (
            <><span className="loading-dots"><i /><i /><i /></span> Generating…</>
          ) : (
            <><IconSparkles /> Generate</>
          )}
        </button>
      </div>

      <p className="tip-text">
        Tip: Press{' '}
        <kbd>⌘ Enter</kbd> to generate
      </p>

      {/* Result */}
      <div className="result-section" aria-live="polite">
        {isLoading && (
          <div className="loading-container" role="status">
            <div className="spinner-ring" />
            <div className="loading-text">
              <p>Generating your image<span className="loading-dots"><i /><i /><i /></span></p>
              <span>This can take 10–30 seconds</span>
            </div>
            <div className="progress-bar-wrap">
              <div className="progress-bar-fill" />
            </div>
          </div>
        )}

        {!isLoading && error && (
          <div className="error-box" role="alert">
            <span className="error-icon"><IconAlertCircle /></span>
            <p><strong>Generation failed</strong>{error}</p>
          </div>
        )}

        {!isLoading && !error && imageUrl && (
          <div className="image-result">
            <div className="image-header">
              <span className="image-title"><IconImage /> Generated Image</span>
              <div className="image-actions">
                <button className="action-btn" onClick={generate}><IconRefresh /> Regenerate</button>
                <button className="action-btn" onClick={handleShare}><IconShare /> Share</button>
                <button className="action-btn" onClick={handleDownload}><IconDownload /> Save</button>
              </div>
            </div>
            <div className="image-frame">
              <img src={imageUrl} alt={`AI generated: ${prompt}`} />
              <div className="image-overlay" />
              <div className="image-caption">{prompt}</div>
            </div>
          </div>
        )}

        {!isLoading && !error && !imageUrl && (
          <div className="empty-placeholder">
            <div className="empty-icon"><IconImage /></div>
            <p>Your generated image will appear here.<br />Enter a prompt and hit <strong>Generate</strong>.</p>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Chat Tab ──────────────────────────────────────────────────────────────────
function ChatTab() {
  const { messages, input, setInput, sendMessage, isLoading, error, clearChat } = useTextChat();
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleExampleClick = (prompt) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  return (
    <div className="chat-container">
      {/* Messages */}
      <div className="chat-messages" ref={scrollRef} aria-live="polite" aria-label="Chat history">
        {messages.length === 0 && !isLoading && (
          <div className="chat-empty">
            <div className="chat-empty-icon"><IconBot /></div>
            <p>Ask me anything about <strong>code</strong>!<br />I'm here to help you learn and debug faster.</p>
            <div className="chat-suggestions">
              {['What is a JavaScript closure?', 'Explain async/await', 'How does React reconciliation work?'].map((s) => (
                <button key={s} className="suggestion-chip" onClick={() => { setInput(s); inputRef.current?.focus(); }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message ${msg.role}`}>
            {msg.role === 'assistant' && (
              <div className="msg-avatar"><IconBot /></div>
            )}
            <div className="msg-bubble">
              <p>{msg.content}</p>
            </div>
            {msg.role === 'user' && (
              <div className="msg-avatar user-avatar">You</div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="chat-message assistant">
            <div className="msg-avatar"><IconBot /></div>
            <div className="msg-bubble typing-bubble">
              <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
            </div>
          </div>
        )}

        {error && (
          <div className="error-box" role="alert" style={{ margin: '8px 0' }}>
            <span className="error-icon"><IconAlertCircle /></span>
            <p><strong>Error</strong>{error}</p>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="chat-input-area">
        {/* Example Prompts above input */}
        <div className="chat-example-prompts">
          <div className="chat-example-prompts-label">
            <IconLightbulb /> Example Prompts
          </div>
          <div className="chat-example-chips">
            {CHAT_EXAMPLE_PROMPTS.map((p) => (
              <button
                key={p}
                className="chat-example-chip"
                onClick={() => handleExampleClick(p)}
                disabled={isLoading}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="chat-input-row">
          <textarea
            ref={inputRef}
            id="chat-input"
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about code, debugging, concepts… (Enter to send)"
            rows={1}
            disabled={isLoading}
            aria-label="Chat message input"
          />
          <button
            id="send-btn"
            className="send-btn"
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <IconSend />
          </button>
        </div>
        <div className="chat-footer-row" style={{ justifyContent: 'flex-end' }}>
          {messages.length > 0 && (
            <button className="action-btn" onClick={clearChat} style={{ padding: '5px 10px' }}>
              <IconTrash /> Clear chat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [isDarkMode, setIsDarkMode] = useState(false); // Default light theme

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="app-bg">
      <div className="container">

        {/* ── Top Nav Bar ── */}
        <nav className="header-nav">
          <div className="header-nav-brand">
            <div className="brand-icon">⚡</div>
            <span className="brand-name">CodeBuddy AI</span>
            <span className="brand-version">v1.0</span>
          </div>
          <div className="header-nav-actions">
            <a
              id="digital-heroes-btn"
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dh-btn"
            >
              <span className="dh-icon">🚀</span>
              Built for Digital Heroes
              <IconExternalLink />
            </a>
            <button
              onClick={toggleDarkMode}
              className="theme-toggle-btn"
              aria-label="Toggle light/dark mode"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <IconSun /> : <IconMoon />}
            </button>
          </div>
        </nav>

        {/* ── Hero ── */}
        <header className="hero">
          <div className="badge">
            <span className="badge-dot" />
            AI Assistant · Developer Edition
          </div>
          <h1>CodeBuddy AI Assistant</h1>
          <p>Your intelligent coding companion. Debug faster, learn deeper, and build better — powered by AI.</p>
        </header>

        <div className="section-divider" aria-hidden="true" />

        {/* ── Why I Built This Card ── */}
        <div className="why-card" role="complementary" aria-label="About this project">
          <div className="why-card-icon">💡</div>
          <div className="why-card-content">
            <strong>Why I built this</strong>
            <p>
              I frequently use AI assistants while coding and wanted a faster and cleaner learning assistant —
              one that's focused on developers, not generic use cases.
            </p>
          </div>
        </div>

        {/* ── Tab Switcher ── */}
        <div className="tab-switcher" role="tablist">
          <button
            id="tab-chat"
            role="tab"
            className={`tab-btn${activeTab === 'chat' ? ' active' : ''}`}
            onClick={() => setActiveTab('chat')}
            aria-selected={activeTab === 'chat'}
          >
            <IconChat /> AI Chat
          </button>
          <button
            id="tab-image"
            role="tab"
            className={`tab-btn${activeTab === 'image' ? ' active' : ''}`}
            onClick={() => setActiveTab('image')}
            aria-selected={activeTab === 'image'}
          >
            <IconImage /> Image Generator
          </button>
        </div>

        {/* ── Main Card ── */}
        <main className="card" role="main">
          {activeTab === 'image' ? <ImageTab /> : <ChatTab />}
        </main>

      </div>

      {/* ── Site Footer ── */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-brand">
            <span className="footer-brand-name">⚡ CodeBuddy AI Assistant</span>
            <div className="footer-divider" />
            <span className="footer-creator">
              Created by <strong>Anubhav Gupta</strong>
            </span>
          </div>

          <div className="footer-meta">
            <a href="mailto:anubhavgupta960@gmail.com" id="footer-email-link">
              <IconMail />
              anubhavgupta960@gmail.com
            </a>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-dh-link"
            >
              <IconExternalLink />
              digitalheroesco.com
            </a>
          </div>

          <p className="footer-copy">
            Built with <IconHeart style={{ display: 'inline', color: '#f85149', verticalAlign: 'middle' }} /> using React + Vite · Deployed on Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
