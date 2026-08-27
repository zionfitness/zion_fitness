"use client";
import React from "react";
import { motion } from "motion/react";
import { Compass, Settings, Wrench } from "lucide-react";

const guarantees = [
  {
    icon: Compass,
    title: "Lifetime Frame",
    desc: "Structural integrity of the main frame and all weldments for the lifetime of the original owner.",
    highlight: false,
  },
  {
    icon: Settings,
    title: "5 Year Parts",
    desc: "Comprehensive coverage for pulleys, bearings, guide rods, and weight stacks against manufacturing defects.",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Professional Care",
    desc: "Access to our global network of certified technicians for annual maintenance and inspections.",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Guaranteed = () => {
  return (
    <section className="bg-[#F6F3F2] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            QUALITY & RELIABILITY
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-regular">
            We offer a diverse range of fitness equipment designed around
            performance, durability and reliable everyday use. From cardio
            machines to home-gym solutions, each product is selected to support
            your fitness journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {guarantees.map(({ icon: Icon, title, desc, highlight }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className={`relative bg-[#FCF9F8] rounded-2xl p-8 h-full ${
                highlight ? "sm:-translate-y-1" : ""
              }`}
            >
              <Icon
                className="text-[#B4551B] mb-6"
                size={26}
                strokeWidth={1.75}
              />

              <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3">
                {title}
              </h3>
              <p className="text-sm text-[#6B7280] font-regular leading-relaxed">
                {desc}
              </p>

              {highlight && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-[#B4551B]" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Guaranteed;
