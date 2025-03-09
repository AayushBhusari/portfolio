"use client";

import { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Education from "@/Components/Education";
import Projects from "@/Components/Projects";
import Faq from "@/Components/Faq";
import Navbar from "../Components/Navbar";
// import Link from "next/link";
import { SparklesCore } from "@/Components/ui/sparkles";

export default function Home() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setShowParticles(true);
  }, []);

  return (
    <div className="">
      {showParticles && (
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-dvh"
            particleColor="#FFFFFF"
          />
        </div>
      )}
      <Navbar />
      <Hero />
      <div className="px-5">
        <br />
        <hr />
        <About />
        <hr />
        <br />
        <Education />
        <hr />
        <br />
        <Projects />
        <br />
        <hr />
        <br />
        <Faq />
        <br />
        <hr />
        <br />
      </div>
    </div>
  );
}
