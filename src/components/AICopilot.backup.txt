"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "bot" | "user";
  text: string;
}

export default function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi there! I am Alvion AI Copilot. How can I help you transform your business today? 🚀",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Show a welcome notification bubble after 5 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputText("");
    setShowNotification(false);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";
      const query = text.toLowerCase();

      if (query.includes("service") || query.includes("offer") || query.includes("work")) {
        replyText = "We specialize in Appian Low-Code automation, robust Spring Boot Java backends, and highly creative React / React Native frontends! Check out our Services page for details.";
      } else if (query.includes("job") || query.includes("career") || query.includes("apply") || query.includes("hiring")) {
        replyText = "We have 6 active openings in Jaipur! We are looking for Appian Developers, React Native Developers, Associate Software Developers, Automation Testers, HR, and Interns. Head over to our Careers page to apply!";
      } else if (query.includes("hire") || query.includes("contact") || query.includes("discuss") || query.includes("call")) {
        replyText = "Great choice! Drop us a message on our Contact page or visit our headquarters in Jaipur. We will get back to you within 24 hours to schedule a deep dive discussion!";
      } else if (query.includes("location") || query.includes("office") || query.includes("jaipur") || query.includes("address")) {
        replyText = "Alvion Technologies is headquartered in Jawahar Nagar, Jaipur, Rajasthan. You can view our office address and interactive Google Maps layout on our Contact page!";
      } else {
        replyText = "That's a great question! For high-end enterprise solutions, we combine Appian, Java and React to speed up workflow automation. I highly recommend checking out our Services and Careers pages!";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: replyText }]);
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 font-sans">
      <AnimatePresence>
        {/* Chat window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[320px] sm:w-[380px] h-[500px] rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-slate-900/95 border border-slate-700/50 backdrop-blur-xl flex flex-col overflow-hidden mb-6"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-cyan-600/50 to-purple-600/50 border-b border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-xl animate-pulse">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Alvion AI Copilot</h3>
                  <p className="text-[11px] text-cyan-300 font-medium tracking-wide uppercase">Active Now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-5 py-3 rounded-[22px] text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-cyan-500 text-white rounded-br-none shadow-[0_4px_15px_rgba(6,182,212,0.3)]"
                        : "bg-slate-800/80 text-slate-100 rounded-bl-none border border-slate-700/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing simulator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-800/80 text-slate-400 px-5 py-3 rounded-[22px] rounded-bl-none border border-slate-700/50 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Suggestion Chips */}
            {messages.length === 1 && !isTyping && (
              <div className="px-6 py-2 flex flex-wrap gap-2">
                {[
                  "💡 View Services",
                  "💼 Job Careers",
                  "🤝 Hire Alvion",
                  "📍 Office Location",
                ].map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option.substring(2))}
                    className="text-[12px] px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-cyan-300 hover:text-white transition-all font-medium"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* Message Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything about Alvion..."
                className="flex-grow px-4 py-2.5 rounded-full bg-slate-800 text-white placeholder-slate-400 text-sm border border-slate-700/50 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center transition-colors shadow-lg shadow-cyan-500/20"
              >
                ✈️
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greeting Bubble Notification */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            className="absolute bottom-18 right-0 w-64 p-4 rounded-2xl bg-slate-800 border border-slate-700/50 shadow-2xl text-slate-100 text-xs leading-relaxed backdrop-blur-md cursor-pointer flex flex-col gap-2"
            onClick={() => {
              setIsOpen(true);
              setShowNotification(false);
            }}
          >
            <div className="font-bold text-cyan-400 flex items-center gap-1.5">
              <span>🤖</span> Alvion AI Assistant
            </div>
            <p>Hey! Need help exploring our Appian, Java, or React solutions? Let's discuss! Click here to chat.</p>
            <button className="self-end text-[10px] font-bold uppercase text-cyan-300 tracking-wider">Start Chat &rarr;</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 hover:scale-110 active:scale-95 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all cursor-pointer relative group"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-25 group-hover:opacity-40" />
        <span className="text-2xl relative z-10">{isOpen ? "✕" : "🤖"}</span>
      </button>
    </div>
  );
}
