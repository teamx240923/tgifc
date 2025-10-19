import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cream">
      <Image
        src="/tgifc-logo.svg"
        alt="TGIFC Logo Loader"
        width={150}
        height={150}
        className="loader-bounce"
      />
      <p className="mt-6 text-lg font-semibold text-[#1C1C1C]">
        Loading The Great Indian Fitness Carnival 2026...
      </p>
    </div>
  );
}
