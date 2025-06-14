"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="min-h-screen bg-[#fff4e6]">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 pb-30">
          <h2 className="text-2xl text-center font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            개발팀 소개
          </h2>
          <div className="flex flex-col items-center text-center">
            <Image src="/light-code.png" alt="LightCode Logo" width={200} height={200} className="mb-8" />

            <h1 className="text-4xl md:text-6xl py-4 font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              LightCode
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 italic mb-8">&quot;코드로 세상에 빛을 비추자&quot;</p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-6 mb-12">
                <h2 className="text-xl font-semibold text-blue-900 mb-3">기반 말씀</h2>
                <p className="text-gray-700">
                  &quot;너희는 세상의 빛이라 산 위에 있는 동네가 숨겨지지 못할 것이요&quot;
                  <span className="block text-sm mt-1">- 마태복음 5장 14절</span>
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <div className="bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    팀 소개
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed break-keep">
                    LightCode(라이트코드)는 마태복음 5장 14절 말씀과 개발 코드를 결합한 크리스천 개발팀입니다. IT 기술로
                    교회와 세상을 섬기는 것을 목표로 하며, 각자의 달란트를 통해 섬기고 실력이 아닌 주님을 바라보는 팀을
                    지향합니다.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-purple-50 backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    비전
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed break-keep">
                    IT 기술을 통해 복음을 전파하고 교회를 섬기는 것이 우리의 비전입니다. 기술의 발전이 더 많은 이들에게
                    복음을 전하는 도구가 되기를 소망합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="custom" className="w-full py-6" onClick={() => router.push("/sarang-test")}>
              사역국 찾기 테스트 하러가기
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
