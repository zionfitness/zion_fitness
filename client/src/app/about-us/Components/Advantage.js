"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cloudinary } from "@/assets/Cloudinary";
const Img1 = cloudinary.about.advantageOne;
const Img2 = cloudinary.about.advantageTwo;
const Img3 = cloudinary.about.advantageThree;

const textCells = {
  "01": {
    title: "15+ Years Industry Experience",
    desc: "Years of experience helping customers choose fitness equipment suited to their workout goals, space and usage requirements.",
  },
  "02": {
    title: "Wide Range of Fitness Equipment",
    desc: "Explore treadmills, ellipticals, exercise bikes, spin bikes and home-gym solutions across different performance levels.",
  },
  "03": {
    title: "Performance-Focused Equipment",
    desc: "From everyday home workouts to demanding training, our range offers equipment designed with performance, durability and reliability in mind.",
  },
  "04": {
    title: "After Sales Service",
    desc: "Our support continues beyond the purchase with assistance for your fitness equipment needs.",
  },
  "05": {
    title: "Warranty Support",
    desc: "Warranty support provides added peace of mind when investing in your fitness equipment.",
  },
  "06": {
    title: "Try Before Purchase",
    desc: "Visit our North Chennai showroom to explore, compare and experience the equipment before making your purchase.",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const TextCell = ({ id, dark }) => {
  const item = textCells[id];
  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 ${
        dark ? "bg-[#F28C28]" : "bg-white"
      }`}
    >
      <p
        className={`text-xs font-semibold tracking-[0.15em] mb-3 ${
          dark ? "text-white" : "text-gray-300"
        }`}
      >
        {id}
      </p>
      <h3
        className={`text-xl sm:text-2xl font-bold leading-snug mb-2.5 ${
          dark ? "text-white" : "text-[#1B1B1C]"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-sm font-regular leading-relaxed ${
          dark ? "text-white/90" : "text-[#554336]"
        }`}
      >
        {item.desc}
      </p>
    </motion.div>
  );
};

const ImageCell = ({ src, alt }) => (
  <motion.div variants={fadeUp} className="relative h-[220px] sm:h-[260px]">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 1024px) 100vw, 33vw"
      className="object-cover grayscale"
    />
  </motion.div>
);

const Advantage = () => {
  return (
    <section className="bg-[#F6F3F2] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs sm:text-sm font-regular uppercase tracking-[0.15em] text-[#615E5A] mb-3">
            The Zion Advantage
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Why Global Leaders Trust Us
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden"
        >
          <TextCell id="01" />
          <ImageCell src={Img1} alt="Close up of cable pulley on strength machine" />
          <TextCell id="02" />

          <ImageCell src={Img2} alt="Sales consultant guiding a customer on a treadmill" />
          <TextCell id="03" />
          <ImageCell src={Img3} alt="Technician adjusting a cable stack machine" />

          <TextCell id="04" />
          <TextCell id="05" dark />
          <TextCell id="06" />
        </motion.div>
      </div>
    </section>
  );
};

export default Advantage;