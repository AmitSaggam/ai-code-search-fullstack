# 🚀 AI Code Search (Fullstack)

An **AI-powered code search and explanation app** built with **React (frontend), Node.js/Express (backend), and Groq API (LLaMA 3 models)**.  
It lets developers search for code snippets, ask programming questions, and get instant AI-generated solutions.

---

## 🌟 Features
- 🔍 **Ask coding questions** (C++, Python, JavaScript, etc.)  
- 🤖 **AI-generated answers** powered by **Groq LLaMA 3**  
- ⚡ **Fast response time** (low-latency inference)  
- 🌐 **Full-stack app** with **React + Express**  
- 🚀 **Deployed on Vercel (frontend) & Render (backend)**  

---

## 🛠️ Tech Stack
**Frontend:** React, Vercel  
**Backend:** Node.js, Express, Render  
**AI Model:** Groq LLaMA 3 (`llama3-70b-8192`)  

---

## 📦 Installation (Run Locally)

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/ai-code-search-fullstack.git
   cd ai-code-search-fullstack
Setup backend

bash
Copy
Edit
cd server
npm install
Add .env file:

env
Copy
Edit
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama3-70b-8192
PORT=5000
Run server:

bash
Copy
Edit
node index.js
Setup frontend

bash
Copy
Edit
cd client
npm install
Update src/config.js (or where your API URL is stored):

js
Copy
Edit
export const API_URL = "http://localhost:5000/api/ask";
Run frontend:

bash
Copy
Edit
npm start
🌍 Deployment
Frontend (Vercel): ai-code-search-fullstack.vercel.app

Backend (Render): ai-code-search-fullstack.onrender.com

🧑‍💻 Example Queries
Give me binary search code in C++

Explain time complexity of merge sort

Python code to reverse a linked list

📸 Screenshots
(Add screenshots/GIFs of your app UI here)

🤝 Contributing
Contributions are welcome! Feel free to open issues and PRs.

📜 License
This project is licensed under the MIT License.
