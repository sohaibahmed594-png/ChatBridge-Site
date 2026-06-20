import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "100,000+", label: "Tokens saved per session" },
  { value: "3", label: "AI platforms supported" },
  { value: "4", label: "Smart compression modes" },
];

export default function StatsBar() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className={`text-4xl md:text-5xl font-bold tracking-tight ${i === 0 ? "text-primary" : "text-white"}`}>
                {stat.value}
              </span>
              <span className="text-sm text-white/40 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
