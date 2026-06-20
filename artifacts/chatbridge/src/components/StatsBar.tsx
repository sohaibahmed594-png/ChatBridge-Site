import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "100,000+", label: "Tokens saved per session" },
  { value: "3", label: "AI platforms supported" },
  { value: "4", label: "Smart compression modes" },
];

export default function StatsBar() {
  return (
    <div className="border-y border-primary/20 bg-primary/[0.03]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="py-8 flex flex-col items-center justify-center text-center gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm text-white/50 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
