"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Send, BrainCircuit, MessageCircle, RefreshCw } from "lucide-react";
import { parseIntent } from "@/lib/intentParser";

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

  const quickQuestions = [
    "What are your services?",
    "Show me current job openings",
    "Where is your office located?",
    "Book a free consultation"
  ];

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

    // --- NEW TIER 1: REGEX PATTERN MATCHING ---
    const quickReply = parseIntent(userMessage);
    if (quickReply) {
      // Simulate slight delay so it feels natural
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { sender: "bot", text: quickReply }]);
      }, 500);
      return; // Stop execution here, ZERO API COST!
    }
    // --- END TIER 1 ---

    try {
      // 3. Apna message Backend (route.ts) ko bhejo (Gemini AI Fallback)
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

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    // Simulate form submission
    setTimeout(() => {
      const form = document.getElementById("chat-form");
      if (form) form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    }, 10);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[360px] sm:w-[380px] h-[550px] sm:h-[600px] flex flex-col bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100/50"
          >
            {/* Header with interactive effects */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 p-4 flex justify-between items-center text-white shadow-sm relative overflow-hidden group">
              {/* Subtle animated scanline */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-[scan_2s_ease-in-out_infinite] group-hover:opacity-50 transition-opacity" />

              <div className="font-bold flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-inner group-hover:bg-white/30 transition-all duration-300">
                    <Bot className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] tracking-wide font-semibold text-white drop-shadow-sm">Alvion AI Copilot</span>
                </div>
              </div>

              <div className="flex items-center gap-1 relative z-10">
                <button 
                  onClick={() => setMessages([{ sender: "bot", text: "Hi there! I am Alvion AI Copilot. How can I help you transform your business today? 🚀" }])} 
                  className="text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-all active:scale-95 group-hover:rotate-180 duration-500"
                  title="Restart Chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-all active:scale-95"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-grow p-4 overflow-y-auto bg-[#fafafa] space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center mr-2 mt-auto mb-1 flex-shrink-0 shadow-sm">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm ${msg.sender === "user"
                      ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-br-sm shadow-[0_4px_15px_-5px_rgba(79,70,229,0.4)]"
                      : "bg-white border border-slate-100 text-slate-800 rounded-bl-sm shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]"
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

            {/* Quick Suggestions Chips */}
            <div 
              className="bg-white/95 backdrop-blur-md px-4 py-3 flex items-center gap-2 overflow-x-auto border-t border-slate-100 hide-scroll flex-shrink-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                .hide-scroll::-webkit-scrollbar { display: none; }
              `}} />
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestion(q)}
                  className="whitespace-nowrap flex-shrink-0 px-4 py-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[13px] font-medium rounded-full shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-all duration-300 active:scale-95"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <form id="chat-form" onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow pl-5 pr-12 py-3 bg-slate-50 border border-slate-200/60 rounded-full text-[14px] focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/50 focus:bg-white transition-all text-slate-800 placeholder-slate-400 shadow-inner"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2.5 rounded-full hover:shadow-[0_4px_15px_-3px_rgba(79,70,229,0.5)] hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
