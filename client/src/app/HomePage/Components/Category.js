"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Zap, ShoppingBag, ChevronRight } from "lucide-react";
// import Img1 from "../../../assets/HomeImages/Cardio.webp"
// import Img2 from "../../../assets/HomeImages/Strenth.webp"
// import Img3 from "../../../assets/HomeImages/Fitness.webp"
import Img1 from "@/assets/HomeImages/Cardio.webp"
import Img2 from "@/assets/HomeImages/Strenth.webp"
import Img3 from "@/assets/HomeImages/Fitness.webp"

const MotionLink = motion(Link);

const categories = [
  {
    title: "Cardio Equipment",
    desc: "Build endurance and elevate your workouts with treadmills, ellipticals, exercise bikes and spin bikes.",
    icon: Zap,
    image: Img1,
    href: "/equipment",
  },
  {
    title: "TREADMILLS",
    desc: "Choose from home-use to high-performance treadmills with powerful motors, auto incline and advanced workout features.",
    icon: ShoppingBag,
    image: Img2,
    href: "/equipment",
  },
  {
    title: "HOME GYM EQUIPMENT",
    desc: "Create a complete workout space with home gyms and multi-functional training equipment.",
    icon: ShoppingBag,
    image: Img3,
    href: "/equipment",
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

const Category = () => {
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
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-3">
            Shop By Category
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Explore Our Equipment Categories
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map(({ title, desc, icon: Icon, image, href }, index) => (
            <MotionLink
              href={href}
              key={title}
              variants={cardVariants}
              className={`group relative rounded-2xl bg-black/10 overflow-hidden h-[340px] sm:h-[300px] lg:h-[340px] block
                ${index === 2 ? 'sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto lg:col-span-1 lg:max-w-full' : ''}
              `}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000E5] to-[#00000066]" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="w-11 h-11 rounded-full bg-[#F28C28] flex items-center justify-center mb-4">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[#D1D5DB] font-regular leading-relaxed mb-4 max-w-[85%]">
                  {desc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#F28C28]">
                  Explore Category
                  <ChevronRight size={14} />
                </span>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Category;