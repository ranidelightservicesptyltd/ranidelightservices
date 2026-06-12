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

      if (el) {
        el.classList.toggle("chat-fade-in", isOpen);
      }

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
        @keyframes chatFadeIn {
          0% { opacity: 0; transform: translateY(16px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes chatter {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        #dify-chatbot-bubble-button {
          position: fixed !important;
          bottom: 100px !important;
          right: 25px !important;
          z-index: 9999 !important;
          background: url('/chatbot-icon.png') center/cover no-repeat !important;
          border-radius: 50% !important;
          width: 60px !important;
          height: 60px !important;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25) !important;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease !important;
          animation: chatter 3s ease-in-out infinite !important;
        }

        #dify-chatbot-bubble-button:hover {
          transform: scale(1.12) !important;
          box-shadow: 0 6px 24px rgba(37, 99, 235, 0.4) !important;
          animation: none !important;
        }

        #dify-chatbot-bubble-button > div {
          display: none !important;
        }

        #dify-chatbot-bubble-window {
          position: fixed !important;
          bottom: 90px !important;
          right: 95px !important;
          z-index: 10000 !important;
          width: 24rem !important;
          max-width: calc(100vw - 7.5rem) !important;
          height: 40rem !important;
          max-height: calc(100vh - 120px) !important;
          border-radius: 1rem !important;
          overscroll-behavior: contain !important;
        }

        #dify-chatbot-bubble-window.chat-fade-in {
          animation: chatFadeIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
        }

        #dify-chatbot-bubble-root {
          position: static !important;
        }

        @media (max-width: 640px) {
          #dify-chatbot-bubble-button {
            bottom: 80px !important;
            right: 16px !important;
            width: 56px !important;
            height: 56px !important;
          }

          #dify-chatbot-bubble-window {
            bottom: 12px !important;
            right: 8px !important;
            left: 8px !important;
            width: auto !important;
            max-width: none !important;
            height: calc(100vh - 100px) !important;
            max-height: calc(100vh - 100px) !important;
            border-radius: 0.75rem !important;
          }
        }

        @media (max-width: 480px) {
          #dify-chatbot-bubble-window {
            height: calc(100vh - 95px) !important;
            max-height: calc(100vh - 95px) !important;
          }

          #dify-chatbot-bubble-button {
            bottom: 72px !important;
            right: 12px !important;
            width: 52px !important;
            height: 52px !important;
          }
        }

        @media (max-width: 640px) and (orientation: landscape) {
          #dify-chatbot-bubble-window {
            height: calc(100vh - 100px) !important;
            max-height: calc(100vh - 100px) !important;
            border-radius: 0.5rem !important;
          }

          #dify-chatbot-bubble-button {
            bottom: 16px !important;
            right: 16px !important;
            width: 48px !important;
            height: 48px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          #dify-chatbot-bubble-window {
            width: 22rem !important;
            height: 35rem !important;
          }
        }
      `}</style>
    </>
  );
}
