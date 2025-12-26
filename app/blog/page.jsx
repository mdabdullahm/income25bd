"use client";
import homeData from "@/data/homeData.json";
import Link from "next/link";

export default function BlogPage() {
  const { blogPage } = homeData;

  return (
    <div className="min-h-screen bg-[#061a19] text-white font-sans overflow-x-hidden pb-3">
      
      {/* ১. ব্যানার সেকশন (ভিডিওর মতো বিটকয়েন ব্যাকগ্রাউন্ড) */}
      <div className="relative h-[320px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden" 
           style={{ backgroundImage: "url('https://i.ibb.co.com/mrmjpfby/photo-2025-12-26-21-08-56.jpg')" }}>
        <div className="absolute inset-0 bg-[#061a19]/85 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white" 
              style={{ textShadow: '0px 4px 20px rgba(255, 153, 0, 0.5)' }}>
            {blogPage.title}
          </h1>
          <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-black uppercase tracking-[3px]">
            <Link href="/" className="hover:text-[#F5F227] transition-colors">Home</Link> 
            <span className="text-[#C9A24D] opacity-50">/</span> 
            <span className="text-[#F5F227]">Blog</span>
          </nav>
        </div>
      </div>

      {/* ২. ব্লগ কার্ড গ্রিড (ডার্ক গোল্ডেন থিম) */}
      <section className="py-24 relative">
        {/* ব্যাকগ্রাউন্ডে হালকা গোল্ডেন আভা */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C9A24D]/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPage?.blogs?.map((blog) => (
              <div 
                key={blog.id} 
                className="group bg-[#0d2e2d] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A24D]/30"
              >
                {/* ইমেজ সেকশন */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* তারিখের ছোট গোল্ডেন ট্যাগ (ভিডিওর স্টাইলে) */}
                  <div className="absolute bottom-4 left-6 bg-[#C9A24D] text-[#0F2A1D] px-4 py-1 rounded-full text-[10px] font-black tracking-widest shadow-lg border border-[#F5F227]/20">
                    {blog.date}
                  </div>
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div className="p-8 space-y-5">
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-[#F5F227] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-white/40 text-sm leading-relaxed line-clamp-3 font-medium">
                    {blog.desc}
                  </p>

                  <div className="pt-2">
                    <Link href={`/blog/${blog.id}`} className="inline-flex items-center gap-2 text-[#C9A24D] font-black text-xs uppercase tracking-[2px] group-hover:gap-4 transition-all">
                      Read More 
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}