"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.productDetails.Strength;

const stats = [
  { value: "1000kg+", label: "Static Load Tested" },
  { value: "Double", label: "Electrostatic Powder Coat" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Strength = () => {
  return (
    <section className="bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="bg-[#1B1B1C] flex flex-col justify-center px-8 py-12 sm:px-12 sm:py-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-4"
            >
              INNOVATION
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
            >
              Technology That Supports
              <br /> Your Training
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-[#E5E2E1] font-regular leading-relaxed mb-10 max-w-md"
            >
              Selected equipment across our range comes with features designed
              to make workouts more convenient, engaging and effective.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-8 max-w-md"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-lg sm:text-xl font-regular text-[#914D00] mb-1">
                    {value}
                  </p>
                  <p className="text-sm text-[#E5E2E1] font-regular leading-relaxed">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[280px] sm:h-[380px] lg:h-auto"
          >
            <Image
              src={Img}
              alt="Close-up of Zion Fitness heavy duty steel weld joint"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Strength;
