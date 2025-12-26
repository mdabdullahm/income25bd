"use client";
import { useState } from "react";
import homeData from "@/data/homeData.json";
import Link from "next/link";

export default function HowItWorks() {
  const { howStarted, statistics, faqs } = homeData;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#061a19] text-white font-sans overflow-x-hidden">
      
      {/* ১. ব্যানার সেকশন */}
      <div className="relative h-[300px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden" 
           style={{ backgroundImage: "url('https://i.ibb.co.com/mrmjpfby/photo-2025-12-26-21-08-56.jpg')" }}>
        <div className="absolute inset-0 bg-[#061a19]/80 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 text-center space-y-3">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white" 
              style={{ textShadow: '0px 4px 20px rgba(255, 153, 0, 0.4)' }}>
            How It Works
          </h1>
          <nav className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#F5F227] transition-colors">Home</Link> 
            <span className="text-[#F5F227]">-</span> 
            <span className="text-white/60">How It Works</span>
          </nav>
        </div>
      </div>

      {/* ২. How To Get Started Section (হোয়াইট ব্যাকগ্রাউন্ড থিম) */}
      <section className="py-24 bg-[#163a39] text-[#061a19]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#FCFCFC] uppercase">
              How To Get Starts
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              {howStarted.subtitle}
            </p>
            <div className="w-24 h-1.5 bg-[#C9A24D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
            {howStarted.steps.map((step) => (
              <div key={step.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-8 group">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 bg-[#C9A24D] hover:bg-[#E0C878] rounded-full flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <img src={step.icon} className="w-10 h-10 invert brightness-200" alt={step.title} />
                  </div>
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#061a19] text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg border-2 border-white">
                    {step.id}
                  </div>
                </div>
                <div className="text-center sm:text-left space-y-3">
                  <h3 className="text-2xl font-black text-[#FCFCFC] tracking-tight group-hover:text-[#F5F227] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ৩. Statistics Section (ডার্ক ৩ডি থিম) */}
      <section className="relative py-24 bg-[#061a19] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-repeat"
             style={{ backgroundImage: "url('https://i.ibb.co.com/mrmjpfby/photo-2025-12-26-21-08-56.jpg')" }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter" style={{ textShadow: '0px 4px 15px rgba(255, 153, 0, 0.3)' }}>
              {statistics.title}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">{statistics.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 [perspective:1200px]">
            {statistics.items.map((stat, index) => (
              <div key={index} className="group relative bg-[#0d2e2d]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-10 text-center transition-all duration-700 ease-out hover:rotate-y-12 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-14 h-14 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[10deg]">
                    <img src={stat.icon} alt="" className="w-10 h-10 object-contain invert brightness-150" />
                  </div>
                  <div className="w-10 h-[2px] bg-[#ff9800]"></div>
                </div>
                <div className="space-y-3 relative z-10">
                  <h4 className="text-sky-400 font-bold tracking-widest text-sm uppercase">{stat.label}</h4>
                  <p className="text-white text-4xl font-black tracking-tighter">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ৪. FAQs Section (ডার্ক অ্যাকর্ডিয়ন) */}
      <section className="py-24 bg-[#061a19] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Faqs</h2>
            <div className="w-20 h-1 bg-[#F5F227] mx-auto mt-4 rounded-full"></div>
            <p className="text-white/40 max-w-2xl mx-auto text-lg pt-4">Find answers to common questions and get quick support with our faqs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.items.map((faq) => (
              <div key={faq.id}>
                <div onClick={() => toggleFaq(faq.id)}
                     className={`flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all border-2 
                     ${openFaq === faq.id ? 'bg-[#163a39] border-[#F5F227]' : 'bg-[#0d2e2d] border-white/5 hover:border-[#F5F227]/30'}`}>
                  <h3 className={`text-lg font-bold ${openFaq === faq.id ? 'text-[#F5F227]' : 'text-white/90'}`}>{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center relative">
                    <div className={`w-4 h-0.5 bg-[#F5F227] transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}></div>
                    <div className={`w-0.5 h-4 bg-[#F5F227] absolute transition-transform ${openFaq === faq.id ? 'opacity-0' : ''}`}></div>
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${openFaq === faq.id ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 bg-[#0d2e2d]/50 border border-white/5 rounded-2xl text-white/50">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}