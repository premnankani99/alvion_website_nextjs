"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "bot" | "user";
  text: string;
}

export default function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi there! I am Alvion AI Copilot. How can I help you transform your business today? 🚀" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // 1. User ka message UI pe dikhao
    setMessages((prev) => [...prev, { sender: "user", text: inputText }]);
    const userMessage = inputText;
    setInputText(""); // Input box khali kar do

    // 2. Typing animation start
    setIsTyping(true);

    try {
      // 3. Apna message Backend (route.ts) ko bhejo
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history: messages }),
      });

      const data = await response.json();
      
      // 4. Backend se jo Gemini ka reply aaya, use dikhao aur typing hatao
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);

    } catch (error) {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: "Oops! Backend se connect nahi ho pa raha." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-zinc-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 flex justify-between items-center text-white shadow-sm">
            <div className="font-bold flex items-center gap-2">
              <span className="text-xl">🤖</span> Alvion AI Copilot
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">✕</button>
          </div>

          {/* Messages List */}
          <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2.5 rounded-2xl max-w-[85%] text-sm ${
                  msg.sender === "user" 
                    ? "bg-blue-600 text-white rounded-br-none shadow-md" 
                    : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                }`}>
                  {msg.sender === "bot" ? (
                    <div className="text-sm leading-relaxed break-words flex flex-col gap-2">
                      <ReactMarkdown 
                        components={{
                          p: ({node, ...props}) => <p className="m-0" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-4 m-0 space-y-1" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal pl-4 m-0 space-y-1" {...props} />,
                          li: ({node, ...props}) => <li className="m-0" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                          a: ({node, ...props}) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <span className="leading-relaxed break-words">{msg.text}</span>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Animation */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-5 py-3.5 bg-white border border-gray-200 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            
            {/* Invisible div for auto-scrolling */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..." 
              className="flex-grow px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-black"
            />
            <button 
              type="submit" 
              disabled={!inputText.trim() || isTyping}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-14 h-14 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full flex items-center justify-center text-2xl shadow-[0_10px_25px_rgba(37,99,235,0.4)] hover:scale-105 hover:shadow-[0_15px_35px_rgba(37,99,235,0.5)] transition-all ml-auto block cursor-pointer"
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}
