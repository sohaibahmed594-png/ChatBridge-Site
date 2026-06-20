import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Feedback() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section className="py-32" id="feedback">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          className="bg-card border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Request a feature</h2>
            <p className="text-white/60">Help us make ChatBridge even better. We read every message.</p>
          </div>

          {status === "success" ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
                <Send className="w-8 h-8 ml-1" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-primary">We'll be in touch soon.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm text-white/40 hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20 resize-none"
                  placeholder="I'd love to see support for..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                disabled={status === "submitting"}
                type="submit" 
                className="w-full bg-primary text-primary-foreground font-bold rounded-lg px-4 py-4 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>Send Message <Send className="w-4 h-4 ml-1" /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
