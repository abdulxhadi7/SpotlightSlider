"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";

const items = [
  { title: "Card 1", description: "Image description", bg: "bg-gradient-to-tr from-sky-500 to-blue-800" },
  { title: "Card 2", description: "Image description", bg: "bg-gradient-to-tr from-green-500 to-emerald-800" },
  { title: "Card 3", description: "Image description", bg: "bg-gradient-to-tr from-rose-500 to-red-800" },
  { title: "Card 4", description: "Image description", bg: "bg-gradient-to-tr from-indigo-500 to-slate-800" },
  { title: "Card 5", description: "Image description", bg: "bg-gradient-to-tr from-cyan-500 to-blue-900" },
];

export default function ImageAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black overflow-hidden">
      {/* Background Blur */}
      <motion.div
        key={active}
        className={`absolute inset-0 transition-all duration-700 ${items[active].bg} blur-3xl opacity-30`}
      />

      {/* Accordion Container */}
      <div className="relative z-10 flex gap-3 px-6">
        {items.map((item, index) => {
          const isActive = index === active;

          return (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              layout
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`relative overflow-hidden rounded-[2rem] cursor-pointer flex items-end justify-start shadow-xl transition-all duration-700 ${
                isActive ? "w-[400px] opacity-100" : "w-[64px] opacity-40 hover:opacity-60"
              } h-[500px] ${item.bg}`}
            >
              {/* Placeholder content area */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 transition-all duration-700" />
              </div>

              {/* Text + Icon Content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 w-full p-6 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Camera className="text-white" size={20} />
                    </div>
                    <div>
                      <h2 className="text-white text-lg font-semibold tracking-wide">
                        {item.title}
                      </h2>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
