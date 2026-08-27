"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const variantClasses = {
  solid:
    "bg-[#F28C28] hover:bg-[#d9791d] text-white border border-[#F28C28]",
  outline:
    "bg-transparent hover:bg-white/10 text-white border border-white/80 hover:border-white",
  dark: "bg-[#F0EDED]/90 hover:bg-[#F0EDED] text-[#1B1B1C] border border-[#1A1A1A]",
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
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutCTA = ({
  heading = "Ready to Build Your Fitness Space?",
  description = "Visit our premium showroom in North Chennai to experience our world-class collection firsthand.",
  backgroundImage,
  overlayClassName = "bg-black/70",
  buttons = [
    { label: "Visit Showroom", href: "/contact-us", variant: "solid" },
    { label: "Contact Us", href: "/contact-us", variant: "outline" },
  ],
}) => {
  const visibleButtons = buttons.slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* Background image + overlay */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 text-center"
      >

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-xl mx-auto"
        >
          {heading}
        </motion.h2>

        {description && (
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#E5E2E1] font-regular leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {description}
          </motion.p>
        )}

        {visibleButtons.length > 0 && (
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
          >
            {visibleButtons.map(({ label, href, variant = "solid", icon: Icon }) => (
              <a
                key={label}
                href={href}
                className={`inline-flex items-center justify-center gap-2 text-sm font-regular uppercase tracking-wide px-7 py-4 rounded-lg transition-colors duration-200 ${
                  variantClasses[variant] || variantClasses.solid
                }`}
              >
                {label}
                {Icon ? <Icon size={16} /> : variant === "solid" ? <ArrowRight size={16} /> : null}
              </a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default AboutCTA;