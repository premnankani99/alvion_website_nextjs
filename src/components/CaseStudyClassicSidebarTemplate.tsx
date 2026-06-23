"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseStudyData } from "@/types/case-study";
import Image from "next/image";

export default function CaseStudyClassicSidebarTemplate({ data }: { data: CaseStudyData }) {
    const [activeSection, setActiveSection] = useState("exec");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["exec", "metrics", "problem", "solution", "features", "tech", "kpi", "conclusion"];
            let current = "exec";
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
    }, []);

    return (
        <div className="min-h-screen pb-0 font-inter bg-[#fbfcfd] text-[#0d1b2a]">
            <Navbar />
            <style dangerouslySetInnerHTML={{__html: ".nav-btn.active { color: #3b82f6; font-weight: bold; border-left-color: #3b82f6; padding-left: 1.5rem; margin-left: -1rem; }"}} />
            
            <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 text-center">
                <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Case study</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 max-w-4xl mx-auto">{data.title}</h1>
                <div className="flex justify-center gap-4 mt-6">
                <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full font-semibold text-sm border border-blue-100">Industry: {data.industry}</span>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 relative pb-20">
                
                <aside className="hidden lg:block w-1/4 sticky top-28 self-start">
                <nav className="border-l-2 border-slate-200 pl-4 space-y-4">
                    <button onClick={() => document.getElementById('exec')?.scrollIntoView({behavior: 'smooth'})} className={`block text-left text-sm transition-all nav-btn ${activeSection === 'exec' ? 'active' : 'text-slate-500 hover:text-blue-600'}`}>Executive summary</button>
                    <button onClick={() => document.getElementById('metrics')?.scrollIntoView({behavior: 'smooth'})} className={`block text-left text-sm transition-all nav-btn ${activeSection === 'metrics' ? 'active' : 'text-slate-500 hover:text-blue-600'}`}>Success metrics</button>
                    <button onClick={() => document.getElementById('problem')?.scrollIntoView({behavior: 'smooth'})} className={`block text-left text-sm transition-all nav-btn ${activeSection === 'problem' ? 'active' : 'text-slate-500 hover:text-blue-600'}`}>Real time problem statement</button>
                    <button onClick={() => document.getElementById('solution')?.scrollIntoView({behavior: 'smooth'})} className={`block text-left text-sm transition-all nav-btn ${activeSection === 'solution' ? 'active' : 'text-slate-500 hover:text-blue-600'}`}>Solution implemented</button>
                    {data.modules && data.modules.length > 0 && <button onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})} className={`block text-left text-sm transition-all nav-btn ${activeSection === 'features' ? 'active' : 'text-slate-500 hover:text-blue-600'}`}>Key features</button>}
                    <button onClick={() => document.getElementById('tech')?.scrollIntoView({behavior: 'smooth'})} className={`block text-left text-sm transition-all nav-btn ${activeSection === 'tech' ? 'active' : 'text-slate-500 hover:text-blue-600'}`}>Technology stack</button>
                    {data.kpiStats && data.kpiStats.length > 0 && <button onClick={() => document.getElementById('kpi')?.scrollIntoView({behavior: 'smooth'})} className={`block text-left text-sm transition-all nav-btn ${activeSection === 'kpi' ? 'active' : 'text-slate-500 hover:text-blue-600'}`}>KPI charts</button>}
                    {!data.hideConclusion && <button onClick={() => document.getElementById('conclusion')?.scrollIntoView({behavior: 'smooth'})} className={`block text-left text-sm transition-all nav-btn ${activeSection === 'conclusion' ? 'active' : 'text-slate-500 hover:text-blue-600'}`}>Conclusion</button>}
                </nav>
                </aside>

                <main className="w-full lg:w-3/4 space-y-16">
                
                <section id="exec" className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Executive summary</h2>
                    {data.overview.map((para, idx) => (
                        <p key={idx} className="text-slate-600 leading-relaxed text-lg mb-4">{para}</p>
                    ))}
                </section>

                <section id="metrics" className="scroll-mt-28">
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

                <section id="problem" className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Real time problem statement</h2>
                    {data.problemIntro && <p className="text-slate-600 leading-relaxed mb-4">{data.problemIntro}</p>}
                    {data.problems.map((prob, idx) => (
                        <p key={idx} className="text-slate-600 leading-relaxed mb-4">
                            {prob.title && <strong className="text-slate-800 mr-2">{prob.title}:</strong>}
                            {prob.desc}
                        </p>
                    ))}
                </section>

                <section id="solution" className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Solution implemented</h2>
                    {data.solution.map((para, idx) => (
                        <p key={idx} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                    ))}
                </section>

                {data.modules && data.modules.length > 0 && (
                <section id="features" className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Key features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.modules.map((item, idx) => (
                            <div key={idx} className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                                <strong className="block mb-1 text-sm md:text-base">{String(idx + 1).padStart(2, '0')} | {item.title}</strong>
                                <span className="text-xs md:text-sm text-slate-500">Feature specific capabilities.</span>
                            </div>
                        ))}
                    </div>
                </section>
                )}

                <section id="tech" className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Technology stack</h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {data.technologies.map((tech, idx) => (
                            <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </section>

                {data.kpiStats && data.kpiStats.length > 0 && (
                <section id="kpi" className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">KPI charts - Outcomes & business impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6 kpi-sparkline-cards">
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
                                <div key={idx} className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex justify-between items-center shadow-sm w-full">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-1">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                                                {(!kpi.iconType || kpi.iconType === 'clock') && <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>}
                                                {kpi.iconType === 'document' && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></>}
                                                {kpi.iconType === 'heart' && <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></>}
                                            </svg>
                                            <span>{kpi.title}</span>
                                        </div>
                                        <div className="text-3xl font-bold text-slate-800 mb-1">{kpi.value}</div>
                                        <div className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                                            {isDown ? (
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                                            ) : (
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                                            )}
                                            {kpi.trend}
                                        </div>
                                    </div>
                                    <div className="w-24 h-12 relative overflow-hidden">
                                        <svg viewBox="0 -5 100 50" className="w-full h-full overflow-visible">
                                            <polyline fill="none" stroke={kpi.sparklineColor || '#3b82f6'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={points} />
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                )}

                {!data.hideConclusion && (
                <section id="conclusion" className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Conclusion</h2>
                    {data.conclusion && data.conclusion.length > 0 ? (
                        <>
                        {data.conclusion.map((para, idx) => (
                            <p key={idx} className="text-slate-600 leading-relaxed mb-6">{para}</p>
                        ))}
                        </>
                    ) : (
                        <p className="text-slate-600 leading-relaxed mb-6">The implementation was successfully completed, meeting all strategic objectives and delivering substantial value to the client organization.</p>
                    )}
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Values delivered by Alvion Technologies</h3>
                    <ul className="list-disc pl-5 text-slate-600 space-y-2">
                        <li className="text-slate-600 mb-2">✓ Faster Process Execution</li>
                        <li className="text-slate-600 mb-2">✓ Reduced Administrative Costs</li>
                        <li className="text-slate-600 mb-2">✓ Improved Operational Visibility</li>
                        <li className="text-slate-600 mb-2">✓ Scalable Digital Infrastructure</li>
                    </ul>
                </section>
                )}
                </main>
            </div>
            <Footer />
        </div>
    );
}
