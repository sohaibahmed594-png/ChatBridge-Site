import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Open any chatbot",
    description: "Start or continue a conversation in ChatGPT, Claude, or Gemini."
  },
  {
    num: "02",
    title: "Click the Bridge",
    description: "Hit the ChatBridge extension icon in your browser toolbar."
  },
  {
    num: "03",
    title: "Copy the context",
    description: "ChatBridge automatically summarizes and copies the conversation state."
  },
  {
    num: "04",
    title: "Switch & Paste",
    description: "Open your target AI, paste the payload, and keep the thread alive."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-white/[0.015]" id="how-it-works">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How it works</h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">Four simple steps to move your context across the AI ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-1/2 w-full h-[1px] bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary font-semibold text-sm mb-6">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/45">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
