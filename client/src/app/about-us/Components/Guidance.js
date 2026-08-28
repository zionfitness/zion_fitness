"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ClipboardList, UserCog, Clock3, ShieldCheck } from "lucide-react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.about.guidance;

const guidance = [
  {
    icon: ClipboardList,
    title: "Consultation",
    desc: "Understand your fitness goals, space and requirements to identify the right equipment for your setup.",
  },
  {
    icon: UserCog,
    title: "SELECTION",
    desc: "Choose from a wide range of cardio and home-gym equipment based on your workout needs.",
  },
  {
    icon: Clock3,
    title: "SHOWROOM VISIT",
    desc: "Explore and experience the equipment in person before making your decision.",
  },
  {
    icon: ShieldCheck,
    title: "AFTER SALES",
    desc: "Get continued support after your purchase for your fitness equipment needs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Guidance = () => {
  return (
    <section className="bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 lg:py-16 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden shadow-lg"
        >
          {/* Image */}
          <div className="relative h-[260px] sm:h-[340px] lg:h-auto">
            <Image
              src={Img}
              alt="Zion Fitness trainer and technician team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Dark info panel */}
          <div className="bg-[#303030] px-6 py-10 sm:px-10 sm:py-12 lg:p-14">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-8 sm:mb-10">
              Expert Guidance
              <br /> at Every Step
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7"
            >
              {guidance.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={itemVariants}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-[#F28C28]" size={18} />
                    <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#F28C28]">
                      {title}
                    </p>
                  </div>
                  <p className="text-sm text-[#E5E2E1] font-regular leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guidance;