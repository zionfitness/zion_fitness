"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.contactUs.hero;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
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

const Banner = () => {
  return (
    <section className="relative w-full flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={Img}
          alt="Zion Fitness Equipment showroom"
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
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 border border-[#914D0033] bg-[#914D001A] backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
            <span className="text-[11px] sm:text-xs font-regular tracking-[0.15em] uppercase text-[#F28C28]">
              CONTACT ZION FITNESS Equipment Store
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6"
          >
            Let&apos;s Build
            <br /> Your <span className="text-[#F28C28]">Fitness </span>
            <br /> Space
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm font-regular text-[#E5E2E1CC] leading-relaxed mb-9 max-w-xl"
          >
            Whether you&apos;re looking for a treadmill for your home, setting up a
            complete home gym, or equipping a commercial fitness facility, our
            team is here to help. With 15+ years of industry experience, Zion
            Fitness Equipment Store provides expert guidance to help you choose
            the right equipment based on your requirements, space and fitness
            goals.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9791d] text-white text-sm font-regular uppercase tracking-wide px-7 py-4 rounded-lg transition-colors duration-200"
            >
              Explore Equipment
              <ArrowRight size={16} />
            </Link>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 border border-white hover:border-white text-white text-sm font-regular uppercase tracking-wide px-7 py-4 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
