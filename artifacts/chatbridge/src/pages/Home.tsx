import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import Modes from "@/components/Modes";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Modes />
        <HowItWorks />
        <FAQ />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}
