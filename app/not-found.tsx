"use client";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full mx-auto min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-xl md:text-4xl font-medium mb-2 md:mb-4 text-slate-700">404</h2>
      <h1 className="font-mono text-3xl md:text-6xl font-medium mb-10 text-slate-800">페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-600 mb-8 text-center">요청하신 페이지가 존재하지 않습니다.</p>
      <Button
        className="text-lg px-10 py-6 bg-[var(--color-primary)] text-white rounded-3xl"
        onClick={() => window.history.back()}
      >
        이전 페이지로 돌아가기
      </Button>
    </div>
  );
}
