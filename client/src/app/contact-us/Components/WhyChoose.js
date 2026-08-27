"use client";
import React from "react";
import { motion } from "motion/react";
import { BadgeCheck, Wrench, ShieldCheck, Compass, Headset, WrenchIcon } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Experience the Equipment",
    desc: "Visit our North Chennai showroom to see, test and compare equipment before making your decision.",
  },
  {
    icon: Wrench,
    title: "A Wide Equipment Range",
    desc: "From treadmills and ellipticals to strength machines, spin bikes, home gyms and fitness accessories, explore solutions for different training needs.",
  },
  {
    icon: ShieldCheck,
    title: "Solutions for Every Space",
    desc: "Choose equipment for home gyms, commercial gyms, fitness studios and other dedicated workout spaces.",
  },
  {
    icon: Compass,
    title: "One Point of Contact",
    desc: "Get assistance with your equipment enquiry, purchase, installation and service requirements through our team.",
  },
    {
    icon: WrenchIcon,
    title: "Built Around Your Requirements",
    desc: "We focus on finding equipment that matches your space, usage, training requirements and budget rather than simply recommending a product.",
  },
  {
    icon: Headset,
    title: "Support You Can Rely On",
    desc: "Stay connected with the Zion Fitness Equipment Store  team for warranty assistance, maintenance and after-sales support.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhyChoose = ({ heading = "Why Choose Zion Fitness?" }) => {
  return (
    <section className="bg-[#F6F3F2] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1B1B1C] mb-4">
            {heading}
          </h2>
          <span className="block w-14 h-[3px] bg-[#914D00] mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="bg-white rounded-xl px-6 py-8 sm:px-7 sm:py-9 lg:[&:nth-child(5)]:col-start-2 lg:[&:nth-child(6)]:col-start-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#914D001A] flex items-center justify-center mb-6">
                <Icon className="text-[#914D00]" size={22} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] leading-snug mb-2.5">
                {title}
              </h3>
              <p className="text-sm text-[#554336] font-regular leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;