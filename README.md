<div align="center">

# ⚡ CodeBuddy AI Assistant

### A professional AI-powered coding companion built for developers

[![Live Demo](https://img.shields.io/badge/Live%20Demo-codebuddy--ai--alpha.vercel.app-2563eb?style=for-the-badge&logo=vercel&logoColor=white)](https://codebuddy-ai-alpha.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Anubhav741%2Fcodebuddy--ai-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anubhav741/codebuddy-ai)
[![Built for](https://img.shields.io/badge/Built%20for-Digital%20Heroes-e3b341?style=for-the-badge)](https://digitalheroesco.com)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

<br/>

> Built by **Anubhav Gupta** · [anubhavgupta960@gmail.com](mailto:anubhavgupta960@gmail.com)

</div>

---

## 📖 About

**CodeBuddy AI Assistant** is a developer-focused AI chatbot and image generation tool, built as a hiring task for [Digital Heroes](https://digitalheroesco.com).

I frequently use AI assistants while coding and wanted a **faster and cleaner learning assistant** — one that's focused on developers, not generic use cases. This project is the result of that goal.

### What makes it different from a generic ChatGPT clone?
- 🎯 **Developer-first UX** — Example prompts, code-focused suggestions, monospace typography
- 🌗 **Light & Dark theme** with a working toggle
- ⚡ **FLUX.1-schnell** image generation — state-of-the-art, fast model
- 🏗️ **Clean architecture** — custom React hooks, no external UI libraries
- 📱 **Fully responsive** — works great on mobile

---

## 🚀 Live Demo

| | Link |
|---|---|
| 🌐 **Production** | [https://codebuddy-ai-alpha.vercel.app](https://codebuddy-ai-alpha.vercel.app) |
| 📦 **GitHub Repo** | [https://github.com/Anubhav741/codebuddy-ai](https://github.com/Anubhav741/codebuddy-ai) |

---

## ✨ Features

### 💬 AI Chat Assistant
- Powered by **Qwen2.5** via Hugging Face Router
- Developer-focused example prompts (closures, React errors, debugging)
- Full conversation history with smooth auto-scroll
- Typing indicator animation
- Clear chat functionality
- One-click prompt insertion from suggestions

### 🎨 AI Image Generator
- Powered by **FLUX.1-schnell** (Black Forest Labs) — currently the fastest open image model
- 8 artistic style presets:

| Style | Description |
|---|---|
| 📷 Photorealistic | Ultra detailed, 8K |
| 🎨 Digital Art | Vibrant, concept art |
| 🖼️ Oil Painting | Classical, brushstroke texture |
| 💧 Watercolor | Soft, flowing colors |
| ✨ Anime | Cel-shaded illustration |
| 🎬 Cinematic | Film grain, dramatic lighting |
| 🧊 3D Render | Octane render, volumetric CGI |
| 👾 Pixel Art | Retro 16-bit |

- Download and share generated images
- 500 character prompt limit with live counter

### 🎨 UI / UX
- **Light theme** (default) + **Dark mode** toggle
- **Inter** font + **JetBrains Mono** for code elements
- Subtle grid background with gradient accents
- Animated badge, typing dots, progress bar
- Fully responsive — mobile, tablet, desktop

### 🔗 Branding
- **"Built for Digital Heroes"** button → [digitalheroesco.com](https://digitalheroesco.com)
- **Why I built this** card with personal motivation
- Footer with creator name, email, and links

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19 + JSX |
| **Build Tool** | Vite 8 |
| **Styling** | Vanilla CSS (custom design system, zero UI libs) |
| **AI Chat** | Hugging Face Router → Qwen2.5-1.5B-Instruct |
| **AI Images** | Hugging Face Inference → FLUX.1-schnell |
| **Deployment** | Vercel |
| **Font** | Inter + JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
codebuddy-ai/
├── src/
│   ├── App.jsx              # Main app, routing, tab switching, theme toggle
│   ├── App.css              # Component styles & design system
│   ├── index.css            # Global styles, CSS variables (light + dark)
│   ├── hfApi.js             # Hugging Face API calls (chat + image)
│   ├── useTextChat.js       # Custom hook — chat state, messages, errors
│   └── useImageGenerator.js # Custom hook — image generation state
├── index.html               # HTML template with SEO meta tags
├── .env.example             # Environment variable template
├── vite.config.js
└── package.json
```

---

## ⚙️ Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/Anubhav741/codebuddy-ai.git
cd codebuddy-ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your Hugging Face token
Create a `.env` file in the root directory:
```env
VITE_HF_TOKEN=hf_your_token_here
```

> 🔑 Get your free token at [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) — requires **Read** access.

### 4. Start the dev server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deploy to Vercel

### Option A — Via Vercel Dashboard (recommended)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `Anubhav741/codebuddy-ai` from GitHub
3. Add environment variable: `VITE_HF_TOKEN` = your token
4. Click **Deploy**

### Option B — Via CLI
```bash
# Add env variable
npx vercel env add VITE_HF_TOKEN production

# Deploy to production
npx vercel --prod
```

---

## 🔌 API Reference

| Feature | Endpoint | Model |
|---|---|---|
| Chat | `router.huggingface.co/v1/chat/completions` | `Qwen/Qwen2.5-1.5B-Instruct:featherless-ai` |
| Images | `router.huggingface.co/hf-inference/models/...` | `black-forest-labs/FLUX.1-schnell` |

> ⚠️ **Note on VITE_ prefix:** HF tokens prefixed with `VITE_` are bundled into the client. For production apps, proxy API calls through a server-side function. For this demo/hiring task, client-side is acceptable.

---

## 👤 Author

**Anubhav Gupta**

- 📧 Email: [anubhavgupta960@gmail.com](mailto:anubhavgupta960@gmail.com)
- 💼 Built for: [Digital Heroes](https://digitalheroesco.com)
- 🐙 GitHub: [Anubhav741](https://github.com/Anubhav741)

---

## 📄 License

This project was created as a developer hiring task for **Digital Heroes**. Feel free to reference the code for learning purposes.

---

<div align="center">
  Built with ❤️ using React + Vite · Deployed on Vercel
</div>
