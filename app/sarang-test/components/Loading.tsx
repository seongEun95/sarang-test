import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-[#F2EEEB] z-50"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="text-xl md:text-3xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 backdrop-blur-sm"
        >
          당신의 사역팀은? <br /> (두근두근)
        </motion.div>
        <motion.div
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative p-8 rounded-2xl"
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600/70 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-purple-600/70 border-t-transparent rounded-full animate-spin [animation-duration:1.5s]"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
