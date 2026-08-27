"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.about.hero;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={Img}
          alt="Zion Fitness commercial gym floor with premium equipment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0000009E] to-[#FFFFFF00]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 w-full py-16"
      >
        <div className="max-w-2xl">
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-regular uppercase tracking-[0.15em] text-[#F28C28] mb-4"
          >
            About Zion Fitness
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6"
          >
            15+ Years of Trusted
            <br />
            <span className="text-[#F28C28]">Experience in Fitness</span>
            <br />
            Equipment Solutions
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm font-regular text-[#E5E2E1CC] leading-relaxed mb-9 max-w-xl"
          >
            With over 15 years of industry experience, Zion Fitness Equipment
            Store helps customers create the right fitness setup with dependable
            equipment for home workouts and commercial fitness spaces. From
            treadmills and ellipticals to spin bikes and home gyms, explore a
            range designed around performance, durability and everyday fitness
            needs.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9791d] text-white text-sm font-regular uppercase tracking-wide px-7 py-4 rounded-lg transition-colors duration-200"
            >
              Explore Equipment
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
