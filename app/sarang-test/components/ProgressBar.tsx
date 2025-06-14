"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ stepNum, questions }: { stepNum: number; questions: { id: number }[] }) {
  return (
    <>
      <div className="max-w-md mx-auto h-2 bg-white rounded-full mb-2 shadow-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: `${((stepNum - 1) / questions.length) * 100}%` }}
          animate={{ width: `${(stepNum / questions.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>
      </div>
      <div className="text-md text-center text-gray-500">
        {stepNum} / {questions.length}
      </div>
    </>
  );
}
