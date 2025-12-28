"use client"; // স্টেট ব্যবহারের জন্য এটি জরুরি
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // মেনু খোলা কি না তা ট্র্যাক করবে

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Plan", href: "/plan" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-white/10 bg-[#061a19]/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex-shrink-0">
            <img
              src="https://i.ibb.co.com/BhHt96j/20251225-100635.png"
              alt="Logo"
              className="h-9 md:h-10 w-auto object-contain"
            />
          </div>
          <div
            className="text-xl md:text-2xl font-black tracking-tighter text-white"
            style={{ textShadow: '0px 4px 12px rgba(255, 153, 0, 0.6)' }}
          >
            INCOME<span className="text-[#F5F227]"> 25 BD</span>
          </div>
        </Link>

        {/* Navigation Links - শুধুমাত্র ডেস্কটপে দেখাবে */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12px] font-bold uppercase tracking-wider text-white/90">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#F5F227] transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side - Dashboard & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Dashboard Button (ডেস্কটপে বড়, মোবাইলে ছোট) */}
          <Link href="/userdashboard" className="hidden sm:block">
            <button className="bg-[#C9A24D] hover:bg-[#E0C878] text-[#0F2A1D] px-5 py-2.5 rounded-md font-bold text-[11px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/10 active:scale-95">
              Dashboard
            </button>
          </Link>

          {/* Hamburger Button - শুধুমাত্র মোবাইলে (lg এর নিচে) দেখাবে */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-white/10 rounded-lg bg-white/5 text-[#F5F227] transition-all active:bg-white/10"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - ড্রপডাউন মেনু */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#061a19] border-b border-white/5 ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-5 px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
              className="text-white font-bold uppercase tracking-[2px] text-sm hover:text-[#F5F227] transition-all"
            >
              {link.name}
            </Link>
          ))}
          {/* mobil dashbord btn mnu*/}
          <Link href="/userdashboard" className="w-full pt-4 border-t border-white/5 sm:hidden">
            <button className="w-full bg-[#C9A24D] text-[#0F2A1D] py-4 rounded-xl font-black uppercase text-xs tracking-[3px]">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;