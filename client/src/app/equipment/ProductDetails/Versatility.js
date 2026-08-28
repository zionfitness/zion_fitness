"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cloudinary } from "@/assets/Cloudinary";
const Img1 = cloudinary.productDetails.versatilityOne;
const Img2 = cloudinary.productDetails.versatilityTwo;
const Img3 = cloudinary.productDetails.versatilityThree;
const Img4 = cloudinary.productDetails.versatilityFour;

const spaces = [
  { title: "Home Gyms", image: Img1 },
  { title: "Commercial Gyms", image: Img2 },
  { title: "Fitness Studios", image: Img3 },
  { title: "Personal Workout Space", image: Img4 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Versatility = () => {
  return (
    <section className="bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#914D00] mb-3">
              Versatility
            </p>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Fitness Solutions for Every Space
            </h2>
          </div>
          <p className="text-sm text-[#554336] font-regular leading-relaxed max-w-md">
            From dedicated home workout spaces to commercial fitness
            environments, Zion Fitness Equipment Store offers equipment designed
            to fit different workout goals, spaces and levels of training.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {spaces.map(({ title, image }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative rounded-xl overflow-hidden h-[220px] sm:h-[300px] lg:h-[340px]"
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1CCC] to-[#1B1B1C00]" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-xl font-medium text-white leading-snug">
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

export default Versatility;
