✅ CALLX – AI Voice Assistant for FAQ Handling (No Phone Calls)
🌟 Goal
Let users speak into a website and get human-like voice replies to their queries, powered by your AI trained on FAQs (from PDF or database).

🧠 How It Works (User Flow)
pgsql
Copy
Edit
👤 User opens website
   🎙️ Clicks mic → speaks question
        ↓
🧾 Whisper STT → Converts voice to text
        ↓
📚 LLM + FAISS → Finds best answer from FAQ
        ↓
🗣️ TTS → Converts answer to human voice
        ↓
🔊 Website plays back response like a real person
📦 Features
Upload FAQ as PDF or use predefined FAQ list

Human-like AI voice responses using open-source TTS

Real-time Q&A: mic input + voice reply

Scalable microservices via Docker Compose

Modular monorepo: easy to scale and maintain

🧩 Tech Stack (All Free/Open-Source)
Function	Tech
🧠 AI Reasoning	Ollama + Mistral 7B
🔍 Vector Search	FAISS + SentenceTransformers
📤 PDF Parsing	PyMuPDF / pdfplumber (Python)
🧾 Speech-to-Text	Faster-Whisper (Python, C++ inference)
🗣️ Text-to-Speech	Coqui TTS or Piper
🖥️ Frontend	React.js (Mic API, Audio Player)
🧩 Backend API	Java + Spring Boot (Routes + DB)
🗃️ Database	PostgreSQL (Optional for storing FAQs)


🧱 Monorepo Folder Structure
graphql
Copy
Edit
callx/
│
├── frontend/               # React.js
│   └── mic, audio player
│
├── backend/                # Spring Boot (API gateway)
│   └── endpoints for upload, query
│
├── llm-service/            # Python: Ollama + FAISS
│   └── pdf loader, embedder, retriever
│
├── stt-service/            # Python: Faster-Whisper (Mic → Text)
│
├── tts-service/            # Python: Coqui TTS (Text → Voice)
│
├── docker-compose.yml      # Orchestrate all
└── README.md
🧪 MVP Features You’ll Have
✅ Upload FAQ PDF or use default

✅ Ask questions via mic

✅ Answer retrieved using RAG (Retrieval Augmented Generation)

✅ AI voice speaks response

✅ Loop continues

🚀 Deployment Plan (Free or Low Cost)
Dev/Test: Docker Compose locally

Prod:

Frontend: Vercel or Netlify

Backend: Fly.io / Railway (free tier)

Ollama + Whisper: Host on Hetzner (cheap GPU VM) or Render

TTS: Same host or separate container

DB (if needed): Supabase (free PostgreSQL)

🎯 Let’s Build This
Here’s what I’ll now generate for you:

frontend/ folder with mic + player React UI

backend/ Spring Boot skeleton

llm-service/ with PDF → embeddings → RAG logic

stt-service/ with Faster-Whisper endpoint

tts-service/ with Coqui TTS

docker-compose.yml to tie it all together

Just confirm:

✅ Ready to start generating the project scaffold and code base?
Or would you like to start one service at a time (e.g., frontend first)?

Let me know with:

“Start scaffold” (all folders and Docker set)
or

“Start with frontend” (if you prefer step-by-step)