// App.jsx
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    const userMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/ask`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      const reply = data.reply || "No response received.";
      const aiMessage = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        role: "assistant",
        content: "Something went wrong. Try again!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  return (
    <div className={`chat-container ${darkMode ? "dark" : "light"}`}>
      <header className="chat-header">
        <h1>💬 AI Code Search</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main className="chat-main">
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              className={`chat-bubble ${msg.role}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="chat-avatar">
                {msg.role === "user" ? "🧑‍💻" : "🤖"}
              </div>
              <div className="chat-content">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input">
          <textarea
            rows="2"
            placeholder="Ask your coding question..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleAsk()}
          />
          <button onClick={handleAsk} disabled={loading}>
            {loading ? "..." : "Send"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
