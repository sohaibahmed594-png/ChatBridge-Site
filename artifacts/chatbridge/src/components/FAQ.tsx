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
    <section className="py-28" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Frequently asked questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-card border border-white/[0.06] rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-base font-medium text-white/90">{faq.q}</span>
                <span className="flex-shrink-0 w-7 h-7 rounded-md bg-white/[0.05] flex items-center justify-center text-white/40">
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
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
                    <div className="px-6 pb-5 text-white/55 leading-relaxed border-t border-white/[0.05] pt-4">
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
