"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.about.ourStory;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const OurStory = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image, padded card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 bg-[#F0EDED] rounded-2xl p-3 sm:p-4"
          >
            <div className="relative rounded-xl overflow-hidden h-[280px] sm:h-[380px] lg:h-[440px]">
              <Image
                src={Img}
                alt="Close up of Zion Fitness branded equipment in a showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-3"
            >
              Our Story
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-5"
            >
              Built on Experience.
              <br /> Driven by Fitness.
            </motion.h2>

            <motion.span
              variants={fadeUp}
              className="block w-14 h-[3px] bg-[#F28C28] mb-6"
            />

            <motion.p
              variants={fadeUp}
              className="text-sm text-[#554336] font-regular leading-relaxed mb-5 max-w-xl"
            >
              Zion Fitness Equipment Store is built on years of experience in
              the fitness equipment industry, helping customers find equipment
              that fits their workout goals, space and requirements.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm text-[#554336] font-regular leading-relaxed max-w-xl"
            >
              Our range brings together cardio and home-gym solutions across
              different levels of performance - from everyday home workouts to
              more demanding training environments. With equipment such as
              treadmills, ellipticals, exercise bikes, spin bikes and home gyms,
              we focus on giving customers more choices to build a fitness space
              that works for them.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
