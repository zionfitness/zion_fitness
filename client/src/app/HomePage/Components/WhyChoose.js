"use client";
import React from "react";
import { motion } from "motion/react";
import {
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Puzzle,
  User,
  ArrowLeftRight,
} from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "15+ Years Industry Experience",
    desc: "Experience and expertise to help you choose fitness equipment that suits your requirements.",
  },
  {
    icon: Globe2,
    title: "Wide Range of Equipment",
    desc: "Multiple models across treadmills, ellipticals, spin bikes, exercise bikes and home-gym equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Performance-Focused Equipment",
    desc: "From entry-level home workouts to high-performance training.",
  },
  {
    icon: Puzzle,
    title: "Warranty Support",
    desc: "Reliable warranty support for greater peace of mind after your purchase.",
  },
  {
    icon: User,
    title: "Expert Sales Team",
    desc: "Get guidance in choosing the right equipment based on your workout goals, space and usage.",
  },
  {
    icon: ArrowLeftRight,
    title: "Try Before You Buy",
    desc: "Explore the equipment and make a more informed purchase decision.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const WhyChoose = () => {
  return (
    <section className="bg-[#F6F3F2] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-3">
            Why Choose Zion Fitness
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            Engineered for Performance. Backed by Trust.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 text-center"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="flex flex-col items-center px-1"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Icon className="text-[#F28C28]" size={20} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-xs sm:text-sm font-regular text-[#6B7280] leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;