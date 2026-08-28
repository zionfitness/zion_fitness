"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  CalendarCheck,
  User,
  Package,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
// import Img from "../../../assets/HomeImages/About.webp";
import Img from "@/assets/HomeImages/About.webp"

const features = [
  { icon: CalendarCheck, title: "15+ Years", subtitle: "Experience" },
  { icon: User, title: "Wide Equipment", subtitle: "Range" },
  { icon: Package, title: "Premium", subtitle: "Equipment" },
  { icon: ShieldCheck, title: "Reliable", subtitle: "Service Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutZion = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm order-2 lg:order-1 h-[320px] sm:h-[420px] lg:h-[460px]"
>
  <Image
    src={Img}
    alt="Zion Fitness showroom interior"
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
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-3"
            >
              ABOUT ZION FITNESS Equipment Store
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-5"
            >
              Your Trusted Fitness Equipment Partner
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#4B5563] text-sm leading-relaxed mb-8 max-w-xl"
            >
              Zion Fitness Fitness Equipment Store helps individuals, home
              fitness enthusiasts and professional fitness spaces choose the
              right equipment for their workout needs. Explore and compare a
              wide range of cardio and strength equipment, including treadmills,
              spin bikes, ellipticals, exercise bikes and home-gym solutions.
              With multiple equipment options across different performance
              levels, Zion Fitness Fitness Equipment Store makes it easier to
              find the right machine for your space, workout goals and
              requirements.
            </motion.p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {features.map(({ icon: Icon, title, subtitle }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <Icon className="text-[#F28C28] shrink-0" size={22} />
                  <div>
                    <p className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                      {title}
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      {subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

<motion.div variants={fadeUp}>
  <Link
    href="/about-us"
    className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-white text-sm font-semibold uppercase tracking-wide px-6 py-3.5 transition-colors duration-200"
  >
    Learn More
    <ArrowRight size={16} />
  </Link>
</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutZion;
