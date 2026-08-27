"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.about.quality;

const features = [
  {
    title: "Home & Commercial Solutions",
    desc: "A versatile range of fitness equipment designed for both home workouts and commercial fitness spaces.",
  },
  {
    title: "Performance & Durability",
    desc: "Equipment designed with features focused on performance, durability and reliable everyday use.",
  },
  {
    title: "Innovative Technology",
    desc: "Explore equipment with features such as auto incline, multiple resistance levels, digital displays, Bluetooth, USB and other workout functions across selected models.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Quality = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-8"
            >
              Quality Equipment. Built for Better Workouts.
            </motion.h2>

            <div className="space-y-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="bg-[#F0EDED] border-l-4 border-[#914D00] rounded-lg px-6 py-5"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#554336] font-regular leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - labelled image panel */}
          {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden shadow-md"
          > */}
            <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] w-full ">
              <Image
                src={Img}
                alt="Zion Fitness warehouse with racked equipment inventory"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Quality;
