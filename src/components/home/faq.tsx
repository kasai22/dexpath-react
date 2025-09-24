"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "What products does DEXPATH offer? Household cleaning bots, delivery robots, and mobility solutions.",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question:
        "How do I maintain the robots? Simple maintenance instructions with after-sales support.",
      answer: "",
    },
    {
      question:
        "Where can I buy them? Through the official site and authorized distributors.",
      answer: "",
    },
    {
      question:
        "Do products come with warranty? Yes, with service warranty & upgrade options.",
      answer: "",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Frequently <span className="text-gray-300">Asked Questions</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Got questions? We&apos;ve got answers. Check out our frequently asked
          questions section to find valuable insights into our processes,
          pricing, and more. Transparency is at the core of our client
          interactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-neutral-800 pb-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                {openIndex === index && faq.answer && (
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                )}
              </div>
              <button
                onClick={() => toggleFAQ(index)}
                className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full"
              >
                {openIndex === index ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
