import React from "react";
import { Terminal } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-8 mt-auto">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-bold text-white tracking-tight">ChatBridge</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#") && link.href !== "#") {
                  e.preventDefault();
                  scrollTo(link.href);
                }
              }}
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-white/30">© 2026 Chat Bridge. All rights reserved.</p>
      </div>
    </footer>
  );
}
