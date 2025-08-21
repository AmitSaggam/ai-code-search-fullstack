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
- **Frontend:** React, Vercel  
- **Backend:** Node.js, Express, Render  
- **AI Model:** Groq LLaMA 3 (`llama3-70b-8192`)  

---

## 📦 Installation (Run Locally)

### 1. Clone the repo
```bash
git clone https://github.com/your-username/ai-code-search-fullstack.git
cd ai-code-search-fullstack
```

2. Setup Backend
```bash

cd server
npm install
```
3. Create a .env file inside server/:

```env

GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama3-70b-8192
PORT=5000
```
4. Run the backend server:

```bash
node index.js
```
5. Setup Frontend
```bash

cd client
npm install
```
6. Update API endpoint in src/config.js (or wherever your API URL is stored):

```js

export const API_URL = "http://localhost:5000/api/ask";
```
Run the frontend:

```bash
npm start
```
🌍 Deployment
Frontend (Vercel): ai-code-search-fullstack.vercel.app

Backend (Render): t

🧑‍💻 Example Queries
-Give me binary search code in C++
-Explain time complexity of merge sort
-Python code to reverse a linked list

📸 Screenshots
<img width="929" height="425" alt="image" src="https://github.com/user-attachments/assets/9b52774e-97b3-4ccd-a28b-e7c448676705" />


🤝 Contributing
Contributions are welcome! Feel free to open issues and PRs.

📜 License
This project is licensed under the MIT License.
