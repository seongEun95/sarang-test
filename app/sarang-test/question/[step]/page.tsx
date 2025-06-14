"use client";

import { notFound } from "next/navigation";
import questions from "@/app/sarang-test/data/questions.json";
import QuestionCard from "@/app/sarang-test/components/QuestionCard";
import { useScore } from "@/app/sarang-test/hooks/useScore";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "../../components/ProgressBar";
import ministries from "@/app/sarang-test/data/ministries.json";

type Question = {
  id: number;
  question: string;
  options: { text: string; scores: { [key: string]: number | undefined } }[];
};

export default function QuestionStepPage({ params }: { params: Promise<{ step: string }> }) {
  const { step } = use(params);
  const stepNum = parseInt(step);
  const question: Question = questions[stepNum - 1];
  const router = useRouter();
  const { dispatch, state } = useScore();

  useEffect(() => {
    const teamScores = Object.fromEntries(
      ministries.flatMap((category) => category.teams.map((team) => [team.name, state.scores[team.code] || 0]))
    );

    // 점수를 내림차순으로 정렬하여 출력
    const sortedScores = Object.entries(teamScores)
      .sort(([, a], [, b]) => b - a)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    console.log("현재까지의 팀별 점수:", sortedScores);
  }, [state]);

  const handleSelect = (scoresToAdd: Record<string, number>) => {
    dispatch({ type: "SELECT_OPTION", payload: scoresToAdd });
    const nextStep = stepNum + 1;

    if (nextStep > questions.length) {
      // 마지막 질문 이후 결과 페이지로 이동
      router.push(`/sarang-test/result`);
    } else {
      router.push(`/sarang-test/question/${nextStep}`);
    }
  };

  if (!question) return notFound();

  return (
    <main className="w-full mx-auto flex flex-col items-center justify-center">
      <div className="w-full mb-8 text-sm text-center text-gray-500">
        {/* progress bar */}
        <ProgressBar stepNum={stepNum} questions={questions} />
      </div>
      <QuestionCard
        question={question.question}
        options={question.options.map((option) => ({
          ...option,
          scores: Object.fromEntries(Object.entries(option.scores).filter(([, v]) => v !== undefined)) as Record<
            string,
            number
          >,
        }))}
        onSelect={handleSelect}
      />
    </main>
  );
}
