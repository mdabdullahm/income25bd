"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // পেজ রিলোড হলে এটি ৩ সেকেন্ড দেখাবে
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }} // ভ্যানিশ হওয়ার সময় একটু জুম হয়ে যাবে
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100000] bg-[#061a19] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* ব্যাকগ্রাউন্ডে গোল্ডেন গ্লো ইফেক্ট */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A24D]/10 via-transparent to-transparent"></div>

          {/* ১. লোগো এনিমেশন (বড় হয়ে আসবে) */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <img 
              src="https://i.ibb.co.com/BhHt96j/20251225-100635.png" 
              alt="Logo" 
              className="w-32 h-32 md:w-44 md:h-44 drop-shadow-[0_0_30px_rgba(201,162,77,0.3)]" 
            />
          </motion.div>

          {/* ২. ব্র্যান্ড নেম রিভিল (Reveal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 text-center space-y-4 z-10"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              INCOME<span className="text-[#F5F227]">25 BD</span>
            </h1>
            
            {/* ৩. স্টাইলিশ লোডিং রিং */}
            <div className="flex justify-center items-center gap-3">
               <motion.div 
                 animate={{ width: [10, 40, 10] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 className="h-1 bg-[#C9A24D] rounded-full"
               />
               <span className="text-[#F5F227] text-xs font-bold uppercase tracking-[4px] animate-pulse">
                 Launching
               </span>
               <motion.div 
                 animate={{ width: [10, 40, 10] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 className="h-1 bg-[#C9A24D] rounded-full"
               />
            </div>
          </motion.div>

          {/* ৪. নিচের দিকে স্লাইড এনিমেশন পার্ট */}
          <motion.div 
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            className="absolute bottom-0 left-0 w-full bg-[#C9A24D]/5 -z-10"
            transition={{ duration: 3, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}