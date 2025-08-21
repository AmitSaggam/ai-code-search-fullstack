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
   git clone https://github.com/AmitSaggam/ai-code-search-fullstack.git
   cd ai-code-search-fullstack
   
2. Setup backend
-cd server
-npm install

3. Add .env file:
-GROQ_API_KEY=your_groq_api_key
-GROQ_MODEL=llama3-70b-8192
-PORT=5000

4. Run server:
-node index.js

5. Setup frontend
-cd client
-npm install

6. Update src/config.js (or where your API URL is stored):
-export const API_URL = "http://localhost:5000/api/ask";

7. Run frontend:
-npm start

🌍 Deployment
Frontend (Vercel): ai-code-search-fullstack.vercel.app

Backend (Render): ai-code-search-fullstack.onrender.com

🧑‍💻 Example Queries
-Give me binary search code in C++.
-Explain time complexity of merge sort.
-Python code to reverse a linked list

📸 Screenshots
<img width="937" height="440" alt="image" src="https://github.com/user-attachments/assets/92e594a4-8def-42e1-a0ad-ec2d3c168b63" />


🤝 Contributing
Contributions are welcome! Feel free to open issues and PRs.

📜 License
This project is licensed under the MIT License.
