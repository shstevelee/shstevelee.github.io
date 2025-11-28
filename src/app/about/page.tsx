"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-industrial-black text-safety-yellow py-32 px-8 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-b-4 border-safety-yellow pb-8 mb-12"
        >
          <h1 className="font-oswald text-7xl md:text-8xl">TECHNICAL SPECS</h1>
          <p className="font-mono mt-4 text-xl">
            Model No. SEUNGHYEOK-LEE-V20.0
          </p>
        </motion.div>

        {/* The "Table" of Skills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-8 gap-x-12 font-mono"
        >
          {/* Row 1: Education */}
          <div className="text-white opacity-50">EDUCATION</div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              B.S. Electrical and Computer Engineering
            </h3>
            <p className="mb-2">Carnegie Mellon University, 2028</p>
            <ul className="list-disc list-inside opacity-80">
              <li>Interest: Memory and Post Von Neumann Architectures</li>
              <li>GPA: 4.0/4.0</li>
            </ul>
          </div>

          {/* Row 2: Hard Skills */}
          <div className="text-white opacity-50">HARDWARE_SKILLS</div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Xilinx Vivado",
              "Verilog/VHDL",
              "Probe Station",
              "Oscilloscopes and VNA",
              "Soldering",
              "GPIB & SCPI",
            ].map((skill) => (
              <div
                key={skill}
                className="border border-safety-yellow p-2 text-center text-sm hover:bg-safety-yellow hover:text-black transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Row 3: Software */}
          <div className="text-white opacity-50">SOFTWARE_STACK</div>
          <div className="text-lg">
            C/C++, Python, MATLAB, Java, HTML, CSS, Next.js
          </div>

          {/* Row 4: Contact */}
          <div className="text-white opacity-50">INPUT_OUTPUT</div>
          <div className="flex gap-6 text-xl underline decoration-2 underline-offset-4">
            <a
              href="https://github.com/shstevelee"
              className="hover:text-white"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/seunghyeok-lee/"
              className="hover:text-white"
            >
              LINKEDIN
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
