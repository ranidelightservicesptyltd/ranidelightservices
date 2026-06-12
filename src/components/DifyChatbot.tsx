"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function DifyChatbot() {
  const listenerRef = useRef<((e: Event) => void) | null>(null);

  useEffect(() => {
    function handler(e: Event) {
      const win = window.__difyChatWin;
      if (win && (win === e.target || win.contains(e.target as Node))) {
        e.preventDefault();
      }
    }

    function addListeners() {
      if (listenerRef.current) return;
      listenerRef.current = handler;
      document.addEventListener("wheel", handler, {
        capture: true,
        passive: false,
      });
      document.addEventListener("touchmove", handler, {
        capture: true,
        passive: false,
      });
    }

    function removeListeners() {
      if (!listenerRef.current) return;
      document.removeEventListener("wheel", listenerRef.current, {
        capture: true,
      });
      document.removeEventListener("touchmove", listenerRef.current, {
        capture: true,
      });
      listenerRef.current = null;
    }

    window.__difyChatWin = null;

    const observer = new MutationObserver(() => {
      const el = document.getElementById("dify-chatbot-bubble-window");
      const isOpen = el !== null && el.style.display !== "none";

      window.__difyChatWin = isOpen ? el : null;

      if (isOpen) addListeners();
      else removeListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      removeListeners();
      window.__difyChatWin = null;
    };
  }, []);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.difyChatbotConfig = {
              token: 'ChqCgtUdTC3933er',
            }
          `,
        }}
      />
      <Script
        src="https://udify.app/embed.min.js"
        id="ChqCgtUdTC3933er"
        strategy="afterInteractive"
      />
      <style>{`
        #dify-chatbot-bubble-button {
          position: fixed !important;
          bottom: 100px !important;
          right: 20px !important;
          z-index: 9999 !important;
          background-color: #1D63FF !important;
        }
        #dify-chatbot-bubble-window {
          position: fixed !important;
          bottom: 90px !important;
          right: 80px !important;
          z-index: 10000 !important;
          width: 24rem !important;
          height: 40rem !important;
        }
        #dify-chatbot-bubble-root {
          position: static !important;
        }
      `}</style>
    </>
  );
}
