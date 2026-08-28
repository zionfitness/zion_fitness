"use client";
import React from "react";
import { motion } from "motion/react";
import { BadgeCheck, Briefcase, ShieldCheck, User, MapPin } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "40+",
    label: "Equipment Models",
  },
  {
    icon: BadgeCheck,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: ShieldCheck,
    value: "Warranty",
    label: "Support",
  },
  {
    icon: User,
    value: "Expert",
    label: "Service Team",
  },
  {
    icon: MapPin,
    value: "North Chennai",
    label: "Showroom",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Stats = () => {
  return (
    <section className="bg-white border-b border-gray-100 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-y-10 gap-x-6 text-center">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className={`
        flex flex-col items-center
        ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
        ${index === 1 ? "sm:col-span-2 lg:col-span-1" : ""}
        ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
        ${index === 3 ? "sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:col-start-auto" : ""}
        ${index === 4 ? "col-span-2 sm:col-span-2 sm:col-start-4 lg:col-span-1 lg:col-start-auto" : ""}
      `}
            >
              <div className="w-11 h-11 flex items-center justify-center mb-3">
                <Icon className="text-[#F28C28]" size={20} />
              </div>

              <p className="text-lg sm:text-xl font-bold text-[#1A1A1A] leading-tight">
                {value}
              </p>

              <p className="text-sm text-[#6B7280] mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
