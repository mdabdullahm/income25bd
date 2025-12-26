"use client";
import homeData from "@/data/homeData.json";
import Link from "next/link";

export default function AboutPage() {
  // JSON থেকে প্রয়োজনীয় ডাটা নেওয়া হচ্ছে
  const { about, cta, howStarted } = homeData;

  return (
    <div className="min-h-screen bg-[#061a19] text-white font-sans">
      
      {/* ১. ব্যানার সেকশন (ভিডিওর মতো বিটকয়েন ব্যাকগ্রাউন্ড সহ) */}
      <div className="relative h-[300px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden" 
           style={{ backgroundImage: "url('https://i.ibb.co.com/mrmjpfby/photo-2025-12-26-21-08-56.jpg')" }}>
        {/* ডার্ক ওভারলে */}
        <div className="absolute inset-0 bg-[#061a19]/80 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 text-center space-y-3">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white" 
              style={{ textShadow: '0px 4px 20px rgba(255, 153, 0, 0.4)' }}>
            About Us
          </h1>
          <nav className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#F5F227] transition-colors">Home</Link> 
            <span className="text-[#F5F227]">-</span> 
            <span className="text-white/60">About</span>
          </nav>
        </div>
      </div>

      {/* ২. মেইন ইনফো সেকশন (Home Page এর About পার্ট) */}
      <section className="py-24 bg-[#163a39]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">{about.title}</h2>
            <h4 className="text-xl font-medium text-[#F5F227]/80">{about.subtitle}</h4>
            <p className="text-white/60 text-lg leading-relaxed">{about.description}</p>
            <div className="pt-6">
              <Link href="/dashboard" className="relative inline-block px-10 py-4 bg-[#C9A24D] text-[#0F2A1D] font-black rounded-xl uppercase text-xs tracking-[2px] border-b-[6px] border-[#8B6B2F] active:border-b-0 active:translate-y-[6px] transition-all">
                {about.btnText}
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative group rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={about.image} alt="About" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#ff9800] rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-8 h-8 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ৩. Call To Action (Join Now) */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${cta.bgImage})` }}></div>
        <div className="absolute inset-0 bg-[#061a19]/90"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white">{cta.title}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{cta.subtitle}</p>
          <Link href="/signup" className="relative inline-block px-12 py-5 bg-[#C9A24D] text-[#0F2A1D] font-black rounded-xl uppercase text-sm tracking-[2px] border-b-[6px] border-[#8B6B2F] active:border-b-0 active:translate-y-[6px]">
            {cta.btnText}
          </Link>
        </div>
      </section>

      {/* ৪. How To Get Started Section */}
      <section className="py-24 bg-[#163a39]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase">{howStarted.title}</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">{howStarted.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {howStarted.steps.map((step) => (
              <div key={step.id} className="flex flex-col sm:flex-row items-center gap-8 group">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 bg-[#C9A24D] rounded-full flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                    <img src={step.icon} className="w-10 h-10 invert brightness-200" alt="" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#061a19] text-white rounded-full flex items-center justify-center font-black text-sm border-2 border-white">{step.id}</div>
                </div>
                <div className="text-center sm:text-left space-y-3">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#F5F227] transition-colors">{step.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}