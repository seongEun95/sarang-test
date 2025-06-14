"use client";

import ministries from "@/app/sarang-test/data/ministries.json";
import { useScore } from "@/app/sarang-test/hooks/useScore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ShareButton from "../components/ShareButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
import MyTypeText from "../components/MyTypeText";
import Footer from "../components/Footer";

export default function ResultPage() {
  const router = useRouter();
  const allTeams = ministries.flatMap((m) => m.teams);
  const [isLoading, setIsLoading] = useState(true);
  const {
    state: { scores },
    dispatch,
  } = useScore();
  const teamScores = allTeams.map((team) => ({
    team,
    score: scores[team.code] || 0,
  }));
  const sortedTeams = teamScores.sort((a, b) => b.score - a.score);
  const top = sortedTeams[0].team;
  const topCategory = ministries.find((m) => m.teams.some((team) => team.id === top.id))?.category;

  const topImg = top["result-img"];

  const recommendations = sortedTeams
    .filter((item) => item.team.code !== top.code)
    .slice(0, 2)
    .map((item) => {
      const category = ministries.find((m) => m.teams.some((team) => team.id === item.team.id))?.category;
      return { ...item.team, category };
    });

  const reTest = () => {
    dispatch({ type: "RESET" });
    router.push("/sarang-test");
  };

  console.log(
    "팀별 점수 및 순위:\n",
    sortedTeams.map((item, index) => `${index + 1}위: ${item.team.name} (${item.score}점)`).join("\n")
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-8 bg-[#F2EEEB] relative"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <div className="text-center">
            <motion.p
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              당신은... <MyTypeText topCategory={topCategory} /> 유형
            </motion.p>
            <p className="text-xl font-bold text-slate-600 mb-3">청년부의 영적 성장! 나에게 맡겨!</p>
          </div>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="relative rounded-2xl overflow-hidden mb-12"
          >
            <Image
              src={`/result-img/${topImg}`}
              alt="결과 이미지"
              className="w-full h-auto object-contain"
              width={582}
              height={874}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="text-xl font-light relative whitespace-pre-line">
              <span className="absolute block h-auto -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-md group-hover:blur rounded-lg"></span>
              <span className="relative w-full block whitespace-pre-line">
                <span className="font-medium  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  &quot;{top.name}&quot;
                </span>
                의&nbsp;
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 bg-[length:200%] animate-gradient">
                  에이스
                </span>
                가 될 거예요
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-2xl mb-8 border-2 border-white p-2"
          >
            <h3 className="text-lg font-medium mb-4 text-center text-slate-800">여긴 어때? 지원만 해도 합격 각</h3>
            <div className="grid grid-cols-2 gap-4">
              {recommendations.map((m) => (
                <div key={m.id} className="p-2 py-4 rounded-xl shadow-sm text-center">
                  <div className="text-xs text-blue-500/80 mb-1">{m.category}</div>
                  <div className="font-medium text-md">{m.name}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="space-y-3"
          >
            <Button
              variant="custom"
              className="w-full h-auto py-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-slate-800 rounded-md"
              onClick={reTest}
            >
              받아드릴 수 없어!!
              <br />
              테스트 다시하기
            </Button>
            <Button
              variant="custom"
              className="w-full h-auto py-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-slate-800 rounded-md"
            >
              <a className="block w-full" href={`/result-img/${topImg}`} download>
                아멘! 순종하기
                <br />
                이미지 저장하기
              </a>
            </Button>
            <ShareButton />
          </motion.div>
        </motion.div>
        <Footer />
      </motion.main>
    </>
  );
}
