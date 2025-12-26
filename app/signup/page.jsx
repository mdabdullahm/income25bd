import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0d2e2d]">
      
      {/* বাম পাশ: ইমেজ এবং ওয়েলকাম টেক্সট */}
      <div className="relative md:w-1/2 hidden md:flex items-center justify-center p-12 bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop')" }}>
        {/* ওভারলে */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center">
          <p className="text-[#F5F227] font-semibold text-xl mb-2">Welcome to Income 25 BD</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold" style={{ textShadow: '0px 4px 10px #ff9900' }}>Create your account</h1>
        </div>
      </div>

      {/* ডান পাশ: সাইনআপ ফর্ম */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 md:p-16">
        
        {/* লোগো */}
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

        {/* সোশ্যাল লগইন বাটন (আইকন সহ) */}
        <div className="flex gap-4 w-full max-w-md mb-6">
          {/* Google Button */}
          <button className="flex-1 flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-2.5 rounded text-[13px] text-white hover:bg-white/10 transition">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
              alt="Google" 
              className="w-5 h-5"
            />
            Login with Google
          </button>

          {/* Facebook Button */}
          <button className="flex-1 flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-2.5 rounded text-[13px] text-white hover:bg-white/10 transition">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
              alt="Facebook" 
              className="w-5 h-5"
            />
            Login with Facebook
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-4 w-full max-w-md mb-6">
          <div className="h-[1px] bg-white/10 flex-1"></div>
          <span className="text-white/40 text-xs font-bold">OR</span>
          <div className="h-[1px] bg-white/10 flex-1"></div>
        </div>

        {/* ফর্ম */}
        <form className="w-full max-w-md space-y-4">
          <div>
            <label className="block text-white text-xs font-medium mb-1.5 uppercase tracking-wide">Username or Email</label>
            <input type="text" placeholder="admin" className="w-full bg-[#163a39] border border-white/10 rounded p-3 text-white text-sm outline-none focus:border-orange-500/50 transition-all" />
          </div>

          <div>
            <label className="block text-white text-xs font-medium mb-1.5 uppercase tracking-wide">Your Password</label>
            <input type="password" placeholder="•••••" className="w-full bg-[#163a39] border border-white/10 rounded p-3 text-white text-sm outline-none focus:border-orange-500/50 transition-all" />
          </div>

          {/* ReCAPTCHA */}
          <div className="bg-white p-2.5 rounded flex items-center justify-between shadow-md w-full max-w-[300px]">
            <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 cursor-pointer accent-green-600" />
                <span className="text-sm text-gray-700 font-medium">Im not a robot</span>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-7" alt="recaptcha" />
                <span className="text-[10px] text-gray-400">reCAPTCHA</span>
            </div>
          </div>

          {/* সাইনআপ বাটন (নতুন কালার স্কিম অনুযায়ী) */}
          <button type="submit" className="w-full bg-[#C9A24D] hover:bg-[#E0C878] text-[#0F2A1D] font-bold py-3.5 rounded-md mt-4 transition-all uppercase text-sm tracking-widest shadow-xl">
            Sign Up
          </button>
        </form>

        {/* ফুটার লিংক */}
        <div className="flex justify-between w-full max-w-md mt-8 text-[13px]">
          <p className="text-white/60">Already have an account? <Link href="/login" className="text-[#F5F227] hover:underline font-semibold">Sign In</Link></p>
          <Link href="#" className="text-[#F5F227] hover:text-[#E7180B] hover:underline font-semibold">Forgot Password</Link>
        </div>

        <p className="mt-12 text-white/30 text-[11px] uppercase tracking-widest">© All Right Reserved By Income 25 BD</p>
      </div>
    </div>
  );
}