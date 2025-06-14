"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function QuestionLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        style={{
          width: "100%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full mx-auto min-h-screen flex flex-col items-center justify-center px-4">
          <h2 className="text-3xl md:text-3xl font-medium mb-2 md:mb-4 text-slate-700">S.A.R.A.N.G TEST</h2>
          <h1 className="font-mono text-3xl md:text-4xl font-medium mb-6 text-slate-800">나의 사역국/팀 찾기</h1>
          <div className="w-full">{children}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
