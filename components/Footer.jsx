import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-[#061a19] text-white pt-20 pb-10 overflow-hidden">
      
      {/* ১. ব্যাকগ্রাউন্ড ইমেজ এবং ওভারলে */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#061a19] via-transparent to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* কলাম ১: লোগো এবং বর্ণনা */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <img 
                  src="https://i.ibb.co.com/BhHt96j/20251225-100635.png" 
                  alt="Logo" 
                  className="h-10 w-auto"
                />
                <div className="text-2xl font-black tracking-tighter text-white" style={{ textShadow: '0px 4px 10px #ff9900' }}>
                    INCOME<span className="text-[#F5F227]">25 BD</span>
                </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Income 25 BD is a complete multilevel matrix solution designed for network marketers. 
              Start your journey today with our ready-to-go platform and expert support.
            </p>
            {/* সোশ্যাল আইকন */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all shadow-xl shadow-black/20 shadow-xl shadow-[#C9A24D]/30 hover:shadow-[#C9A24D]/50 active:scale-[0.98">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="FB" className="w-5 h-5 invert" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all shadow-xl shadow-black/20 shadow-xl shadow-[#C9A24D]/30 hover:shadow-[#C9A24D]/50 active:scale-[0.98">
                <img src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" alt="Twitter" className="w-5 h-5 invert" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all shadow-xl shadow-black/20 shadow-xl shadow-[#C9A24D]/30 hover:shadow-[#C9A24D]/50 active:scale-[0.98">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Linkedin" className="w-5 h-5 invert" />
              </a>
            </div>
          </div>

          {/* কলাম ২: কুইক লিঙ্কস */}
          <div>
            <h4 className="text-[#F5F227] font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/" className="hover:text-orange-500 transition hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition hover:underline">About Us</Link></li>
              <li><Link href="/plan" className="hover:text-orange-500 transition hover:underline">Our Plans</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition hover:underline">Latest Blog</Link></li>
            </ul>
          </div>

          {/* কলাম ৩: পলিসি লিঙ্কস */}
          <div>
            <h4 className="text-[#F5F227] font-bold uppercase tracking-widest text-sm mb-6">Privacy & Terms</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-orange-500 transition hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition hover:underline">Terms & Condition</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition hover:underline">Support Center</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* কলাম ৪: কন্টাক্ট ইনফো */}
          <div>
            <h4 className="text-[#F5F227] font-bold uppercase tracking-widest text-sm mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" className="w-5 h-5 invert opacity-50" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" className="w-5 h-5 invert opacity-50" />
                <span>support@income25bd.com</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="https://cdn-icons-png.flaticon.com/512/3059/3059590.png" className="w-5 h-5 invert opacity-50" />
                <span>+880 1234 567890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* নিচের কপিরাইট অংশ */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2025 <span className="text-[#F5F227] font-bold">INCOME25 BD</span>. All Right Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;