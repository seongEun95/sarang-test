"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/sarang-test");
  }, []);

  return (
    <>
      <div className="w-full text-center h-screen flex items-center justify-center">
        <Button variant="custom" className="w-full max-w-md py-6" onClick={() => router.push("/sarang-test")}>
          사역국 찾기 테스트 하러가기
        </Button>
      </div>
    </>
  );
}
