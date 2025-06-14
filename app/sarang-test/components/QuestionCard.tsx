"use client";

import { motion } from "framer-motion";
type QuestionCardProps = {
  question: string;
  options: { text: string; scores: Record<string, number> }[];
  onSelect: (scoresToAdd: Record<string, number>) => void;
};

export default function QuestionCard({ question, options, onSelect }: QuestionCardProps) {
  return (
    <div className="w-full max-w-md p-2 py-6 rounded-2xl shadow-lg backdrop-blur-xl bg-white/10">
      <h2 className="text-lg md:text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {question}
      </h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="w-full p-3 bg-white/30 backdrop-blur-md border-2 border-white rounded-xl cursor-pointer"
            onClick={() => onSelect(option.scores)}
          >
            <span className="text-slate-500 font-medium text-sm break-keep leading-[1]">{option.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
