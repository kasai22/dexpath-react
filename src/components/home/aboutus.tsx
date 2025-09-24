"use client";

import { FaStar, FaLightbulb, FaBolt } from "react-icons/fa";

export default function AboutUs() {
  const items = [
    {
      icon: <FaStar className="text-3xl text-white" />,
      title: "Vision",
      text: "To redefine robotics by creating intelligent, sustainable, and human-centered robotic systems that seamlessly integrate into everyday life. We envision a future where robots not only enhance efficiency and innovation but also protect the environment, empower people, and transform cities into smarter, cleaner, and more resilient communities.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-white" />,
      title: "Mission",
      text: "To innovate in robotics and AI by building systems that are efficient, adaptive, and future-ready. To integrate sustainability into every stage of design, development, and deployment. To deliver robotics solutions that improve human life — whether through assistance, companionship, or productivity. To pioneer smart city ecosystems powered by swarm intelligence and advanced robotics.",
    },
    {
      icon: <FaStar className="text-3xl text-white" />,
      title: "Core Values",
      text: "**Innovation**: Continuously pushing boundaries in robotics and AI. **Sustainability**: Designing eco-conscious technologies for long-term impact. **Human-Centric Design**: Creating robots that support, empower, and connect with people. **Integrity**: Building trust through ethical practices and responsible innovation. **Collaboration**: Partnering with communities, industries, and innovators to shape the future.",
    },
    {
      icon: <FaBolt className="text-3xl text-white" />,
      title: "Strategic Goals",
      text: "Launch next-generation delivery and companion robots that integrate seamlessly into daily life. Build robotics platforms that contribute to smart city infrastructure and environmental sustainability. Scale DEXPATH as a global leader in sustainable robotics, recognized for innovation and impact. Ensure accessibility and inclusivity in all our robotic solutions to serve diverse communities.",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-gray-300 py-16 px-6 lg:px-[7.5rem]">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Us</h2>
        <p className="mt-4 text-gray-400">
          Founded in 2025, specializing in swarm intelligence, cognitive neural
          schema innovation, and sustainable robotics.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-[#141515] rounded-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-gray-600 transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed">{item.text}</p>
            <button className="mt-6 flex items-center gap-2 px-5 py-2 bg-black rounded-full border border-gray-700 text-sm hover:bg-gray-900 transition">
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* Strategic Goals (Full Width) */}
      <div className="mt-10 max-w-3xl mx-auto">
        <div className="bg-[#141515] rounded-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-gray-600 transition">
          <div className="mb-4">{items[3].icon}</div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {items[3].title}
          </h3>
          <p className="text-sm leading-relaxed">{items[3].text}</p>
          <button className="mt-6 flex items-center gap-2 px-5 py-2 bg-black rounded-full border border-gray-700 text-sm hover:bg-gray-900 transition">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}
