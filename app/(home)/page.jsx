"use client"; // ফ্রেমার মোশন ব্যবহারের জন্য এটি জরুরি
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const { hero, statistics, plans, features, testimonials, transactions, newsletter, faqs, cta, news } = homeData;


  const paths = [
    { x: [0, 500, -200, 0], y: [0, 300, 100, 0] },     // কার্ড ১
    { x: [0, -600, 200, 0], y: [0, 400, -100, 0] },    // কার্ড ২
    { x: [0, 400, -500, 0], y: [0, -200, 300, 0] },    // কার্ড ৩
    { x: [0, -300, 600, 0], y: [0, -400, 100, 0] },    // কার্ড ৪
    { x: [0, 700, -100, 0], y: [0, 100, -300, 0] },    // কার্ড ৫
    { x: [0, -500, 300, 0], y: [0, 450, -200, 0] },    // কার্ড ৬
    { x: [0, 200, -600, 0], y: [0, -350, 200, 0] },    // কার্ড ৭
  ];

  // ৭টি আলাদা শেপ
  const cardShapes = [
    "rounded-tr-[100px] rounded-bl-[100px]",
    "rounded-full aspect-video flex items-center justify-center",
    "rounded-[60px] rounded-tl-none",
    "rounded-[80px] rounded-br-none",
    "rounded-3xl skew-x-3",
    "rounded-tl-[120px] rounded-br-[40px]",
    "rounded-[50px] border-b-8 border-r-4",
  ];

  // কোন FAQ টি খোলা আছে তা ট্র্যাক করার জন্য স্টেট
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };


  return (
    <div className="bg-[#061a19] min-h-screen text-white font-sans overflow-x-hidden">

      {/* ১. Hero Section text*/}
      <section className="relative pt-32 pb-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-b from-[#0d2e2d] to-[#061a19] overflow-hidden min-h-[700px]">

        {/* --- বাম পাশের টেক্সট কন্টেন্ট (এখন টেক্সট বামে থাকবে) --- */}
        <div className="lg:w-1/2 space-y-8 z-30">
          <h2 className="text-[#F5F227] font-bold uppercase tracking-[5px] text-sm animate-pulse">
            {hero.title1}
          </h2>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter"
            style={{ textShadow: '0px 4px 20px rgba(255, 153, 0, 0.7)' }}
          >
            {hero.title2.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? "text-white" : "text-white/90 block"}>{word} </span>
            ))}
          </h1>
          <p className="text-white/50 text-lg max-w-lg leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-5 pt-4">
            <Link href="/dashboard" className="bg-[#C9A24D] text-[#0F2A1D] px-10 py-4 rounded-xl font-black hover:bg-[#F5F227] transition-all shadow-2xl shadow-orange-500/20 uppercase text-xs tracking-[2px] active:scale-95">
              {hero.btn2}
            </Link>
            <Link href="/signup" className="bg-white/5 border border-white/10 px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-[2px] backdrop-blur-md">
              {hero.btn1}
            </Link>
          </div>
        </div>

        {/* --- ডান পাশের ইমেজ সেকশন (মোবাইলে হাইড থাকবে, শুধু বড় স্ক্রিনে দেখাবে) --- */}
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center relative z-20">
          {/* মেইন কন্টেইনার */}
          <div className="relative w-[500px] h-[500px]">

            {/* পেছনের গ্লো ইফেক্ট */}
            <div className="absolute inset-0 bg-[#F5F227]/10 blur-[120px] rounded-full z-0"></div>

            {/* ১. ওপরের বড় ইমেজ (ডানে-বামে নড়বে) */}
            <div className="absolute -top-5 -left-5 w-[95%] z-20 animate-move-lr">
              <img
                src={hero.floatImage1}
                alt="Top Image"
                className="w-full h-auto rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
              />
            </div>

            {/* ২. নিচের ইমেজ (ওপরে-নিচে নড়বে) */}
            <div className="absolute bottom-0 right-0 w-[80%] z-10 animate-move-ud opacity-90">
              <img
                src={hero.floatImage2}
                alt="Bottom Image"
                className="w-full h-auto rounded-[2rem] shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>

      </section>

      {/* 2about */}
      <section className="py-12 bg-[#163a39] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* বাম পাশের টেক্সট কন্টেন্ট */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            {/* টেক্সট কালার সাদা করা হয়েছে ডার্ক ব্যাকগ্রাউন্ডের জন্য */}
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-sm">
              {homeData.about.title}
            </h2>
            <h4 className="text-lg font-medium text-[#F5F227]/80">
              {homeData.about.subtitle}
            </h4>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
              {homeData.about.description}
            </p>

            <div className="pt-6">
              {/* ৩ডি বাটন ইফেক্ট */}
              <Link
                href="/dashboard"
                className="relative inline-block px-10 py-4 bg-[#C9A24D] text-[#0F2A1D] font-black rounded-xl 
             uppercase text-sm tracking-[2px] transition-all duration-100
             /* ৩ডি বর্ডার কালার মেইন কালারের চেয়ে একটু ডার্ক দেওয়া হয়েছে */
             border-b-[6px] border-[#8B6B2F] 
             hover:bg-[#E0C878] hover:border-[#A68A3D]
             /* ক্লিক করলে ৩ডি প্রেস ইফেক্ট */
             active:border-b-0 active:translate-y-[6px]
             shadow-xl shadow-black/20"
              >
                {homeData.about.btnText}
              </Link>
            </div>
          </div>

          {/* ডান পাশের ইমেজ সেকশন */}
          <div className="lg:w-1/2 relative group cursor-pointer w-full max-w-[550px]">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/5">
              <img
                src={homeData.about.image}
                alt="Investment Video"
                className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ৩. Statistics Section */}
      <section className="relative py-24 bg-[#061a19] overflow-hidden">

        {/* ব্যাকগ্রাউন্ড প্যাটার্ন */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-repeat"
          style={{ backgroundImage: "url('https://i.ibb.co.com/mrmjpfby/photo-2025-12-26-21-08-56.jpg')" }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* হেডার */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter" style={{ textShadow: '0px 4px 15px rgba(255, 153, 0, 0.3)' }}>
              {homeData.statistics.title}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
              {homeData.statistics.description}
            </p>
          </div>

          {/* ৩ডি কার্ড গ্রিড */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 [perspective:1200px]">
            {homeData.statistics.items.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-[#0d2e2d]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-10 text-center 
                     transition-all duration-700 ease-out
                     hover:rotate-y-12 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                     hover:border-[#F5F227]/20"
              >
                {/* কার্ডের আইকন (Image Icon) */}
                <div className="flex flex-col items-center mb-8">
                  <div className="w-14 h-14 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[10deg]">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-10 h-10 object-contain invert brightness-150"
                      style={{ filter: 'drop-shadow(0px 0px 8px #ff9800)' }}
                    />
                  </div>
                  {/* ছবির মতো ছোট অরেঞ্জ লাইন */}
                  <div className="w-10 h-[2px] bg-[#ff9800] group-hover:w-16 transition-all duration-500"></div>
                </div>

                {/* টেক্সট অংশ */}
                <div className="space-y-3 relative z-10">
                  <h4 className="text-sky-400 font-bold tracking-widest text-sm uppercase">
                    {stat.label}
                  </h4>
                  <p className="text-white text-4xl font-black tracking-tighter">
                    {stat.value}
                  </p>
                </div>

                {/* হোভারে গ্লো ইফেক্ট */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ৪. How To Get Started Section */}
      <section className="py-20 bg-[#163a39] text-[#061a19]">
        <div className="max-w-7xl mx-auto px-6">

          {/* হেডার অংশ */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#FCFCFC]">
              {homeData.howStarted.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              {homeData.howStarted.subtitle}
            </p>
          </div>

          {/* স্টেপ গ্রিড */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
            {homeData.howStarted.steps.map((step) => (
              <div key={step.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-8 group">

                {/* আইকন এবং নাম্বার অংশ */}
                <div className="relative flex-shrink-0">
                  {/* মেইন অরেঞ্জ সার্কেল */}
                  <div className="w-24 h-24 bg-[#C9A24D] hover:bg-[#E0C878] rounded-full flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <img
                      src={step.icon}
                      className="w-10 h-10 invert brightness-200"
                      alt={step.title}
                    />
                  </div>
                  {/* ছোট ব্লু নাম্বার সার্কেল (ওভারল্যাপ) */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#061a19] text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg border-2 border-white">
                    {step.id}
                  </div>
                </div>

                {/* টেক্সট অংশ */}
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

      {/* ৫. Our Feature Section */}
      <section className="py-24 relative bg-[#061a19] overflow-hidden">

        {/* ব্যাকগ্রাউন্ড টেক্সচার ইমেজ (ভিডিওর সেই 'swirly' প্যাটার্ন) */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-cover"
          style={{ backgroundImage: "url('https://i.ibb.co.com/TyML3Pt/1904-i502-005-Datacenter-isometric-composition.jpg')" }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* হেডার অংশ */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">
              {homeData.features.title}
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              {homeData.features.description}
            </p>
          </div>

          {/* ফিচার কার্ড গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
            {homeData.features.items.map((feature, index) => (
              <div
                key={index}
                className="relative bg-[#0d2e2d] border border-white/5 rounded-[2.5rem] p-10 pt-20 text-center transition-all duration-500 hover:bg-[#163a39] hover:-translate-y-2 group shadow-2xl"
              >
                {/* কার্ডের ওপরে ভাসমান সাদা আইকন সার্কেল */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.3)] border-[6px] border-[#061a19] transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>

                {/* টাইটেল - হালকা নীল কালার ব্যবহার করা হয়েছে ছবির মতো */}
                <h3 className="text-[#00c2ff] text-2xl md:text-3xl font-black mb-5 tracking-tight">
                  {feature.title}
                </h3>

                {/* বর্ণনা */}
                <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                  {feature.description}
                </p>

                {/* হোভারে নিচের দিকে একটি গ্লো লাইন */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#00c2ff] rounded-full transition-all duration-500 group-hover:w-1/2 shadow-[0_0_15px_#00c2ff]"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ৩. Our Plan Section */}
      <section className="py-20 bg-[#061a19] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-center bg-repeat" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* হেডার */}
          <div className="mb-14 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter" style={{ textShadow: '0px 4px 15px #ff9900' }}>Our Plan</h2>
            <div className="w-20 h-1 bg-[#F5F227] mx-auto rounded-full"></div>
            <p className="text-white/40 font-medium max-w-lg mx-auto pt-2 text-sm md:text-base leading-relaxed">
              Choose the Perfect Plan to Grow and Succeed with Income 25 BD.
            </p>
          </div>

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


      {/* ৪. Testimonials -  */}
      <section className="relative py-15 bg-[#061a19] overflow-hidden min-h-[750px]">

        <div className="max-w-7xl mx-auto text-center mb-12 relative z-50">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            What Our Client&apos;s Say
          </h2>
          <div className="w-20 h-1 bg-[#F5F227] mx-auto mt-4 rounded-full shadow-[0_0_15px_#F5F227]"></div>
        </div>

        {/* কার্ড কন্টেইনার - উচ্চতা কমিয়ে ৫০০পিএক্স করা হয়েছে */}
        <div className="relative max-w-[1200px] mx-auto h-[500px] hidden lg:block">
          {testimonials?.items?.slice(0, 7).map((item, i) => {

            // মুভমেন্ট রেঞ্জ অনেক কমানো হয়েছে (সর্বোচ্চ ৬০-৮০ পিক্সেল)
            const tightPaths = [
              { x: [0, 60, -30, 0], y: [0, 40, 20, 0] },
              { x: [0, -50, 40, 0], y: [0, 60, -30, 0] },
              { x: [0, 40, -60, 0], y: [0, -40, 30, 0] },
              { x: [0, -70, 30, 0], y: [0, -30, 50, 0] },
              { x: [0, 50, -40, 0], y: [0, 20, -50, 0] },
              { x: [0, -40, 50, 0], y: [0, 50, -20, 0] },
              { x: [0, 30, -70, 0], y: [0, -50, 40, 0] },
            ];

            // শুরুর পজিশনগুলো আরও কাছাকাছি আনা হয়েছে
            const tightPositions = [
              { top: '5%', left: '15%' }, { top: '8%', right: '15%' },
              { top: '35%', left: '38%' }, { top: '65%', left: '10%' },
              { top: '70%', right: '12%' }, { top: '38%', left: '5%' },
              { top: '42%', right: '8%' }
            ];

            return (
              <motion.div
                key={item.id}
                animate={tightPaths[i]}
                transition={{
                  duration: 15 + i * 2, // গতি একটু বাড়ানো হয়েছে যেন মুভমেন্ট বোঝা যায়
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: "absolute",
                  ...tightPositions[i]
                }}
                className="z-20"
              >
                {/* কার্ডের সাইজও কিছুটা ছোট করা হয়েছে যাতে হিজিবিজি না লাগে */}
                <div className={`bg-[#0d2e2d]/95 backdrop-blur-md border border-[#C9A24D]/30 p-7 shadow-2xl w-[270px] hover:border-[#F5F227] transition-all hover:z-50 ${cardShapes[i]}`}>
                  <div className="flex flex-col items-center text-center">
                    <img src={item.avatar} className="w-14 h-14 rounded-full border-2 border-[#F5F227] p-1 mb-3 object-cover" alt="" />
                    <h4 className="text-[#F5F227] font-black text-xs uppercase tracking-widest">{item.name}</h4>
                    <div className="flex gap-1 my-1.5">
                      {[...Array(5)].map((_, idx) => <span key={idx} className="text-[#C9A24D] text-[10px]">★</span>)}
                    </div>
                    <p className="text-white/50 text-[10px] italic leading-relaxed line-clamp-2">
                      &quot;{item.feedback}&quot;
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* মোবাইল ভিউ - এটা একই থাকবে */}
        <div className="lg:hidden flex flex-col gap-8 px-6 pb-10">
          {testimonials?.items?.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-[#0d2e2d] p-6 rounded-[2.5rem] border border-[#C9A24D]/20 text-center">
              <img src={item.avatar} className="w-12 h-12 rounded-full mx-auto mb-3 border-2 border-[#F5F227]" alt="" />
              <h4 className="text-[#F5F227] font-bold text-xs uppercase">{item.name}</h4>
              <p className="text-white/40 text-[11px] mt-2 italic">&quot;{item.feedback}&quot;</p>
            </div>
          ))}
        </div>
      </section>

      {/* ৭. Latest Deposit & Withdraw Section  */}
      <section className="py-20 bg-[#061a19] relative overflow-hidden">

        {/* ব্যাকগ্রাউন্ডে খুব হালকা একটা গ্লো ইফেক্ট */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C9A24D]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

            {/* --- Latest Deposit Table --- */}
            <div className="space-y-8">
              <div className="space-y-3 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white" style={{ textShadow: '0px 4px 15px rgba(255, 153, 0, 0.2)' }}>
                  Latest Deposit
                </h2>
                <p className="text-white/40 text-sm font-medium italic">
                  Real-time deposit tracking with Income 25 BD.
                </p>
                <div className="w-16 h-1 bg-[#F5F227] mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <div className="rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0d2e2d]/40 backdrop-blur-md">
                <table className="w-full text-left">
                  <thead className="bg-[#0d2e2d] text-[#F5F227] text-[11px] uppercase font-black tracking-[2px]">
                    <tr>
                      <th className="py-6 px-6">Amount</th>
                      <th className="py-6 px-6">Date</th>
                      <th className="py-6 px-6">Gateway</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    {transactions?.deposits?.map((item, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                        <td className="py-5 px-6 text-white font-bold">{item.amount}</td>
                        <td className="py-5 px-6 text-white/50">{item.date}</td>
                        <td className="py-5 px-6">
                          <span className="bg-[#163a39] text-[#F5F227] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border border-[#F5F227]/10 group-hover:border-[#F5F227]/30 transition-all">
                            {item.gateway}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- Latest Withdraw Table --- */}
            <div className="space-y-8">
              <div className="space-y-3 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white" style={{ textShadow: '0px 4px 15px rgba(255, 153, 0, 0.2)' }}>
                  Latest Withdraw
                </h2>
                <p className="text-white/40 text-sm font-medium italic">
                  Secure processing for your recent withdrawals.
                </p>
                <div className="w-16 h-1 bg-[#C9A24D] mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <div className="rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0d2e2d]/40 backdrop-blur-md">
                <table className="w-full text-left">
                  <thead className="bg-[#C9A24D] text-[#0F2A1D] text-[11px] uppercase font-black tracking-[2px]">
                    <tr>
                      <th className="py-6 px-6">Name</th>
                      <th className="py-6 px-6">Amount</th>
                      <th className="py-6 px-6">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    {transactions?.withdraws?.map((item, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                        <td className="py-5 px-6 text-white font-bold">{item.name}</td>
                        <td className="py-5 px-6 text-[#F5F227] font-black">{item.amount}</td>
                        <td className="py-5 px-6 text-white/50">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ৮. Newsletter Section  */}
      <section className="relative py-28 overflow-hidden">

        {/* ১. ব্যাকগ্রাউন্ড ইমেজ এবং ওভারলে */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homeData.newsletter.bgImage})` }}
        ></div>
        {/* ডার্ক ব্লু/টিল ওভারলে যাতে টেক্সট পরিষ্কার বোঝা যায় */}
        <div className="absolute inset-0 bg-[#061a19]/80 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

          {/* হেডার টেক্সট */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-12 tracking-tight">
            {homeData.newsletter.title}
          </h2>

          {/* সাবস্ক্রিপশন ফর্ম (পিল শেপ) */}
          <form className="relative max-w-2xl mx-auto group">
            <div className="flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 pl-8 focus-within:bg-white/20 focus-within:border-[#F5F227]/40 transition-all shadow-2xl">

              {/* ইমেইল ইনপুট */}
              <input
                type="email"
                placeholder={homeData.newsletter.placeholder}
                className="w-full bg-transparent border-none py-4 text-white placeholder:text-white/60 outline-none text-lg font-medium"
                required
              />

              {/* সাবমিট বাটন (আইকন সহ গোল বাটন) */}
              <button
                type="submit"
                className="w-14 h-14 bg-white hover:bg-[#F5F227] text-[#061a19] rounded-full flex items-center justify-center transition-all duration-300 shadow-xl active:scale-90 flex-shrink-0"
              >
                {/* কাগজী প্লেন আইকন (SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 rotate-45"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>

            {/* ইনপুটের নিচে হালকা গ্লো ইফেক্ট */}
            <div className="absolute inset-0 -z-10 bg-[#F5F227]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </form>

        </div>
      </section>

      {/* ৯. FAQs Section*/}
      <section className="py-20 bg-[#061a19] relative overflow-hidden border-t border-white/5">

        {/* ব্যাকগ্রাউন্ডে গোল্ডেন আভা */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C9A24D]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* হেডার */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter" style={{ textShadow: '0px 4px 15px rgba(255, 153, 0, 0.3)' }}>
              {faqs.title}
            </h2>
            <div className="w-24 h-1 bg-[#F5F227] mx-auto rounded-full shadow-[0_0_15px_#F5F227]"></div>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium pt-2">
              {faqs.subtitle}
            </p>
          </div>

          {/* FAQ গ্রিড (২ কলাম) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs?.items?.map((faq) => (
              <div
                key={faq.id}
                className="h-fit"
              >
                {/* প্রশ্ন বক্স */}
                <div
                  onClick={() => toggleFaq(faq.id)}
                  className={`flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 
                    ${openFaq === faq.id
                      ? 'bg-[#163a39] border-[#F5F227] shadow-[0_0_20px_rgba(245,242,39,0.1)]'
                      : 'bg-[#0d2e2d] border-white/5 hover:border-[#F5F227]/30 hover:bg-[#163a39]/50'
                    }`}
                >
                  <h3 className={`text-lg font-bold tracking-tight transition-colors ${openFaq === faq.id ? 'text-[#F5F227]' : 'text-white/90'}`}>
                    {faq.question}
                  </h3>

                  {/* প্লাস/মাইনাস আইকন */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center relative">
                    <div className={`w-4 h-0.5 bg-[#F5F227] rounded-full transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`}></div>
                    <div className={`w-0.5 h-4 bg-[#F5F227] absolute rounded-full transition-transform duration-300 ${openFaq === faq.id ? 'rotate-90 opacity-0' : ''}`}></div>
                  </div>
                </div>

                {/* উত্তর বক্স (Smooth Animation) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === faq.id ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 bg-[#0d2e2d]/50 border border-white/5 rounded-2xl text-white/50 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ১০. Call To Action Section (Get Started) */}
      <section className="relative py-20 overflow-hidden">

        {/* ১. ব্যাকগ্রাউন্ড ইমেজ (ছবির মতো গিয়ার বা টিমওয়ার্কের ছবি) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homeData.cta.bgImage})` }}
        ></div>

        {/* ২. ডার্ক টিল ওভারলে (সাইটের কালারের সাথে মিল রেখে) */}
        <div className="absolute inset-0 bg-[#061a19]/90 backdrop-blur-[1px] z-0"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">

          {/* হেডার টেক্সট */}
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            {homeData.cta.title}
          </h2>

          {/* সাবটাইটেল */}
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            {homeData.cta.subtitle}
          </p>

          {/* ৩ডি গোল্ডেন বাটন */}
          <div className="pt-4">
            <Link
              href="/signup"
              className="relative inline-block px-12 py-5 bg-[#C9A24D] text-[#0F2A1D] font-black rounded-xl 
                   uppercase text-sm tracking-[3px] transition-all duration-100
                   border-b-[6px] border-[#8B6B2F] 
                   hover:bg-[#F5F227] hover:border-[#A68A3D]
                   active:border-b-0 active:translate-y-[6px]
                   shadow-2xl shadow-black/50"
            >
              {homeData.cta.btnText}
            </Link>
          </div>

        </div>
      </section>

      {/* ১১. Latest News (Blog) Section */}
      <section className="py-24 bg-[#061a19] relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* হেডার অংশ */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter" style={{ textShadow: '0px 4px 15px rgba(255, 153, 0, 0.3)' }}>
              {news.title}
            </h2>
            <div className="w-24 h-1.5 bg-[#F5F227] mx-auto rounded-full shadow-[0_0_15px_#F5F227]"></div>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium pt-2 leading-relaxed">
              {news.subtitle}
            </p>
          </div>

          {/* ব্লগ কার্ড গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {news?.blogs?.map((blog) => (
              <div
                key={blog.id}
                className="group bg-[#0d2e2d] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A24D]/30"
              >
                {/* ইমেজ সেকশন */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* তারিখের ছোট গোল্ডেন ট্যাগ */}
                  <div className="absolute bottom-4 left-6 bg-[#C9A24D] text-[#0F2A1D] px-4 py-1 rounded-full text-[10px] font-black tracking-widest shadow-lg">
                    {blog.date}
                  </div>
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div className="p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-[#F5F227] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Read More লিঙ্ক */}
                  <Link href={`/blog/${blog.id}`} className="inline-flex items-center gap-2 text-[#C9A24D] font-bold text-xs uppercase tracking-[2px] group-hover:gap-4 transition-all">
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}