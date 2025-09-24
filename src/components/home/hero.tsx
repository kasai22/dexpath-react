"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full px-[7.5rem] min-h-screen flex items-center bg-[#0B0B0B] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-16">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Engineering the Future of Robotics –{" "}
            <span className="text-gray-400">Smart, Secure & Sustainable.</span>
          </h1>

          <div className="flex gap-4 pt-4">
            <button className="rounded-full bg-white text-black font-medium px-6 py-3 shadow hover:bg-gray-200 transition">
              Explore Our Projects →
            </button>
            <button className="rounded-full bg-black border border-gray-700 px-6 py-3 text-gray-300 hover:bg-gray-900 transition">
              Join the Future with DEXPATH →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/dexpath-robot.png" // replace with your image path in /public
            alt="Dexpath Robot"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
