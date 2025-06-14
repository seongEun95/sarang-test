"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function IntroPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-2 mb-12"
      >
        <p className="text-2xl md:text-3xl font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          새 사람을 입으라
        </p>
        <p className="text-sm md:text-lg text-gray-600 font-medium tracking-wide">
          Serve As Renewed And New Generation
        </p>
        <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          S.A.R.A.N.G TEST
        </p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900"
      >
        새 사람, 새 사명
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="font-sans text-3xl md:text-6xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
      >
        나의 사역국/팀 찾기
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Link href="/sarang-test/question/1" className="mb-6 w-full max-w-md block">
          <Button className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg">
            테스트 시작하기
          </Button>
        </Link>
        <div className="space-y-2">
          <p className="text-sm md:text-lg text-gray-600 font-medium">
            &quot;당신은 어떤 모습으로 하나님을 섬기게 될까요?&quot;
          </p>
          <p className="text-sm md:text-lg text-gray-600 font-medium">나와 어울리는 사역국/팀을 추천해줘요</p>
        </div>
      </motion.div>
    </main>
  );
}
