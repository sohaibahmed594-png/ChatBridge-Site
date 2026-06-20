import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <Terminal className="w-6 h-6" />
          <span className="font-bold text-xl tracking-tight text-white">ChatBridge</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("features")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</button>
          <button onClick={() => scrollTo("how-it-works")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">How it works</button>
          <button onClick={() => scrollTo("feedback")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Feedback</button>
        </nav>
        <div>
          <a
            href="https://chrome.google.com/webstore/detail/chat-bridge"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/20 hover:border-primary/50 transition-all shadow-[0_0_15px_rgba(0,255,136,0.1)] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
          >
            Install Extension
          </a>
        </div>
      </div>
    </motion.header>
  );
}
