import Link from 'next/link';
import React from 'react';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#061a19] pb-20">

            {/* ১. ব্যানার সেকশন (User Data Header) */}
            <div className="relative h-[250px] w-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://i.ibb.co.com/WNrcDyVC/photo-2025-12-25-02-13-31.jpg')" }}>
                {/* ব্ল্যাক ওভারলে */}
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 text-center">
                    <h1 className="text-white text-5xl font-bold tracking-tight mb-2 drop-shadow-lg" style={{ textShadow: '0px 4px 10px #ff9900' }}>User Data</h1>
                    <Link href="/" className="hover:text-orange-500 cursor-pointer  hover:underline">Home</Link>
                </div>
            </div>

            {/* ২. ফর্ম সেকশন */}
            <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-20">
                <div className="bg-[#0d2e2d] rounded-xl shadow-2xl border border-white/5 p-8 md:p-12">

                    <form className="space-y-6">

                        {/* Username (Full Width) */}
                        <div>
                            <label className="block text-white text-sm font-semibold mb-2 uppercase tracking-wide">Username</label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="w-full bg-[#163a39] border border-white/10 rounded-lg p-4 text-white outline-none focus:border-orange-500/50 transition-all"
                            />
                        </div>

                        {/* Country & Mobile (2 Columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white text-sm font-semibold mb-2 uppercase tracking-wide">
                                    Country
                                </label>
                                <select className="w-full bg-[#163a39] border border-white/10 rounded-lg p-4 text-white outline-none focus:border-orange-500/50 transition-all">
                                    <option>Afghanistan</option>
                                    <option>Bangladesh</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-white text-sm font-semibold mb-2 uppercase tracking-wide">
                                    Mobile
                                </label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-4 bg-[#1a4443] border border-r-0 border-white/10 rounded-l-lg text-white/70 text-sm">
                                        +93
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        className="w-full bg-[#163a39] border border-white/10 rounded-r-lg p-4 text-white outline-none focus:border-orange-500/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Address & State (2 Columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white text-sm font-semibold mb-2 uppercase tracking-wide">Address</label>
                                <input
                                    type="text" placeholder='address'
                                    className="w-full bg-[#163a39] border border-white/10 rounded-lg p-4 text-white outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-white text-sm font-semibold mb-2 uppercase tracking-wide">State</label>
                                <input
                                    type="text" placeholder='state'
                                    className="w-full bg-[#163a39] border border-white/10 rounded-lg p-4 text-white outline-none"
                                />
                            </div>
                        </div>

                        {/* Zip Code & City (2 Columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white text-sm font-semibold mb-2 uppercase tracking-wide">Zip Code</label>
                                <input
                                    type="text" placeholder='code'
                                    className="w-full bg-[#163a39] border border-white/10 rounded-lg p-4 text-white outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-white text-sm font-semibold mb-2 uppercase tracking-wide">City</label>
                                <input
                                    type="text" placeholder='city'
                                    className="w-full bg-[#163a39] border border-white/10 rounded-lg p-4 text-white outline-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Link href="userdashboard/dashboard">
                                <button
                                    type="submit"
                                    className="w-full bg-[#C9A24D] hover:bg-[#E0C878] text-[#0F2A1D] font-black py-4 rounded-lg transition-all uppercase text-sm tracking-[2px] shadow-xl shadow-black/20 shadow-xl shadow-[#C9A24D]/30 hover:shadow-[#C9A24D]/50 active:scale-[0.98]"
                                >
                                    Submit
                                </button>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}