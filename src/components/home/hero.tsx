"use client";

import Image from "next/image";

export default function DexPathSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0F0F10] px-6 py-12 text-white">
      <div className="grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left: Product Image */}
        <div className="flex justify-center">
          <Image
            src="/hero.png" // replace with your image path
            alt="DexPath Product"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          {/* DexPath Title with Shadow */}
          <h1 className="relative mb-6 text-5xl font-bold leading-tight">
            <Image
              className="absolute -top-20 left-10"
              width={500}
              height={120}
              src="/DexpathShadow.png" // replace with your logo path
              alt="DexPath Logo"
            />
            <span className="relative z-10">Dxpath</span>
          </h1>

          {/* Overview */}
          <div>
            <h2 className="mb-3 text-lg font-semibold">Overview</h2>
            <p className="max-w-lg text-gray-300">
              Engineering the Future of Robotics – Smart, Secure & Sustainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
