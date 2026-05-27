"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Node {
  x: number;
  y: number;
  r: number;
  color: string;
  vx?: number;
  vy?: number;
}

export default function QuantumConsole() {
  const [activeTab, setActiveTab] = useState<"bpm" | "neural" | "scale">("bpm");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background animation logic based on selected algorithm tab
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    const height = (canvas.height = 360);

    // Initialise elements based on active tab
    const nodes: Node[] = [];
    let angle = 0;

    if (activeTab === "bpm") {
      // Rotating workflow circles and data streams (Fuchsia Theme)
      const center = { x: width / 2, y: height / 2 };
      for (let i = 0; i < 5; i++) {
        nodes.push({
          x: center.x + Math.cos((i * Math.PI * 2) / 5) * 80,
          y: center.y + Math.sin((i * Math.PI * 2) / 5) * 80,
          r: 8,
          color: "rgba(217, 70, 239, 0.8)", // Fuchsia
        });
      }
    } else if (activeTab === "neural") {
      // Coordinate brain connections (Cyan Theme)
      for (let i = 0; i < 15; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 4 + 2,
          color: "rgba(6, 182, 212, 0.8)", // Cyan
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
        });
      }
    } else {
      // Cascading data columns (Emerald Theme)
      for (let i = 0; i < 25; i++) {
        nodes.push({
          x: (i % 5) * (width / 5) + 30 + Math.random() * 20,
          y: Math.random() * height,
          r: Math.random() * 3 + 1,
          color: "rgba(16, 185, 129, 0.7)", // Emerald
          vy: Math.random() * 1.5 + 0.5,
        });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw mathematical grid backdrop (Quantango Style)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 0.5;
      const step = 30;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Tab Specific Rendering
      if (activeTab === "bpm") {
        angle += 0.01;
        const center = { x: width / 2, y: height / 2 };

        // Draw rotating orbits
        ctx.beginPath();
        ctx.arc(center.x, center.y, 80, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(217, 70, 239, 0.15)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(center.x, center.y, 110, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(217, 70, 239, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw rotating nodes and link them to center
        nodes.forEach((node, i) => {
          const currentAngle = angle + (i * Math.PI * 2) / 5;
          node.x = center.x + Math.cos(currentAngle) * 80;
          node.y = center.y + Math.sin(currentAngle) * 80;

          // Connecting lines to center
          ctx.beginPath();
          ctx.moveTo(center.x, center.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = "rgba(217, 70, 239, 0.15)";
          ctx.stroke();

          // Draw node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(217, 70, 239, 0.8)";
          ctx.fill();
          ctx.shadowBlur = 0; // reset shadow
        });

        // Center hub
        ctx.beginPath();
        ctx.arc(center.x, center.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#fff";
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (activeTab === "neural") {
        // Draw coordinate neural net lines
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - dist / 100)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Draw floating brain coordinates
        nodes.forEach((node) => {
          node.x += node.vx || 0;
          node.y += node.vy || 0;

          if (node.x < 0 || node.x > width) node.vx = -(node.vx || 0.5);
          if (node.y < 0 || node.y > height) node.vy = -(node.vy || 0.5);

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(6, 182, 212, 0.8)";
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      } else {
        // Draw cascading green database streams
        nodes.forEach((node) => {
          node.y += node.vy || 1;
          if (node.y > height) {
            node.y = 0;
            node.x = Math.random() * width;
          }

          // Dynamic light trace line trailing
          ctx.beginPath();
          ctx.moveTo(node.x, node.y - 15);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = "rgba(16, 185, 129, 0.35)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(16, 185, 129, 0.8)";
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [activeTab]);

  return (
    <section className="py-12 md:py-20 bg-[#040814] text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Glowing Nebula */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          {/* Badge removed per user request */}
          <h2 className="text-2xl md:text-4xl font-black text-white">
            Alvion <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.25)]">Quantum Console</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Take absolute control of your enterprise workflow nodes. Experience real-time latency analytics and simulated business-process mining.
          </p>
        </div>

        {/* Quantango & MPrez Inspired Sleek Console Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[95%] mx-auto items-stretch">
          
          {/* Left Column Controls: San Diego Web Design Interactive Hover Styles */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              {
                id: "bpm",
                label: "BPM PROCESS MINING",
                desc: "Real-time process mapping & workflow efficiency analysis.",
                color: "border-fuchsia-500/20 text-fuchsia-400 bg-fuchsia-950/10 hover:bg-fuchsia-950/20",
                glow: "bg-fuchsia-500",
                activeBg: "bg-fuchsia-900/30 border-fuchsia-500"
              },
              {
                id: "neural",
                label: "NEURAL COGNITION NET",
                desc: "Algorithmic decision tree and cognitive AI pipelines.",
                color: "border-cyan-500/20 text-cyan-400 bg-cyan-950/10 hover:bg-cyan-950/20",
                glow: "bg-cyan-500",
                activeBg: "bg-cyan-900/30 border-cyan-500"
              },
              {
                id: "scale",
                label: "HYPER-SCALE SYNC",
                desc: "Distributed database replication with Spring Boot cores.",
                color: "border-emerald-500/20 text-emerald-400 bg-emerald-950/10 hover:bg-emerald-950/20",
                glow: "bg-emerald-500",
                activeBg: "bg-emerald-900/30 border-emerald-500"
              }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full text-left p-5 sm:p-6 rounded-[24px] border transition-all duration-300 backdrop-blur-md cursor-pointer flex flex-col ${
                  activeTab === tab.id
                    ? tab.activeBg
                    : `${tab.color} opacity-60 hover:opacity-100`
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${tab.glow} ${activeTab === tab.id ? 'animate-ping' : ''}`} />
                  <span className="font-bold text-xs uppercase tracking-widest">{tab.label}</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {tab.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Canvas Monitor Frame */}
          <div className="lg:col-span-8 bg-slate-900/40 rounded-[24px] border border-slate-800 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-2 relative shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            
            {/* Top diagnostic bar */}
            <div className="w-full flex items-center justify-between px-6 py-4 border-b border-slate-800/80 text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>MONITOR: QUANTUM_GRID_ACTIVE</span>
              </div>
              <span>TAB: {activeTab.toUpperCase()}_ENGINE</span>
            </div>

            {/* Canvas Monitor */}
            <div className="relative w-full h-[360px] flex items-center justify-center overflow-hidden">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 pointer-events-none" />
            </div>

            {/* Bottom diagnostic parameters */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-800/80 p-6 text-center text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider mb-1">Grid Latency</span>
                <span className="text-cyan-400 font-bold text-sm">1.4ms</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider mb-1">Sync Ratio</span>
                <span className="text-fuchsia-400 font-bold text-sm">99.98%</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider mb-1">Active Nodes</span>
                <span className="text-emerald-400 font-bold text-sm">1,482/sec</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
