"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.productsPage.guidance;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Guidance = () => {
  return (
    <section className="bg-[#F6F3F2] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-xl overflow-hidden border border-gray-100 shadow-sm order-2 lg:order-1 h-[320px] sm:h-[420px] lg:h-[460px]"
          >
            <Image
              src={Img}
              alt="Zion Fitness showroom interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-6 bg-[#FFFFFF]/90 backdrop-blur rounded-lg px-4 py-3 sm:px-5 sm:py-4 shadow-lg">
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#1B1B1C]">
                Personal Consultations
              </p>

              <p className="mt-0.5 text-[11px] text-sm text-[#554336]">
                Monday – Saturday: 9.00am – 6.00pm
              </p>
            </div>
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
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#914D00] mb-3"
            >
              EXPERT GUIDANCE
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-5"
            >
              Need Help Choosing <br />
              the Right Equipment?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#554336] text-sm leading-relaxed mb-8 max-w-xl"
            >
              Choosing the right fitness equipment depends on your workout
              goals, available space, usage and preferred training style. Our
              team can help you explore and compare our range to find equipment
              suited to your home, training space or commercial fitness setup.
            </motion.p>

            <motion.div 
                variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-[#914D00]/80 hover:bg-[#914D00] text-white text-sm font-medium rounded uppercase tracking-wide px-5 sm:px-6 py-3 sm:py-3.5 transition-colors duration-200 w-full sm:w-auto"
              >
                VISIT SHOWROOM
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 border border-[#1B1B1C] text-[#1B1B1C] text-sm font-medium rounded uppercase tracking-wide px-5 sm:px-6 py-3 sm:py-3.5 transition-colors duration-200 w-full sm:w-auto"
              >
                CONTACT EXPERT
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guidance;
