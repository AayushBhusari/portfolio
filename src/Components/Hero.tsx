"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const hubotFont = localFont({
  src: "../fonts/HubotSans_Condensed-Bold.ttf",
});

const Hero: React.FC = () => {
  return (
    <div
      className={`h-[85dvh] px-5 flex justify-center items-center text-center ${hubotFont.className}`}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around lg:justify-between w-full max-w-7xl mx-auto gap-6 ">
        {/* Left Section (Image) */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%] flex justify-center">
          <Image
            src="/imgs/photo1.jpg"
            alt="Event poster for Techotsav"
            height={900}
            width={600}
            className="rounded-lg shadow-lg w-full  z-9999"
          />
        </div>

        {/* Right Section (Text) */}
        <div className="max-w-3xl text-center lg:text-left">
          <div className="lg:text-4xl">Hello there, I&apos;m</div>
          <motion.h1
            className="lg:text-[7rem] text-[2rem] sm:text-5xl md:text-7xl lg:text-8xl text-green-600 cursor-default select-none"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Eshank Ryshabh
          </motion.h1>
          <motion.p
            className="text-[1rem] sm:text-xl md:text-2xl text-emerald-300 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            I’m a technology enthusiast, problem-solver, and team leader with a
            passion for AI, robotics, and embedded systems. Currently in my
            second year of college, I’ve been diving deep into the world of
            machine learning, computer vision, and automation—building cool
            projects that bring AI-powered solutions to life.
          </motion.p>
          <motion.div
            className="text-xl sm:text-3xl md:text-5xl font-sans mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/photo1.jpg"; // Directly reference the file in the public folder
                link.download = "photo1.jpg"; // Ensure it has the correct extension
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600  font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out
             border border-green-400 hover:from-emerald-600 hover:to-green-500 hover:shadow-lg 
             active:scale-95"
            >
              <span className="absolute inset-0 bg-amber-700 opacity-10 transition-opacity duration-300 hover:opacity-0"></span>
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
