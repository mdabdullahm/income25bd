import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#061a19]/80 backdrop-blur-md">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        {/* লোগো আইকন - সাইজ কন্ট্রোল করা হয়েছে */}
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co.com/BhHt96j/20251225-100635.png"
            alt="Logo"
            className="h-10 w-auto object-contain" // এখানে h-10 দিয়ে লোগোর উচ্চতা ঠিক করা হয়েছে
          />
        </div>

        {/* নাম এবং স্টাইল */}
        <div
          className="text-2xl font-black tracking-tighter text-white"
          style={{ textShadow: '0px 4px 12px rgba(255, 153, 0, 0.6)' }}
        >
          INCOME<span className="text-[#F5F227]">25 BD</span>
        </div>
      </div>

      {/* Navigation Links - ডেস্কটপ মেনু */}
      <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-wider text-white/90">
        <Link href="/" className="hover:text-orange-500 transition">Home</Link>
        <Link href="/about" className="hover:text-orange-500 transition">About</Link>
        <Link href="/how-it-works" className="hover:text-orange-500 transition">How It Works</Link>
        <Link href="/plan" className="hover:text-orange-500 transition">Plan</Link>
        <Link href="/blog" className="hover:text-orange-500 transition">Blog</Link>
        <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
      </div>

      {/* Right Side - Dashboard Button */}
      <Link href="/userdashboard">
        <button className="bg-[#C9A24D] hover:bg-[#E0C878] text-[#0F2A1D] px-6 py-3 rounded-md font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20">
          Dashboard
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;