"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is installation included with the purchase?",
    answer:
      "Installation and setup availability may vary depending on the equipment model and purchase. Please contact our team for details.",
  },
  {
    question: "Can I try the equipment before purchasing?",
    answer:
      "Yes. Visit the Zion Fitness Equipment showroom in North Chennai to explore and experience the available equipment before making your decision.",
  },
  {
    question: "How do I choose the right equipment?",
    answer:
      "Our team can help you choose based on your workout goals, available space, usage and preferred equipment type.",
  },
  {
    question: "Is warranty support available?",
    answer:
      "Warranty support is available for eligible equipment. Contact our team for model-specific warranty details.",
  },
  {
    question: "Do you provide after-sales support?",
    answer:
      "Yes. Zion Fitness Equipment Store provides after-sales support for your fitness equipment requirements.",
  },
  {
    question: "Do you have equipment for both home and commercial use?",
    answer:
      "Yes. Our range includes fitness solutions suitable for both home workout spaces and commercial fitness environments.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#FFFFFF] border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12"
        >
          Common FAQ Questions
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                className="bg-[#F6F3F2] rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left"
                >
                  <span className="text-sm sm:text-base font-regular text-[#1B1B1C]">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown className="text-[#1B1B1C]" size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-7 pb-5 sm:pb-6 text-sm sm:text-base text-[#6B7280] font-regular leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;