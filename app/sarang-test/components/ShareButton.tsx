"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/sarang-test`;

    // 클립보드 복사
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (e) {
      console.error(e);
      alert("링크 복사 실패");
    }
  };

  return (
    <div className="w-full">
      <Button variant="custom" className="w-full h-auto" onClick={handleShare}>
        너는 어때? <br />
        링크 복사
      </Button>

      {/* Toast 메시지 */}
      {copied && (
        <div className="fixed bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm px-4 py-2 rounded opacity-60 animate-fade-out">
          링크가 복사되었습니다!
        </div>
      )}
    </div>
  );
}
