"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cloudinary } from "@/assets/Cloudinary";
const Img1 = cloudinary.about.solutionOne;
const Img2 = cloudinary.about.solutionTwo;
const Img3 = cloudinary.about.solutionThree;

const solutions = [
  {
    title: "Commercial Gym",
    image: Img1,
  },
  {
    title: "Home Gym",
    image: Img2,
  },
  {
    title: "Cardio & Training",
    image: Img3,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Solution = () => {
  return (
    <section className="bg-[#F6F3F2] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#615E5A] mb-3">
            Curated Range
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#F28C28]">
            Solutions for Every Space
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {solutions.map(({ title, image }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden block h-[380px] sm:h-[420px]"
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/10 to-black/10" />
              <div className="relative z-10 h-full flex items-end justify-center text-center p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;