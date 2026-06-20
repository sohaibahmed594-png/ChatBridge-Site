import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00ff881a_1px,transparent_1px),linear-gradient(to_bottom,#00ff881a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ChatBridge v1.0 is live
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Switch AI. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Keep the thread.</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The secret weapon for AI power users. Seamlessly move conversations between ChatGPT, Claude, and Gemini without losing context.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://chrome.google.com/webstore/detail/chat-bridge"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,255,136,0.3)] hover:shadow-[0_0_60px_rgba(0,255,136,0.5)] flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Download Extension
          </a>
          <span className="text-sm text-white/40">Free for Chrome & Brave</span>
        </motion.div>
      </div>
    </section>
  );
}
