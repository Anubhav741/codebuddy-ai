# 🤖 AI Studio (Chat & Image Generator)

Welcome to **AI Studio**, a premium, dual-purpose web application featuring an interactive AI Chat Assistant and an AI-powered Text-to-Image Generator. 

Built with modern React 19, Vite, and highly polished Vanilla CSS (adhering to a refined Soft UI design system), it connects directly to state-of-the-art models hosted on Hugging Face.

---

## 🔗 Live Deployment
🚀 **Open the Application:** [https://chat-bot-virid-three.vercel.app](https://chat-bot-virid-three.vercel.app)

---

## ✨ Features

### 1. 💬 Hinglish AI Chat Assistant
* **Natural Language Processing:** Engaging conversational companion powered by `Qwen2.5` instruction models.
* **Hinglish Understanding:** Pre-configured system instructions allow the assistant to easily parse and reply to Hindi-English mixed languages (e.g., *"Aaj ka weather kaisa hai?"* or *"Help me write an email"*).
* **Context Preservation:** Maintains thread history dynamically.

### 2. 🎨 AI Image Generator
* **Stable Diffusion XL:** Generates high-quality illustrations from text descriptions using the SDXL 1.0 architecture.
* **Preset Styles:** Toggle between 8 distinct artistic presets:
  - 📸 **Photorealistic** (ultra detailed, 8k)
  - 🎨 **Digital Art** (vibrant, concept art)
  - 🖌️ **Oil Painting** (classical, brushstroke texture)
  - 💧 **Watercolor** (artistic, flowing colors)
  - 🇯🇵 **Anime** (cel shaded illustration)
  - 🎬 **Cinematic** (dramatic lighting, film grain)
  - 🧊 **3D Render** (octane render, CGI)
  - 👾 **Pixel Art** (retro 16-bit)
* **Smooth Image Previews:** Instantly renders base64-encoded image payloads with graceful loading transitions.

### 3. 🌗 Soft UI Theme System
* **Premium Aesthetics:** Cream and blush color palettes, elegant Cormorant Garamond serif headings, and micro-interactions.
* **Dark Mode:** A togglable dark mode (using Sun/Moon icons in the header) adapting custom CSS variables to a comfortable charcoal theme.
* **Reduced Motion Support:** Respects system-level `prefers-reduced-motion` settings.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework:** React 19 (Hooks, Context, Declarative UI)
* **Build Tool:** Vite (Hot Module Replacement, super-fast bundling)
* **Styling:** Custom Vanilla CSS (`src/App.css` and `src/index.css`)
* **API Integration:** Direct HTTPS requests via standard `fetch` with raw token authorization headers to the Hugging Face Router endpoints.

### Key File Structure:
* 📂 `src/hfApi.js`: Handles API calls for both text chat completions and image generation.
* 📂 `src/useTextChat.js`: Custom React hook encapsulating message lists, input states, loading status, and error states for chat.
* 📂 `src/useImageGenerator.js`: Custom React hook encapsulating generation inputs, loading animations, image base64 responses, and styles.
* 📂 `src/App.jsx`: Main layouts, tab-switching systems (Chat vs. Image Generator), and Dark Mode context bindings.

---

## 🚀 Local Development Setup

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Anubhav741/chat-bot.git
cd chat-bot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory:
```env
VITE_HF_TOKEN=your_hugging_face_token_here
```
> Get your Hugging Face API token from [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) (requires read access).

### 4. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 🌐 Deployment to Vercel

The application is deployed via Vercel CLI. When pushing updates:
1. Ensure your Environment Variable `VITE_HF_TOKEN` is added to the Vercel dashboard or CLI:
   ```bash
   npx vercel env add VITE_HF_TOKEN production --value "your_token" --yes
   ```
2. Trigger the production deployment:
   ```bash
   npx vercel --prod --yes
   ```

---

## 📄 License
This project is private and created as part of AI UI UX showcase.
