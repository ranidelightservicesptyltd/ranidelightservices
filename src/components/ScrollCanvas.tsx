"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import StarBorder from "./StarBorder";
import PremiumLoader from "./PremiumLoader";

// Lazy-load FluidGlass — defers Three.js + fiber + drei (~600KB) until actually needed
const FluidGlass = dynamic(() => import("./FluidGlass"), { ssr: false });

interface TextBeat {
  title: React.ReactNode;
  subtitle: string;
  startTime: number; // seconds into video
  endTime: number;   // seconds into video
  align: "center" | "left" | "right";
}

const BEATS: TextBeat[] = [
  {
    title: <>You Relax,<br />We <span className="text-blue-600">Clean</span></>,
    subtitle: "Homes, offices & rentals cleaned with care",
    startTime: 0,
    endTime: 3,
    align: "center",
  },
  {
    title: <>Trusted<br /><span className="text-blue-600">Professionals</span></>,
    subtitle:
      "Background-checked pros with friendly service.\nOn-time arrivals and clear, honest pricing.",
    startTime: 3.5,
    endTime: 6.5,
    align: "left",
  },
  {
    title: <><span className="text-blue-600">Eco-Friendly</span><br />Excellence</>,
    subtitle:
      "We bring our own eco-friendly supplies\nand top-grade equipment to every job.",
    startTime: 7,
    endTime: 10,
    align: "right",
  },
  {
    title: <>The Art of<br /><span className="text-blue-600">Pristine</span> Living</>,
    subtitle: "Elevating your sanctuary to its highest standard.\nExperience the luxury of a spotless home.",
    startTime: 10.5,
    endTime: 14,
    align: "center",
  },
];

function TextOverlay({
  beat,
  isVisible,
}: {
  beat: TextBeat;
  isVisible: boolean;
}) {
  const { align } = beat;

  const alignmentClasses =
    align === "left"
      ? "items-center md:items-start text-center md:text-left md:pl-16 lg:pl-24"
      : align === "right"
        ? "items-center md:items-end text-center md:text-right md:pr-16 lg:pr-24"
        : "items-center text-center";

  const isCTA = beat.startTime >= 10;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`absolute inset-0 flex flex-col justify-center ${alignmentClasses} pointer-events-none z-10 px-6`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9] mb-3 md:mb-6"
            style={{
              color: "white",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            {beat.title}
          </h2>
          <p
            className="text-sm md:text-xl lg:text-2xl max-w-sm md:max-w-lg leading-relaxed whitespace-pre-line font-light tracking-wide"
            style={{
              color: "rgba(255,255,255,0.85)",
              textShadow: "0 1px 6px rgba(0,0,0,0.7), 0 2px 16px rgba(0,0,0,0.4)",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            {beat.subtitle}
          </p>

          {isCTA && (
            <StarBorder
              as={motion.a}
              href="/booknow"
              color="#f00000ff"
              speed="4s"
              thickness={3}
              className="pointer-events-auto mt-6 md:mt-12 group !p-[2px] hover:scale-110 max-w-fit mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-full h-fit flex items-center justify-center gap-3 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/20 text-white font-medium text-base md:text-xl tracking-wide hover:bg-white/5 hover:border-white/40 hover:shadow-[0_8px_32px_0_rgba(0,212,170,0.4)] transition-all duration-500 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent rounded-[18px]">
                Book Now
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </StarBorder>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ScrollCanvas() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasCompletedSequence, setHasCompletedSequence] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Track video time
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      if (video.currentTime >= 10.5) {
        setHasCompletedSequence(true);
      }
    };

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  return (
    <>
      {/* Loading overlay */}
      <PremiumLoader isLoading={!isLoaded} />

      {/* Hero video section — full viewport height */}
      <div className="relative h-[100dvh] w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video-poster.png"
          style={{ background: "var(--color-primary-bg)" }}
        />

        {isDesktop && <FluidGlass videoRef={videoRef} modeProps={{ ior: 1.15, thickness: 1.5, scale: 0.3 }} />}

        {/* Text overlays — time-based */}
        {BEATS.map((beat, index) => {
          const isLastBeat = index === BEATS.length - 1;
          const isVisible = hasCompletedSequence
            ? isLastBeat
            : currentTime >= beat.startTime && currentTime <= beat.endTime;

          return (
            <TextOverlay
              key={index}
              beat={beat}
              isVisible={isVisible}
            />
          );
        })}

        {/* Top gradient for depth */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </div>
    </>
  );
}
