"use client";
import homeData from "@/data/homeData.json";
import Link from "next/link";

export default function PlanPage() {
  const { plans } = homeData;

  return (
    <div className="min-h-screen bg-[#061a19] text-white font-sans overflow-x-hidden pb-14">
      
      {/* ১. ব্যানার সেকশন (সাইটের কনসিস্টেন্ট ব্যানার) */}
      <div className="relative h-[320px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden" 
           style={{ backgroundImage: "url('https://i.ibb.co.com/mrmjpfby/photo-2025-12-26-21-08-56.jpg')" }}>
        <div className="absolute inset-0 bg-[#061a19]/85 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white" 
              style={{ textShadow: '0px 4px 20px rgba(255, 153, 0, 0.5)' }}>
            Plan Subscribe
          </h1>
          <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-black uppercase tracking-[3px]">
            <Link href="/" className="hover:text-[#F5F227] transition-colors">Home</Link> 
            <span className="text-[#C9A24D] opacity-50">/</span> 
            <span className="text-[#F5F227]">Plan Subscribe</span>
          </nav>
        </div>
      </div>

      {/* ৩. Our Plan Section */}
      <section className="py-17 bg-[#061a19] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-center bg-repeat" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* কার্ড গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className="relative bg-[#0d2e2d] border border-white/5 rounded-[2.5rem] pt-16 pb-8 px-7 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A24D]/30 group">

                {/* কোণাকুণি রিবন (আগের চেয়ে কিছুটা ছোট) */}
                <div className="absolute top-7 left-1/2 -translate-x-1/2 w-44 h-12 bg-[#163a39] -skew-x-[25deg] flex items-center justify-center shadow-xl border-l-[5px] border-[#C9A24D]">
                  <span className="text-white font-black skew-x-[25deg] tracking-[2px] text-[10px] uppercase">
                    {plan.name}
                  </span>
                </div>

                {/* আইকন এবং প্রাইস (গ্যাপ কমানো হয়েছে) */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-[#F5F227]/20 transition-all">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png"
                      className="w-8 h-8 invert brightness-150 opacity-70 group-hover:opacity-100"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-6xl font-black text-white tracking-tighter">
                    <span className="text-xl align-top mr-1 text-[#F5F227]">$</span>{plan.price}
                  </h3>
                </div>

                {/* বোনাস এবং লেভেল ডিটেইলস (টাইট স্পেসিং) */}
                <div className="space-y-4 mb-6">
                  <p className="text-white/90 font-bold text-base border-b border-white/5 pb-3">
                    Referral Bonus : <span className="text-[#F5F227]">${plan.referralBonus}</span>
                  </p>

                  <div className="space-y-2.5">
                    {plan.levels?.map((lvl, idx) => (
                      <div key={idx} className="flex justify-between items-center text-white/40 font-semibold text-xs hover:text-white transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="bg-[#163a39] text-[#F5F227] text-[9px] px-2 py-0.5 rounded-md font-black">{lvl.id}</span>
                          <span>{lvl.calc}</span>
                        </div>
                        <span className="font-bold text-white/80">{lvl.total}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* টোটাল কমিশন সেকশন (কমপ্যাক্ট করা হয়েছে) */}
                <div className="bg-[#163a39] rounded-2xl p-4 mb-6 border border-white/5">
                  <h4 className="text-xl font-black text-white">${plan.totalCommission} <span className="text-[10px] opacity-40">USD</span></h4>
                  <div className="mt-2 pt-2 border-t border-white/5">
                    <span className="text-xs font-medium text-white/50">Returns </span>
                    <span className="text-[#F5F227] font-black ml-1">{plan.returns}</span>
                  </div>
                </div>

                {/* ইনভেস্ট বাটন (৩ডি - সাইজ কিছুটা ছোট করা হয়েছে) */}
                <button className="relative w-full bg-[#C9A24D] text-[#0F2A1D] font-black py-3.5 rounded-xl uppercase tracking-[2px] text-[11px] transition-all duration-100 border-b-[5px] border-[#8B6B2F] active:border-b-0 active:translate-y-[5px] hover:bg-[#E0C878] shadow-lg shadow-black/40">
                  Invest Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}