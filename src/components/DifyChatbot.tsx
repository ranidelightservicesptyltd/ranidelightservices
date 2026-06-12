"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function DifyChatbot() {
  useEffect(() => {
    const applyStyles = () => {
      const btn = document.getElementById("dify-chatbot-bubble-button");
      const win = document.getElementById("dify-chatbot-bubble-window");
      const root = document.getElementById("dify-chatbot-bubble-root");
      if (btn) {
        btn.style.position = "fixed";
        btn.style.bottom = "100px";
        btn.style.right = "20px";
        btn.style.zIndex = "9999";
      }
      if (win) {
        win.style.position = "fixed";
        win.style.bottom = "90px";
        win.style.right = "20px";
        win.style.zIndex = "10000";
      }
      if (root) {
        root.style.position = "static";
      }
    };

    applyStyles();

    const observer = new MutationObserver(() => {
      applyStyles();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
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
