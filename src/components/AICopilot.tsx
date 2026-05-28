"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Send, BrainCircuit, MessageCircle } from "lucide-react";

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[340px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-zinc-200"
          >
            {/* Header with glowing effect */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-4 flex justify-between items-center text-white shadow-md relative overflow-hidden">
              {/* Subtle animated scanline */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-[scan_2s_ease-in-out_infinite]" />

              <div className="font-bold flex items-center gap-2 relative z-10">
                <div className="relative">
                  <Bot className="w-6 h-6 text-white animate-pulse" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                </div>
                <span className="text-lg tracking-wide">Alvion AI Copilot</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors relative z-10">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages List */}
            <div className="flex-grow p-4 overflow-y-auto bg-slate-50/50 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-2 mt-auto mb-1 flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-sm ${msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none shadow-md"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                    }`}>
                    {msg.sender === "bot" ? (
                      <div className="text-sm leading-relaxed break-words flex flex-col gap-2">
                        <ReactMarkdown
                          components={{
                            p: ({ node, ...props }) => <p className="m-0" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-4 m-0 space-y-1" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-4 m-0 space-y-1" {...props} />,
                            li: ({ node, ...props }) => <li className="m-0" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-blue-700" {...props} />,
                            a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <span className="leading-relaxed break-words">{msg.text}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start items-end"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-2 mb-1 flex-shrink-0">
                    <Bot className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <div className="px-4 py-3 bg-white border border-gray-200 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                  </div>
                </motion.div>
              )}

              {/* Invisible div for auto-scrolling */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-black shadow-inner"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-indigo-600 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.5)] ml-auto block cursor-pointer z-50"
      >
        {isOpen ? (
          <X className="w-8 h-8 transition-transform duration-300 rotate-90" />
        ) : (
          <MessageCircle className="w-8 h-8 fill-white/10 drop-shadow-md" />
        )}
      </motion.button>
    </div>
  );
}
