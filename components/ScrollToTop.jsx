"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // স্ক্রল পজিশন ট্র্যাক করার জন্য
  useEffect(() => {
    const toggleVisibility = () => {
      // যদি ৩০০ পিক্সেলের বেশি নিচে স্ক্রল করা হয় তবে বাটন দেখাবে
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // ওপরে যাওয়ার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // স্মুথ স্ক্রলিং
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[999] cursor-pointer"
        >
          {/* ৩ডি গোল্ডেন বাটন ডিজাইন */}
          <div className="group relative flex items-center justify-center">
            
            {/* পেছনের গ্লো ইফেক্ট */}
            <div className="absolute inset-0 bg-[#C9A24D] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            {/* মেইন বাটন */}
            <div className="relative w-14 h-14 bg-[#C9A24D] hover:bg-[#F5F227] text-[#061a19] rounded-full flex items-center justify-center shadow-[0_8px_0_#8B6B2F] active:shadow-none active:translate-y-[8px] transition-all duration-100 border-2 border-white/10">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={3} 
                stroke="currentColor" 
                className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            
            {/* ট্যাগ বা টেক্সট (ঐচ্ছিক হোভার ইফেক্ট) */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 bg-[#0d2e2d] text-[#F5F227] text-[10px] font-black py-1 px-3 rounded-md transition-all uppercase tracking-widest border border-white/5 whitespace-nowrap">
              Back to Top
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;