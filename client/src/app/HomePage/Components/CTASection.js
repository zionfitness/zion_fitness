"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronRight,
  Send,
} from "lucide-react";

const iconMap = {
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronRight,
  Send,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CTASection = ({
  heading = "Ready to Build Your Fitness Space?",
  description = "Whether you're setting up a home workout space or equipping a commercial gym, Zion Fitness Equipment Store has a wide range of cardio and home-gym equipment to help you create the right setup.",

  primaryButton = {
    text: "Explore Equipment",
    href: "/equipment",
    icon: "ArrowRight",
  },

  secondaryButton = {
    text: "Contact Us",
    href: "/contact-us",
    icon: "Phone",
  },
}) => {
  const PrimaryIcon = iconMap[primaryButton.icon];
  const SecondaryIcon = iconMap[secondaryButton.icon];

  return (
    <section className="relative bg-[#F28C28] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3"
            >
              {heading}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-white/90 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0"
          >
            {/* Primary Button */}
            <a
              href={primaryButton.href}
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-black text-white text-sm font-regular uppercase tracking-wide px-6 py-3.5 transition-colors duration-200"
            >
              {primaryButton.text}
              {PrimaryIcon && <PrimaryIcon size={16} />}
            </a>

            {/* Secondary Button */}
            <a
              href={secondaryButton.href}
              className="inline-flex items-center justify-center gap-2 border border-white/80 hover:border-white text-white text-sm font-regular uppercase tracking-wide px-6 py-3.5 transition-colors duration-200"
            >
              {secondaryButton.text}
              {SecondaryIcon && <SecondaryIcon size={16} />}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;