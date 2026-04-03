"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PremiumLoaderProps {
  isLoading: boolean;
}

export default function PremiumLoader({ isLoading }: PremiumLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="premium-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50/80 to-white backdrop-blur-sm"
        >
          {/* Subtle animated background particles/glow could go here, but keeping it minimal as requested */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent opacity-60"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-4"
            >
              <div className="relative w-64 h-32 md:w-80 md:h-40">
                <Image
                  src="/logo.png"
                  alt="Rani Delight Services Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-slate-500 uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-10"
            >
              Premium Cleaning
            </motion.p>

            {/* Option B: Thin Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-48 h-[2px] bg-slate-200/60 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"
                style={{ backgroundSize: "200% 100%" }}
                animate={{
                  backgroundPosition: ["100% 0%", "-100% 0%"],
                  x: ["-100%", "100%"],
                }}
                transition={{
                  backgroundPosition: { repeat: Infinity, duration: 2, ease: "linear" },
                  x: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
