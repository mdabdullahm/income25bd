"use client";
import homeData from "@/data/homeData.json";
import Link from "next/link";

export default function ContactPage() {
    const { contact } = homeData;

    return (
        <div className="min-h-screen bg-[#061a19] text-white font-sans overflow-x-hidden pb-20">

            {/* ১. ব্যানার সেকশন */}
            <div className="relative h-[320px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('https://i.ibb.co.com/mrmjpfby/photo-2025-12-26-21-08-56.jpg')" }}>
                <div className="absolute inset-0 bg-[#061a19]/85 backdrop-blur-[1px]"></div>

                <div className="relative z-10 text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white"
                        style={{ textShadow: '0px 4px 20px rgba(255, 153, 0, 0.5)' }}>
                        {contact.title}
                    </h1>
                    <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-black uppercase tracking-[3px]">
                        <Link href="/" className="hover:text-[#F5F227] transition-colors">Home</Link>
                        <span className="text-[#C9A24D] opacity-50">/</span>
                        <span className Sab="text-[#F5F227]">Contact Us</span>
                    </nav>
                </div>
            </div>

            {/* ২. কন্টাক্ট ইনফো কার্ডস (Phone, Email, Address) */}
            <section className="py-10 relative px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Phone Card */}
                    <div className="bg-[#0d2e2d] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col items-center text-center group hover:border-[#F5F227]/30 transition-all">
                        <div className="w-16 h-16 bg-[#163a39] rounded-full flex items-center justify-center mb-6 shadow-xl border border-[#F5F227]/20 group-hover:bg-[#C9A24D] transition-all">
                            <svg className="w-8 h-8 text-[#F5F227] group-hover:text-[#0F2A1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Phone</h4>
                        <p className="text-[#F5F227] font-bold">{contact.phone}</p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-[#0d2e2d] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col items-center text-center group hover:border-[#F5F227]/30 transition-all">
                        <div className="w-16 h-16 bg-[#163a39] rounded-full flex items-center justify-center mb-6 shadow-xl border border-[#F5F227]/20 group-hover:bg-[#C9A24D] transition-all">
                            <svg className="w-8 h-8 text-[#F5F227] group-hover:text-[#0F2A1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Email</h4>
                        <p className="text-[#F5F227] font-bold">{contact.email}</p>
                    </div>

                    {/* Address Card */}
                    <div className="bg-[#0d2e2d] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col items-center text-center group hover:border-[#F5F227]/30 transition-all">
                        <div className="w-16 h-16 bg-[#163a39] rounded-full flex items-center justify-center mb-6 shadow-xl border border-[#F5F227]/20 group-hover:bg-[#C9A24D] transition-all">
                            <svg className="w-8 h-8 text-[#F5F227] group-hover:text-[#0F2A1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Address</h4>
                        <p className="text-[#F5F227] font-bold">{contact.address}</p>
                    </div>

                </div>
            </section>

            {/* ৩. কন্টাক্ট ফর্ম সেকশন */}
            <section className="py-24 bg-[#0d2e2d]/40 relative">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                            {contact.subtitle}
                        </h2>
                        <div className="w-24 h-1.5 bg-[#C9A24D] mx-auto rounded-full shadow-[0_0_15px_#ff9900]"></div>
                    </div>

                    <form className="space-y-8 bg-[#0d2e2d] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-[2px] text-white/50">Full Name / Subject</label>
                                <input type="text" className="w-full bg-[#163a39] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#F5F227]/50 transition-all" placeholder="Enter details" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-[2px] text-white/50">Email Address</label>
                                <input type="email" className="w-full bg-[#163a39] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#F5F227]/50 transition-all" placeholder="name@example.com" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-[2px] text-white/50">Your Message</label>
                            <textarea rows="5" className="w-full bg-[#163a39] border border-white/10 rounded-[2rem] p-6 text-white outline-none focus:border-[#F5F227]/50 transition-all resize-none" placeholder="How can we help you?"></textarea>
                        </div>

                        {/* ReCAPTCHA এবং বাটন এখন পাশাপাশি (X-axis) থাকবে */}
                        <div className="flex flex-col md:flex-row items-center gap-8 pt-4">

                            {/* ১. ReCAPTCHA Placeholder */}
                            <div className="bg-white p-3 rounded-xl flex items-center justify-between shadow-xl w-full max-w-[300px] flex-shrink-0">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="w-5 h-5 cursor-pointer accent-green-600" />
                                    <span className="text-sm text-gray-800 font-medium">I&apos;m not a robot</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-8" alt="recaptcha" />
                                    <span className="text-[10px] text-gray-400 font-bold">reCAPTCHA</span>
                                </div>
                            </div>

                            {/* ২. ৩ডি সাবমিট বাটন */}
                            <button
                                type="submit"
                                className="relative inline-block w-full md:w-auto px-12 py-5 bg-[#C9A24D] text-[#0F2A1D] font-black rounded-2xl 
               uppercase text-sm tracking-[3px] transition-all duration-100
               border-b-[6px] border-[#8B6B2F] 
               hover:bg-[#F5F227] hover:border-[#A68A3D]
               active:border-b-0 active:translate-y-[6px]
               shadow-2xl shadow-black/50"
                            >
                                {contact.btnText}
                            </button>

                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
}