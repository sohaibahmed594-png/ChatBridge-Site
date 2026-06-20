import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Briefcase, Scissors } from "lucide-react";

const modes = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Quick Mode",
    description: "30 clean summary points. Fast and scannable. Perfect for everyday AI chats."
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Deep Mode",
    description: "100 detailed points covering every decision, detail and reference. Perfect for long research or coding sessions."
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Business Mode",
    description: "Professional brief with topic, decisions made, action items, key details and next steps. Perfect for work chats."
  },
  {
    icon: <Scissors className="w-5 h-5" />,
    title: "Custom Mode",
    description: "Have a messy mixed chat? Paste only the parts YOU want summarized. You are in full control."
  }
];

export default function Modes() {
  return (
    <section className="py-28 relative" id="modes">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">One Extension. Four Powerful Modes.</h2>
          <p className="text-white/45 text-lg">Choose how you want your conversation summarized.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              className="group bg-card border border-white/[0.06] p-8 rounded-2xl hover:border-white/[0.12] transition-colors duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary">{mode.icon}</span>
                <h3 className="text-xl font-bold text-white">{mode.title}</h3>
              </div>
              <p className="text-white/55 leading-relaxed">{mode.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
