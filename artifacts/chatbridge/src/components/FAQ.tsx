import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Chat Bridge free?",
    a: "Yes completely free to install and use. No credit card needed."
  },
  {
    q: "Which AI platforms does it work on?",
    a: "Chat Bridge works on Claude, ChatGPT and Gemini."
  },
  {
    q: "Is my data safe?",
    a: "Yes. Your conversations never leave your device. Everything is processed locally and securely."
  },
  {
    q: "Do I need to create an account?",
    a: "No account needed. Works instantly after install."
  },
  {
    q: "What is a token?",
    a: "Tokens are units AI uses to process text. Fewer tokens means faster responses and less credit usage."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Frequently Asked <span className="text-primary">Questions</span></h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-base font-semibold text-white">{faq.q}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
