import React from "react";
import { motion } from "framer-motion";
import { FileText, Copy, ArrowRightLeft, Layers } from "lucide-react";

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Instant Summaries",
    description: "Automatically condenses long chat histories so you don't overwhelm the next AI with unnecessary tokens."
  },
  {
    icon: <Copy className="w-6 h-6" />,
    title: "One-Click Copy",
    description: "Grab the entire context of your conversation instantly. No more tedious manual highlighting and scrolling."
  },
  {
    icon: <ArrowRightLeft className="w-6 h-6" />,
    title: "Paste & Continue",
    description: "Inject your copied context into a new chatbot and pick up exactly where you left off."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Universal Support",
    description: "Works seamlessly across ChatGPT, Claude, Gemini, Perplexity, and local LLM interfaces."
  }
];

export default function Features() {
  return (
    <section className="py-28 relative" id="features">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Power features for power users.</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group bg-card border border-white/[0.06] p-8 rounded-2xl hover:border-white/[0.12] transition-colors duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-primary mb-6 border border-white/[0.08]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/55 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
