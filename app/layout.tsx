import type { Metadata } from "next";
import { Noto_Sans_KR, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import { ScoreProvider } from "./sarang-test/context/ScoreContext";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import { Analytics } from '@vercel/analytics/next';

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SARANG TEST",
  description: "나에게 맞는 사역국을 찾아보세요",
  openGraph: {
    title: "SARANG TEST",
    description: "나에게 맞는 사역국을 찾아보세요",
    images: ["/sarang-test-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
      <body className={`${notoSans.variable} ${blackHanSans.variable} antialiased`}>
        <div className="font-sans w-full flex flex-col items-center justify-center bg-[url('/sarang-bg.png')] bg-cover bg-center">
          <ScoreProvider>{children}</ScoreProvider>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
