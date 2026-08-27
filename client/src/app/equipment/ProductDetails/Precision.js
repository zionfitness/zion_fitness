"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.productDetails.Precision;

const points = [
  "Multiple Workout Options",
  "Performance-Focused Design",
  "User-Friendly Features",
  "Durable Construction",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Precision = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden order-2 lg:order-1 h-[300px] sm:h-[400px] lg:h-[460px]"
          >
            <Image
              src={Img}
              alt="Close-up of Zion Fitness smooth pulley system"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

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
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#914D00] mb-4"
            >
              PERFORMANCE
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1B1B1C] leading-tight mb-6"
            >
              Built for Better
              <br /> Workouts
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-[#4B5563] font-regular leading-relaxed mb-8 max-w-xl"
            >
              Our equipment range combines practical functionality with
              performance-focused features to support consistent and effective
              workouts. From cardio conditioning to full-body strength training,
              choose equipment suited to your fitness requirements.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-4">
              {points.map((point, index) => (
                <li
                  key={`${point}-${index}`}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#914D00] shrink-0"
                    size={20}
                    strokeWidth={1.75}
                  />
                  <span className="text-sm sm:text-base text-[#1B1B1C] font-regular">
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Precision;
