import React from "react";
import { motion } from "framer-motion";
import { Star, Chrome } from "lucide-react";

const reviews = [
  {
    name: "James R.",
    avatar: "JR",
    rating: 5,
    date: "Jun 2025",
    title: "Finally, a solution to AI context loss",
    body: "I've been using ChatGPT and Claude side by side for months and the context switching was killing my workflow. ChatBridge solves this completely. One click and everything transfers over perfectly."
  },
  {
    name: "Sarah M.",
    avatar: "SM",
    rating: 5,
    date: "Jun 2025",
    title: "Essential tool for AI power users",
    body: "Been using this for two weeks and I can't imagine going back. The Deep Mode is insane — it captures every single detail from long research sessions. Switching from Claude to ChatGPT mid-project is now seamless."
  },
  {
    name: "David K.",
    avatar: "DK",
    rating: 5,
    date: "May 2025",
    title: "Saves so much time",
    body: "Business Mode is perfect for my use case. I can hand off a project brief to a different AI assistant and it picks up exactly where I left off. Clean, fast, no bloat."
  },
  {
    name: "Priya T.",
    avatar: "PT",
    rating: 5,
    date: "May 2025",
    title: "Works exactly as advertised",
    body: "Simple, effective, free. I was skeptical but after the first use I was sold. Custom Mode lets me cherry-pick exactly which parts of a conversation to carry over. Brilliant."
  },
  {
    name: "Alex W.",
    avatar: "AW",
    rating: 5,
    date: "Jun 2025",
    title: "Should be built into every browser",
    body: "The fact that nothing leaves my device makes this a no-brainer. I use three different AIs daily depending on the task and this is the missing piece that ties them all together."
  },
  {
    name: "Nina L.",
    avatar: "NL",
    rating: 5,
    date: "Jun 2025",
    title: "Game changer for researchers",
    body: "I use AI heavily for literature reviews and often need to cross-reference outputs across models. ChatBridge makes the handoff instant. The summaries are surprisingly accurate."
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "fill-primary text-primary" : "fill-white/10 text-white/10"}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-32 overflow-hidden" id="reviews">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Loved by <span className="text-primary">AI power users.</span>
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-white/60 text-sm font-medium">5.0 · Chrome Web Store</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/30 border border-white/10 rounded-full px-2.5 py-1">
                <Chrome className="w-3 h-3" />
                Verified reviews
              </span>
            </div>
          </div>
          <a
            href="https://chromewebstore.google.com/detail/hagmbackefkfehejdegdjbajppfhjmhc?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary/70 hover:text-primary transition-colors underline underline-offset-4 whitespace-nowrap"
          >
            View all on Chrome Web Store →
          </a>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="bg-card border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{review.name}</p>
                  <p className="text-xs text-white/35">{review.date}</p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <StarRow count={review.rating} />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold text-white/90 mb-1.5">{review.title}</p>
                <p className="text-sm text-white/50 leading-relaxed">{review.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
