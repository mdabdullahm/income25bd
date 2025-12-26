import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#061a19]">
      
      {/* বাম পাশ: ইমেজ এবং ওয়েলকাম টেক্সট */}
      <div className="relative md:w-1/2 hidden md:flex items-center justify-center p-12 bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')" }}>
        {/* ডার্ক ওভারলে */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center">
          <p className="text-[#F5F227] font-bold text-2xl mb-2 drop-shadow-md">Welcome back</p>
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter" 
              style={{ textShadow: '0px 4px 15px #ff9900' }}>
            Sign In <br /> <span className="text-sm font-light normal-case tracking-normal">to your account</span>
          </h1>
        </div>
      </div>

      {/* ডান পাশ: লগইন ফর্ম */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 md:p-16 bg-[#0d2e2d]">
        
        {/* logo */}
        <div className="flex items-center gap-2 mb-10">
            <img 
              src="https://i.ibb.co.com/BhHt96j/20251225-100635.png" 
              alt="Logo" 
              className="h-12 w-auto object-contain"
            />
            <div className="text-3xl font-black tracking-tighter text-white" 
                 style={{ textShadow: '0px 4px 10px rgba(255, 153, 0, 0.5)' }}>
                INCOME<span className="text-[#F5F227]">25 BD</span>
            </div>
        </div>

        {/* সোশ্যাল লগইন বাটন */}
        <div className="flex gap-4 w-full max-w-md mb-8">
          <button className="flex-1 flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-3 rounded-lg text-[13px] text-white hover:bg-white/10 transition-all active:scale-95">
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="w-5 h-5" />
            Google
          </button>

          <button className="flex-1 flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-3 rounded-lg text-[13px] text-white hover:bg-white/10 transition-all active:scale-95">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5" />
            Facebook
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-4 w-full max-w-md mb-8">
          <div className="h-[1px] bg-white/10 flex-1"></div>
          <span className="text-white/40 text-xs font-bold uppercase tracking-widest">OR</span>
          <div className="h-[1px] bg-white/10 flex-1"></div>
        </div>

        {/* ফর্ম */}
        <form className="w-full max-w-md space-y-5">
          <div>
            <label className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">Username or Email</label>
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="w-full bg-[#163a39] border border-white/10 rounded-lg p-4 text-white text-sm outline-none focus:border-[#F5F227]/50 transition-all" 
            />
          </div>

          <div>
            <label className="block text-white/70 text-xs font-bold mb-2 uppercase tracking-widest">Your Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-[#163a39] border border-white/10 rounded-lg p-4 text-white text-sm outline-none focus:border-[#F5F227]/50 transition-all" 
            />
          </div>

          {/* ReCAPTCHA */}
          <div className="bg-white p-3 rounded-lg flex items-center justify-between shadow-xl w-full max-w-[300px]">
            <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 cursor-pointer accent-green-600" />
                <span className="text-sm text-gray-800 font-medium">I&apos;m not a robot</span>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-8" alt="recaptcha" />
                <span className="text-[10px] text-gray-400 font-bold">reCAPTCHA</span>
            </div>
          </div>

          {/* সাইন ইন বাটন */}
          <button type="submit" className="w-full bg-[#C9A24D] hover:bg-[#F5F227] text-[#0F2A1D] font-black py-4 rounded-xl mt-4 transition-all uppercase text-sm tracking-[2px] shadow-2xl shadow-black/40 active:scale-95">
            Sign In Now
          </button>
        </form>

        {/* ফুটার লিংক */}
        <div className="flex flex-col sm:flex-row justify-between w-full max-w-md mt-10 text-[13px] gap-4">
          <p className="text-white/60">
            Don&apos;t have an account? 
            <Link href="/signup" className="text-[#F5F227] hover:text-white ml-2 font-bold transition-colors">Sign Up</Link>
          </p>
          <Link href="#" className="text-[#F5F227] hover:text-[#ff4444] font-bold transition-colors">Forgot Password?</Link>
        </div>

        <p className="mt-16 text-white/20 text-[10px] uppercase tracking-[3px] font-medium">
          © All Right Reserved By Income 25 BD
        </p>
      </div>
    </div>
  );
}