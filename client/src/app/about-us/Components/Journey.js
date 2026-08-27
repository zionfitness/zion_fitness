"use client";
import React from "react";
import { motion } from "motion/react";
import {
  MessageSquare,
  Move,
  Store,
  ShoppingCart,
  Truck,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "Understanding your workout goals, space and equipment requirements.",
  },
  {
    icon: Move,
    title: "Selection",
    desc: "Helping you choose the right equipment from our range.",
  },
  {
    icon: Store,
    title: "Showroom Visit",
    desc: "Experience and compare your preferred equipment in person.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase",
    desc: "A straightforward process to select and purchase your chosen equipment.",
  },
  {
    icon: Truck,
    title: "Installation",
    desc: "Get your equipment set up and ready for your workouts.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    desc: "Continued warranty and after-sales support for your equipment.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Journey = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-14 sm:mb-16"
        >
          The Zion Journey
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-6"
        >
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gray-100" />

          {steps.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center px-2"
            >
              <div className="w-16 h-16 rounded-full border border-[#914D00]/50 hover:border-2 border-[#914D00] bg-[#F0EDED] flex items-center justify-center mb-5 relative z-10">
                <Icon className="text-[#1A1A1A]" size={22} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-2">
                {title}
              </h3>
              <p className="text-sm text-[#554336] font-regular leading-relaxed max-w-[200px]">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;