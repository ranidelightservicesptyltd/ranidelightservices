"use client";

import { motion } from "framer-motion";

export default function ServiceHeroV2() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/video-poster.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src="/0403.mp4" type="video/mp4" />
      </video>

      {/* Light Overlay for Video removed per user request */}

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.1] md:leading-[0.95] tracking-tight mb-6 md:mb-8 text-shadow-md">
              Our Cleaning <br />
              <span className="text-blue-500">Services</span>
            </h1>

            <p className="text-white text-lg md:text-2xl font-light leading-relaxed mb-8 md:mb-10 text-shadow-sm">
              Transforming your environment into a sanctuary of purity. Our medical-grade protocols ensure every surface is more than just clean, it's Rani Delight clean.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href="https://api.whatsapp.com/send/?phone=61478815629&text=Hi%2C+I%27d+like+to+enquire+about+your+cleaning+services.&type=phone_number&app_absent=0"
                target="_blank"
                className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/20 text-center text-lg md:text-xl"
              >
                Get a Free Estimate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
