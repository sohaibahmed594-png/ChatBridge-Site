import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center pt-32 pb-20 overflow-hidden" id="hero">
      {/* Radial glow behind content */}
      <div className="absolute inset-0 z-0" style={{background: 'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(52,211,153,0.06) 0%, transparent 70%)'}}></div>
      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#34d39310_1px,transparent_1px),linear-gradient(to_bottom,#34d39310_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,#000_60%,transparent_100%)] opacity-25"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Switch AI. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Keep the thread.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The secret weapon for AI power users. Seamlessly move conversations between ChatGPT, Claude, and Gemini without losing context.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://chromewebstore.google.com/detail/hagmbackefkfehejdegdjbajppfhjmhc?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/8 hover:border-primary/80 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Download Extension
          </a>
          <span className="text-sm text-white/35">Free for Chrome & Brave</span>
        </motion.div>
      </div>
    </section>
  );
}
