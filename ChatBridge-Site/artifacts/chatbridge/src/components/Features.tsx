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
    <section className="py-32 relative" id="features">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Power features for <br/><span className="text-primary">power users.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
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
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
