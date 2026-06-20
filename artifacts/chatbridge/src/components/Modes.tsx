import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Briefcase, Scissors } from "lucide-react";

const modes = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Mode",
    description: "30 clean summary points. Fast and scannable. Perfect for everyday AI chats."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Deep Mode",
    description: "100 detailed points covering every decision, detail and reference. Perfect for long research or coding sessions."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Business Mode",
    description: "Professional brief with topic, decisions made, action items, key details and next steps. Perfect for work chats."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Custom Mode",
    description: "Have a messy mixed chat? Paste only the parts YOU want summarized. You are in full control."
  }
];

export default function Modes() {
  return (
    <section className="py-32 relative" id="modes">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">One Extension. <span className="text-primary">Four Powerful Modes.</span></h2>
          <p className="text-white/50 text-lg">Choose how you want your conversation summarized.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              className="group bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 -mr-10 -mt-10"></div>

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                {mode.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{mode.title}</h3>
              <p className="text-white/60 leading-relaxed">{mode.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
