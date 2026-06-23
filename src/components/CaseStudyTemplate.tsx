"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CaseStudyData } from "@/types/case-study";

export default function CaseStudyTemplate({ data, customPreviews }: { data: CaseStudyData, customPreviews?: React.ReactNode }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const textToType = data.summaryText;
    if (showSummary && textToType) {
      setDisplayedText("");
      setIsTyping(true);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < textToType.length - 1) {
          setDisplayedText(prev => prev + textToType[currentIndex]);
          currentIndex++;
        } else {
          setDisplayedText(textToType);
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    } else {
      setDisplayedText("");
      setIsTyping(false);
    }
  }, [showSummary, data.summaryText]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "metrics", "problem", "solution", "features", "tech", "kpi"];
      if (!data.hideConclusion) {
        sections.push("conclusion");
      }
      if (data.sliderImages && data.sliderImages.length > 0) {
        sections.push("previews");
      }
      
      let current = "overview";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.sliderImages, data.conclusion]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage || !data.sliderImages) return;
      
      const idx = data.sliderImages.indexOf(selectedImage);
      if (e.key === 'ArrowLeft') {
        setSelectedImage(data.sliderImages[idx === 0 ? data.sliderImages.length - 1 : idx - 1]);
      } else if (e.key === 'ArrowRight') {
        setSelectedImage(data.sliderImages[idx === data.sliderImages.length - 1 ? 0 : idx + 1]);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, data.sliderImages]);

  return (
    <>
      <Navbar />

      <div className="bg-[#fbfcfd] pt-20 md:pt-24 min-h-screen text-[#0d1b2a] font-sans">
        
        {/* Header Section */}
        <div className="container mx-auto px-6 md:px-12 pt-16 pb-12 relative">
          <button 
            onClick={() => router.back()} 
            className="hidden md:flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm absolute top-16 left-6 md:left-12"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back
          </button>
          
          <div className="text-center">
            <button 
              onClick={() => router.back()} 
              className="md:hidden inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm mb-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back
            </button>
            <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Case study</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 max-w-4xl mx-auto">{data.title}</h1>
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full font-semibold text-sm border border-blue-100">
                Industry: {data.industry}
              </span>
              <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full font-semibold text-sm border border-blue-100">
                Platform: {data.platform}
              </span>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        {data.bannerImage && (
          <div className="container mx-auto px-6 md:px-12 mb-16">
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image 
                src={data.bannerImage} 
                alt={`${data.title} Banner`} 
                fill 
                className="object-cover" 
                unoptimized={true}
              />
            </div>
          </div>
        )}

        {/* Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Sidebar */}
          <aside className="hidden lg:block w-1/4 sticky top-28 self-start">
            <nav className="border-l-2 border-slate-200 pl-4 space-y-4">
              {[
                { id: "overview", label: "Executive summary" },
                { id: "metrics", label: "Success metrics" },
                { id: "problem", label: "Real time problem statement" },
                { id: "solution", label: "Solution implemented" },
                { id: "features", label: "Key features" },
                { id: "tech", label: "Technology stack" },
                { id: "kpi", label: "KPI charts" },
                ...(!data.hideConclusion ? [{ id: "conclusion", label: "Conclusion" }] : []),
                ...(data.sliderImages && data.sliderImages.length > 0 ? [{ id: "previews", label: "Platform previews" }] : [])
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block text-left text-sm transition-all ${
                    activeSection === section.id 
                      ? "text-blue-600 font-bold border-l-2 border-blue-500 -ml-[18px] pl-[18px]" 
                      : "text-slate-500 hover:text-blue-600"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 space-y-16">
            
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Executive summary</h2>
              {data.overview.map((para, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed text-lg mb-4">
                  {para}
                </p>
              ))}
            </section>

            <section id="metrics" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Success metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.outcomes.map((outcome, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="block text-3xl font-bold text-blue-500 mb-1">{outcome.value}</span>
                    <span className="text-xs text-slate-500">{outcome.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="problem" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Real time problem statement</h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                {data.problemIntro}
              </p>
              {data.problems.map((prob, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed mb-4 text-base">
                  <strong className="text-slate-800">{prob.title}:</strong> {prob.desc}
                </p>
              ))}
            </section>

            <section id="solution" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Solution implemented</h2>
              {data.solution.map((para, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed mb-4 text-base">
                  {para}
                </p>
              ))}
            </section>

            <section id="features" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Key features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.modules.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                    <strong className="block mb-1 text-sm md:text-base text-slate-800">
                      {String(idx + 1).padStart(2, '0')} | {item.title}
                    </strong>
                    <span className="text-xs md:text-sm text-slate-500">Feature specific capabilities.</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="tech" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Technology stack</h2>
              <div className="flex flex-wrap gap-3 mt-4">
                {data.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
                    {tech.name}
                  </span>
                ))}
              </div>
            </section>

            <section id="kpi" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">KPI charts - Outcomes & business impact</h2>
              
              {data.kpiStats && data.kpiStats.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.kpiStats.map((kpi, idx) => {
                    const max = Math.max(...kpi.sparklineData);
                    const min = Math.min(...kpi.sparklineData);
                    const range = max - min || 1;
                    const points = kpi.sparklineData.map((val, i) => {
                      const x = (i / (kpi.sparklineData.length - 1)) * 100;
                      const y = 40 - ((val - min) / range) * 40;
                      return `${x},${y}`;
                    }).join(" ");

                    const isDown = kpi.trendDirection === 'down';

                    return (
                      <div key={idx} className="bg-white rounded-xl p-5 relative overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between">
                        <div className="flex items-center gap-2 mb-4">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {(!kpi.iconType || kpi.iconType === 'clock') && <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>}
                            {kpi.iconType === 'document' && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></>}
                            {kpi.iconType === 'heart' && <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></>}
                          </svg>
                          <span className="text-slate-500 text-sm font-medium">{kpi.title}</span>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-slate-800 text-3xl font-bold mb-1">{kpi.value}</div>
                            <div className={`text-xs font-bold text-[#00c853]`}>
                              {isDown ? '↓' : '↑'} {kpi.trend}
                            </div>
                          </div>
                          <div className="w-20 h-10 relative">
                            <svg viewBox="0 -5 100 50" className="w-full h-full overflow-visible">
                              <polyline 
                                fill="none" 
                                stroke={kpi.sparklineColor} 
                                strokeWidth="2.5" 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                points={points} 
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : data.kpiCharts && data.kpiCharts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.kpiCharts.map((chartImg, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                      <Image src={chartImg} alt={`KPI Chart ${idx + 1}`} fill className="object-contain p-2" unoptimized={true} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 border-dashed rounded-xl p-8 text-center">
                  <p className="text-slate-500 text-sm">KPI tracking data is securely managed internally.</p>
                </div>
              )}
            </section>

            {!data.hideConclusion && (
              <section id="conclusion" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Conclusion</h2>
                {data.conclusion && data.conclusion.length > 0 ? data.conclusion.map((para, idx) => (
                  <p key={idx} className="text-slate-600 leading-relaxed mb-4 text-base">
                    {para}
                  </p>
                )) : (
                  <p className="text-slate-600 leading-relaxed mb-4 text-base">
                    The implementation was successfully completed, meeting all strategic objectives and delivering substantial value to the client organization.
                  </p>
                )}
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Values delivered by Alvion Technologies</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span> Faster Process Execution
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span> Reduced Administrative Costs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span> Improved Operational Visibility
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span> Scalable Digital Infrastructure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span> Enhanced User Experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span> Data-Driven Decision Making
                    </li>
                  </ul>
                </div>
              </section>
            )}

          </main>
        </div>

        {/* Full Width Previews Section (Moved Outside to be at the very bottom) */}
        {customPreviews ? customPreviews : (
          data.sliderImages && data.sliderImages.length > 0 && (
            <div className="bg-[#f0f4f8] py-20 border-t border-zinc-200 w-full shadow-inner mt-8">
              <section id="previews" className="max-w-[1100px] mx-auto px-4 sm:px-6 scroll-mt-32">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Platform Previews</h2>
                  <p className="text-gray-500 max-w-2xl mx-auto mt-4">Explore the custom dashboard interfaces designed specifically for brokers and administrators.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {data.sliderImages.map((img, idx) => (
                  <div key={idx} className="relative rounded-lg overflow-hidden cursor-pointer group border border-zinc-300 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col transform hover:-translate-y-1" onClick={() => setSelectedImage(img)}>
                    {/* Browser Header Mockup */}
                    <div className="h-5 bg-zinc-200 flex items-center px-2 gap-1.5 border-b border-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] w-full bg-white">
                      <Image src={img} alt={`Preview ${idx + 1}`} fill unoptimized={true} quality={100} className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center border border-black/5">
                        <span className="bg-white text-zinc-900 text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-lg transform translate-y-1 group-hover:translate-y-0 duration-300">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                          View
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}

        <Footer />

        {/* Chatbot Floating Button */}
        {data.summaryText && data.summaryText.length > 0 && (
          <div className="fixed bottom-24 right-[56px] translate-x-1/2 z-50 flex flex-col items-center">
            {showSummary && (
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="absolute bottom-20 -right-4 sm:right-0 w-[calc(100vw-40px)] sm:w-[340px] md:w-[400px] max-w-[400px] bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-left origin-bottom-right"
              >
                <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                    <h3 className="font-bold text-sm">Alvion AI Assistant</h3>
                  </div>
                  <button onClick={() => setShowSummary(false)} className="text-white hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </div>
                <div className="p-5 bg-gray-50/50">
                  <div className="bg-white p-4 rounded-xl rounded-tl-sm shadow-sm border border-gray-100 text-sm text-gray-700 leading-relaxed min-h-[120px] whitespace-pre-line">
                    {displayedText}
                    {isTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-blue-500 animate-pulse align-middle"></span>}
                  </div>
                </div>
              </motion.div>
            )}

            <button
              onClick={() => setShowSummary(!showSummary)}
              className="relative group flex flex-col items-center justify-center focus:outline-none"
            >
              {!showSummary && <div className="absolute top-0 w-12 h-12 bg-purple-500 rounded-full animate-ping opacity-30 -z-10"></div>}
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:-translate-y-1 hover:scale-105 border-2 border-white">
                {showSummary ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/></svg>
                )}
              </div>
              {!showSummary && <span className="mt-1.5 text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full shadow-sm tracking-wide uppercase border border-purple-100">Summarize</span>}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && data.sliderImages && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/95 backdrop-blur-md p-4 md:p-16 transition-opacity" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Fullscreen preview" fill unoptimized={true} quality={100} className="object-contain" />
          </div>

          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 bg-zinc-800/80 hover:bg-black text-white rounded-full p-2.5 transition-all cursor-pointer z-[110] shadow-lg border border-white/10"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          {/* Prev Button */}
          <button 
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-black text-white rounded-full p-3 md:p-4 transition-all cursor-pointer z-[110] shadow-lg border border-white/10"
            onClick={(e) => {
              e.stopPropagation();
              const idx = data.sliderImages!.indexOf(selectedImage);
              setSelectedImage(data.sliderImages![idx === 0 ? data.sliderImages!.length - 1 : idx - 1]);
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-black text-white rounded-full p-3 md:p-4 transition-all cursor-pointer z-[110] shadow-lg border border-white/10"
            onClick={(e) => {
              e.stopPropagation();
              const idx = data.sliderImages!.indexOf(selectedImage);
              setSelectedImage(data.sliderImages![idx === data.sliderImages!.length - 1 ? 0 : idx + 1]);
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      )}
    </>
  );
}
