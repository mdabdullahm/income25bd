"use client";
import homeData from "@/data/homeData.json";
import Link from "next/link";

export default function ShopPage() {
  const { shop } = homeData;

  return (
    <div className="min-h-screen bg-[#061a19] text-white font-sans overflow-x-hidden pb-20">
      
      {/* ১. ব্যানার সেকশন */}
      <div className="relative h-[320px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden" 
           style={{ backgroundImage: "url('https://i.ibb.co.com/mrmjpfby/photo-2025-12-26-21-08-56.jpg')" }}>
        <div className="absolute inset-0 bg-[#061a19]/85 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white" 
              style={{ textShadow: '0px 4px 20px rgba(255, 153, 0, 0.5)' }}>
            {shop.title}
          </h1>
          <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-black uppercase tracking-[3px]">
            <Link href="/" className="hover:text-[#F5F227] transition-colors">Home</Link> 
            <span className="text-[#C9A24D] opacity-50">/</span> 
            <span className="text-[#F5F227]">Shop</span>
          </nav>
        </div>
      </div>

      {/* ২. প্রোডাক্ট সেকশন */}
      <section className="py-24 relative px-6">
        {/* ব্যাকগ্রাউন্ডে গোল্ডেন আভা */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C9A24D]/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* হেডার */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">{shop.subtitle}</h2>
            <div className="w-20 h-1 bg-[#F5F227] mx-auto rounded-full"></div>
          </div>

          {/* প্রোডাক্ট গ্রিড */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {shop?.products?.map((product) => (
              <div 
                key={product.id} 
                className="group bg-[#0d2e2d] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A24D]/30"
              >
                {/* প্রোডাক্ট ইমেজ */}
                <div className="relative h-64 overflow-hidden bg-[#163a39]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
                  />
                  {/* ক্যাটাগরি ব্যাজ */}
                  <div className="absolute top-4 left-6 bg-[#061a19]/80 backdrop-blur-md text-[#F5F227] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                    {product.category}
                  </div>
                </div>

                {/* প্রোডাক্ট ডিটেইলস */}
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-black text-white group-hover:text-[#F5F227] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-[#F5F227]">${product.price}</span>
                    <span className="text-sm text-white/30 line-through">${product.oldPrice}</span>
                  </div>

                  {/* বাই নাও বাটন (৩ডি গোল্ডেন বাটন) */}
                  <div className="pt-2">
                    <button className="relative w-full bg-[#C9A24D] text-[#0F2A1D] font-black py-3 rounded-xl uppercase tracking-[2px] text-[11px] transition-all duration-100 border-b-[4px] border-[#8B6B2F] active:border-b-0 active:translate-y-[4px] hover:bg-[#F5F227] shadow-lg shadow-black/40">
                      Add to Cart
                    </button>
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