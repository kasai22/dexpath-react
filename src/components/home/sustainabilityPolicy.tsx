export default function SustainabilityPolicy() {
  const sections = [
    {
      title: "Environmental Sustainability",
      description: [
        "Energy-efficient robotic systems designed to minimize power consumption.",
        "Use of eco-friendly, recyclable, and biodegradable materials in manufacturing.",
        "Smart waste management through robots that reduce, reuse, and recycle materials.",
        "Reducing carbon footprint by optimizing delivery and swarm robots compared to traditional methods.",
      ],
      icon: "🌱",
    },
    {
      title: "Economic Sustainability",
      description: [
        "Developing cost-efficient robots that are affordable to maintain.",
        "Creating scalable business models to ensure sustainable growth.",
        "Designing durable and reliable machines with longer lifespans to reduce waste.",
      ],
      icon: "💰",
    },
    {
      title: "Social Sustainability",
      description: [
        "Building assistive robotics such as robotic hands for disabled individuals.",
        "Focusing on job augmentation rather than elimination, positioning robots as companions and co-workers.",
        "Enhancing urban living with swarm robots that create cleaner, smarter, and healthier cities.",
      ],
      icon: "🤝",
    },
    {
      title: "DEXPATH's Commitment",
      description: [
        "DEXPATH is dedicated to integrating sustainability across all aspects of our innovation. We continuously strive to balance technology with responsibility, ensuring that our advancements lead to a more resilient, inclusive, and sustainable future.",
      ],
      icon: "⚡",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          DEXPATH Sustainability Policy
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          At DEXPATH, sustainability is at the core of our mission to redefine
          robotics. We believe that advanced technology should not only enhance
          human life but also contribute positively to the environment and
          society. This policy outlines our commitment to environmental,
          economic, and social sustainability as we innovate in the robotics
          industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-neutral-900 p-8 rounded-2xl shadow-lg text-center flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{section.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <ul className="text-gray-400 text-sm space-y-2 mb-6 text-left">
              {section.description.map((line, i) => (
                <li key={i}>- {line}</li>
              ))}
            </ul>
            <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
