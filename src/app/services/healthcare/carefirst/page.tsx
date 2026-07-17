
"use client";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function HealthcareCaseStudy() {
    const chart1Ref = useRef(null);
    const chart2Ref = useRef(null);
    const chart3Ref = useRef(null);

    useEffect(() => {
        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { 
                x: { display: false }, 
                y: { display: false } 
            },
            elements: { point: { radius: 0 } },
            layout: { padding: 0 }
        };

        let myChart1: Chart | undefined;
        let myChart2: Chart | undefined;
        let myChart3: Chart | undefined;

        if(chart1Ref.current) {
            myChart1 = new Chart(chart1Ref.current, {
              type: 'line',
              data: {
                labels: ['1','2','3','4','5','6','7','8','9','10'],
                datasets: [{ data: [42, 38, 35, 30, 32, 28, 25, 20, 22, 18], borderColor: '#8b5cf6', borderWidth: 2, tension: 0.3 }]
              },
              options: commonOptions
            });
        }

        if(chart2Ref.current) {
            myChart2 = new Chart(chart2Ref.current, {
              type: 'line',
              data: {
                labels: ['1','2','3','4','5','6','7','8','9','10'],
                datasets: [{ data: [100, 90, 85, 75, 80, 60, 55, 65, 45, 40], borderColor: '#f97316', borderWidth: 2, tension: 0.3 }]
              },
              options: commonOptions
            });
        }

        if(chart3Ref.current) {
            myChart3 = new Chart(chart3Ref.current, {
              type: 'line',
              data: {
                labels: ['1','2','3','4','5','6','7','8','9','10'],
                datasets: [{ data: [71, 72, 75, 74, 78, 80, 85, 82, 88, 91], borderColor: '#eab308', borderWidth: 2, tension: 0.3 }]
              },
              options: commonOptions
            });
        }

        return () => {
            if(myChart1) myChart1.destroy();
            if(myChart2) myChart2.destroy();
            if(myChart3) myChart3.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen pb-20 font-inter bg-[#fbfcfd] text-[#0d1b2a]">
            <style dangerouslySetInnerHTML={{__html: ".nav-btn.active { color: #3b82f6; font-weight: bold; border-left-color: #3b82f6; padding-left: 1.5rem; margin-left: -1rem; }"}} />
            
  
  <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 max-w-4xl mx-auto">CareFirst Hospitals – AI-Powered Hospital Digital Transformation</h1>
    <div className="flex justify-center gap-4 mt-6">
      <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full font-semibold text-sm border border-blue-100">Industry: Healthcare &amp; Hospital Management</span>
    </div>
  </div>

  
  <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 relative">
    
    
    <aside className="hidden lg:block w-1/4 sticky top-10 self-start">
      <nav className="border-l-2 border-slate-200 pl-4 space-y-4">
        <a href="#exec" className="block text-slate-500 hover:text-blue-600 transition-all text-sm nav-btn active">Executive summary</a>
        <a href="#metrics" className="block text-slate-500 hover:text-blue-600 transition-all text-sm nav-btn">Success metrics</a>
        <a href="#problem" className="block text-slate-500 hover:text-blue-600 transition-all text-sm nav-btn">Real time problem statement</a>
        <a href="#solution" className="block text-slate-500 hover:text-blue-600 transition-all text-sm nav-btn">Solution implemented</a>
        <a href="#features" className="block text-slate-500 hover:text-blue-600 transition-all text-sm nav-btn">Key features</a>
        <a href="#tech" className="block text-slate-500 hover:text-blue-600 transition-all text-sm nav-btn">Technology stack</a>
        <a href="#kpi" className="block text-slate-500 hover:text-blue-600 transition-all text-sm nav-btn">KPI charts</a>
        <a href="#conclusion" className="block text-slate-500 hover:text-blue-600 transition-all text-sm nav-btn">Conclusion</a>
      </nav>
    </aside>

    
    <main className="w-full lg:w-3/4 space-y-16">
      
      <section id="exec" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Executive summary</h2>
        
      <p className="text-slate-600 leading-relaxed text-lg mb-4">CareFirst Hospitals, a 350-bed multi-specialty healthcare network, was struggling with fragmented patient records, manual administrative processes, appointment bottlenecks, and limited operational visibility.</p><p className="text-slate-600 leading-relaxed text-lg mb-4">Alvion Technologies implemented a centralized healthcare management platform that unified appointments, patient records, billing workflows, insurance processes, and operational dashboards within a secure cloud ecosystem.</p><p className="text-slate-600 leading-relaxed text-lg mb-4">The solution streamlined hospital operations, reduced administrative burden, improved patient engagement, and enabled healthcare professionals to make faster, data-driven decisions.</p></section>

      <section id="metrics" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Success metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4"><div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <span className="block text-3xl font-bold text-blue-500 mb-1">60%</span>
                        <span className="text-xs text-slate-500">Reduction in Manual Data Errors</span>
                    </div><div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <span className="block text-3xl font-bold text-blue-500 mb-1">20%</span>
                        <span className="text-xs text-slate-500">Faster Billing &amp; Claims Processing</span>
                    </div><div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <span className="block text-3xl font-bold text-blue-500 mb-1">35%</span>
                        <span className="text-xs text-slate-500">Improvement in Bed Utilization</span>
                    </div></div>
      </section>

      <section id="problem" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Real time problem statement</h2>
        
      <p className="text-slate-600 leading-relaxed mb-4">The hospital operated through multiple disconnected systems spread across departments. Patient information was stored in different applications, making it difficult for doctors and staff to access complete medical histories.</p><p className="text-slate-600 leading-relaxed mb-4">Administrative teams spent significant time managing appointments, documentation, billing, and insurance-related processes. These manual workflows resulted in operational inefficiencies, longer patient wait times, and increased staff workload.</p><p className="text-slate-600 leading-relaxed mb-4">The organization required a centralized and scalable healthcare platform capable of improving operational efficiency, patient engagement, and visibility across departments.</p></section>

      <section id="solution" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Solution implemented</h2>
        
      <p className="text-slate-600 leading-relaxed mb-4">Alvion Technologies designed and deployed a unified Healthcare Digital Transformation Platform that centralized clinical, operational, and administrative functions within a secure cloud environment.</p><p className="text-slate-600 leading-relaxed mb-4">The platform integrated appointment scheduling, patient records, billing management, insurance assistance, performance dashboards, and patient communication channels into a single ecosystem.</p><p className="text-slate-600 leading-relaxed mb-4">AI-powered capabilities were introduced to automate administrative tasks, summarize patient records, improve scheduling efficiency, and provide intelligent insights for hospital resource planning.</p><p className="text-slate-600 leading-relaxed mb-4">This enabled healthcare professionals and patients to access real-time information while maintaining compliance with healthcare security and privacy standards.</p></section>

      <section id="features" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Key features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">01 | Centralized Cloud Platform</strong><span className="text-xs md:text-sm text-slate-500">Unified hospital data and operations.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">02 | Automated Appointment Scheduling</strong><span className="text-xs md:text-sm text-slate-500">Smart appointment booking and reminders.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">03 | Admin Task Automation</strong><span className="text-xs md:text-sm text-slate-500">Automated documentation and form processing.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">04 | Billing Process Automation</strong><span className="text-xs md:text-sm text-slate-500">Faster billing and insurance verification.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">05 | Real-Time Performance Dashboard</strong><span className="text-xs md:text-sm text-slate-500">Live hospital performance monitoring.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">06 | Multi-Device Patient Engagement</strong><span className="text-xs md:text-sm text-slate-500">Patient communication across multiple channels.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">07 | Patient Record AI Summarizer</strong><span className="text-xs md:text-sm text-slate-500">AI-powered patient record summaries.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">08 | Insurance Navigator AI</strong><span className="text-xs md:text-sm text-slate-500">Insurance coverage and cost guidance.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">09 | Digital Medical Records Access</strong><span className="text-xs md:text-sm text-slate-500">Secure access to medical records.</span></div><div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm"><strong className="block mb-1 text-sm md:text-base">10 | Smart Bed &amp; Rounds Predictor</strong><span className="text-xs md:text-sm text-slate-500">Predictive bed and patient flow management.</span></div></div>
      </section>

      <section id="tech" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Technology stack</h2>
        
      <div className="flex flex-wrap gap-3 mt-4"><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">Next.js</span><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">Node.js</span><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">PostgreSQL</span><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">AWS</span><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">OpenAI GPT</span><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">Whisper Speech-to-Text</span><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">FHIR APIs</span><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">Power BI</span></div></section>

      <section id="kpi" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">KPI charts - Outcomes &amp; business impact</h2>
        
      
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6 kpi-sparkline-cards">
    
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex justify-between items-center shadow-sm w-full">
        <div className="flex flex-col">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>Admission Time</span>
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">12 Mins</div>
            <div className="text-emerald-500 text-sm font-bold flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg> 50%</div>
        </div>
        <div className="w-24 h-12">
            <canvas ref={chart1Ref}></canvas>
        </div>
    </div>

    
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex justify-between items-center shadow-sm w-full">
        <div className="flex flex-col">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>Admin Workload</span>
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">40%</div>
            <div className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                40%
            </div>
        </div>
        <div className="w-24 h-12">
            <canvas ref={chart2Ref}></canvas>
        </div>
    </div>

    
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex justify-between items-center shadow-sm w-full">
        <div className="flex flex-col">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <span>Satisfaction</span>
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">91%</div>
            <div className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                25%
            </div>
        </div>
        <div className="w-24 h-12">
            <canvas ref={chart3Ref}></canvas>
        </div>
    </div>
</div>
</section>

      <section id="conclusion" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Conclusion</h2>
        
        
        <p className="text-slate-600 leading-relaxed mb-6">By combining cloud modernization, workflow automation, AI-powered decision support, and patient engagement technologies, Alvion Technologies successfully transformed CareFirst Hospitals into a digitally connected healthcare organization.</p><p className="text-slate-600 leading-relaxed mb-6">The platform streamlined hospital operations, reduced administrative overhead, improved patient experiences, and provided healthcare teams with the tools needed to deliver faster and more efficient care.</p><h3 className="text-xl font-bold text-slate-800 mb-4">Values delivered by Alvion Technologies</h3>
        <ul className="list-disc pl-5 text-slate-600 space-y-2"><li className="text-slate-600 mb-2">✓ Faster Patient Care</li><li className="text-slate-600 mb-2">✓ Reduced Administrative Costs</li><li className="text-slate-600 mb-2">✓ Improved Revenue Cycle Management</li><li className="text-slate-600 mb-2">✓ AI-Driven Operational Intelligence</li><li className="text-slate-600 mb-2">✓ Enhanced Patient Experience</li><li className="text-slate-600 mb-2">✓ Scalable Digital Healthcare Infrastructure</li></ul>
      </section>

    </main>
  </div>

  



        </div>
    );
}
