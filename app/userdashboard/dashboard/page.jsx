import React from 'react';
import Link from 'next/link';

export default function UserDashboard() {
    const stats = [
        { title: "Current Balance", value: "$0.00", icon: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png" },
        { title: "Deposit", value: "$0.00", icon: "https://cdn-icons-png.flaticon.com/512/4042/4042422.png" },
        { title: "Withdraw", value: "$0.00", icon: "https://cdn-icons-png.flaticon.com/512/10438/10438676.png" },
        { title: "Total Transactions", value: "0", icon: "https://cdn-icons-png.flaticon.com/512/2344/2344132.png" },
        { title: "Total Commission", value: "$0.00", icon: "https://cdn-icons-png.flaticon.com/512/2535/2535072.png" },
        { title: "My Plan", value: "N/A", icon: "https://cdn-icons-png.flaticon.com/512/11544/11544465.png" },
    ];

    return (
        <div className="min-h-screen bg-[#061a19] pb-20 font-sans">

            {/* ১. ব্যানার সেকশন */}
            <div className="relative h-[280px] w-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://i.ibb.co.com/7JWLTG32/premium-photo-1733317453473-175c9831c874.avif.jpg')" }}>
                <div className="absolute inset-0 bg-black/75"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-white text-5xl font-bold tracking-tight mb-3 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]" style={{ textShadow: '0px 4px 10px #ff9900' }}>Dashboard</h1>
                    <nav className="text-white/80 text-sm font-medium">
                        <Link href="/" className="hover:text-orange-500 transition">Home</Link>
                        <span className="mx-2">-</span>
                        <span className="text-white">Dashboard</span>
                    </nav>
                </div>
            </div>

            {/* ২. রেফারেল লিঙ্ক বার */}
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <div className="relative bg-[#0d2e2d] border border-white/5 p-5 rounded-lg flex flex-wrap items-center justify-between gap-4 overflow-hidden">

                    {/* --- ডান পাশের কালার ইফেক্ট (তোমার দাগানো জায়গায়) --- */}
                    <div
                        className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-r from-transparent to-[#163a39] -skew-x-12 translate-x-10 pointer-events-none"
                    ></div>

                    <div
                        className="absolute right-[-10%] top-0 h-full w-[55%] bg-[#163a39] -skew-x-[100deg] pointer-events-none"
                        style={{
                            boxShadow: '-20px 0 40px rgba(0,0,0,0.3)'
                        }}
                    ></div>

                    {/* লিঙ্ক টেক্সট (Content) */}
                    <div className="relative z-10 flex items-center gap-3 pl-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                        <div className="text-white/90 text-sm font-medium">
                            <span className="opacity-50 mr-1 hidden sm:inline">Referral Link:</span>
                            <span className="break-all">https://income25bd.com/refer?reference=abdullah</span>
                        </div>
                    </div>

                    {/* কপি বাটন */}
                    <button className="relative z-10 bg-[#C9A24D] hover:bg-[#E0C878] text-[#0F2A1D] px-7 py-2.5 rounded-md text-[11px] font-black tracking-[1.5px] transition-all shadow-lg shadow-orange-500/20 active:scale-95 uppercase">
                        COPY LINK
                    </button>
                </div>
            </div>

            {/* ৩. স্ট্যাটাস কার্ডস গ্রিড */}
            {/* ৩. স্ট্যাটাস কার্ডস গ্রিড (3D ইফেক্ট সহ) */}
            <div className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#0d2e2d] p-10 rounded-2xl border border-white/5 flex items-center justify-between 
                       shadow-[0_10px_30px_rgba(0,0,0,0.3)] 
                       transition-all duration-500 ease-out
                       hover:-translate-y-3 hover:rotate-x-2 hover:rotate-y-2
                       hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]
                       hover:border-white/20"
                    >
                        {/* কার্ডের ভেতরে হালকা গ্লো ইফেক্ট */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        <div className="relative z-10">
                            <p className="text-white/40 text-xs font-bold mb-2 uppercase tracking-[2px] group-hover:text-white/60 transition-colors">
                                {item.title}
                            </p>
                            <h3 className="text-[#C9A24D] text-4xl font-black tracking-tight drop-shadow-md">
                                {item.value}
                            </h3>
                        </div>

                        {/* আইকন সেকশন - এটাও 3D স্টাইলে পপ করবে */}
                        <div className="relative z-10 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 
                            shadow-inner transition-all duration-500
                            group-hover:scale-110 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 group-hover:rotate-[10deg]">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-9 h-9 opacity-70 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>

                        {/* নিচে একটি পাতলা গোল্ডেন লাইন যা হোভারে ফুটে উঠবে */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9A24D] transition-all duration-500 group-hover:w-2/3 shadow-[0_0_15px_#C9A24D]"></div>
                    </div>
                ))}
            </div>

            {/* ৪. লেটেস্ট ট্রানজাকশন টেবিল */}
            <div className="max-w-7xl mx-auto px-4 mt-12">
                <div className="bg-[#0d2e2d] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                    <div className="bg-[#092221] py-4 px-6 border-b border-white/5">
                        <h3 className="text-white font-bold text-lg text-center">Latest Transactions</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#C9A24D] text-[#0F2A1D] uppercase text-xs font-black">
                                <tr>
                                    <th className="py-4 px-6 tracking-widest">TRX</th>
                                    <th className="py-4 px-6 tracking-widest">Amount</th>
                                    <th className="py-4 px-6 tracking-widest">Charge</th>
                                    <th className="py-4 px-6 tracking-widest">Post Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="4" className="py-12 text-center text-white/40 font-medium italic">
                                        Data not found
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}