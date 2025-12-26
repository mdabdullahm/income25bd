"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // যখনই লিঙ্ক ক্লিক হবে, লোডিং শুরু হবে
    setLoading(true);

    // ২ সেকেন্ড (২০০০ মিলি-সেকেন্ড) পর্যন্ত স্ক্রিন আটকে রাখবে
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: "100%" }} // নিচে থেকে উপরে আসবে
          animate={{ y: 0 }}
          exit={{ y: "-100%" }} // উপরে চলে যাবে
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#061a19]"
        >
          {/* স্পিনার এবং লোগো ডিজাইন */}
          <div className="relative flex items-center justify-center scale-150 mb-12">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-20 h-20 border-[4px] border-t-[#C9A24D] border-r-transparent border-b-[#C9A24D] border-l-transparent rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute w-14 h-14 border-[3px] border-t-transparent border-r-[#F5F227] border-b-transparent border-l-[#F5F227] rounded-full"
            />
            <div className="absolute">
              <img 
                src="https://i.ibb.co.com/BhHt96j/20251225-100635.png" 
                alt="Logo" 
                className="w-8 h-8 animate-pulse" 
              />
            </div>
          </div>

          {/* টেক্সট এনিমেশন */}
          <div className="text-center space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-black uppercase tracking-[6px] text-xl"
            >
              INCOME<span className="text-[#F5F227]">25 BD</span>
            </motion.h2>
            
            {/* লোডিং বার যা ২ সেকেন্ড ধরে বাড়বে */}
            <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden mx-auto border border-white/5">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }} // হুবহু ২ সেকেন্ড সময় নিবে
                className="h-full bg-gradient-to-r from-[#C9A24D] to-[#F5F227]"
              />
            </div>
            <p className="text-[#F5F227]/30 text-[10px] font-bold uppercase tracking-[4px]">
              Processing Transaction...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;