import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20">
      <main className="flex flex-col items-center">
        <Image
          className="justifty-self-center mt-30"
          src="/genlogo.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center flex-col m-10">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] font-bold text-lg h-10 px-6"
            href="/quiz"
          >
            Start Quiz
          </Link>
          <Link
            className="rounded-full border border-solid bg-red-600 border-transparent transition-colors flex items-center justify-center hover:bg-red-400 hover:border-transparent font-bold text-lg h-10 px-6 w-full"
            href="/docs"
          >
            Read the Docs
          </Link>
        </div>
      </main>
    </div>
  );
}
