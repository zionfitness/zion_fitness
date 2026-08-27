"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Navigation, Phone } from "lucide-react";
// import Img from "../../../assets/HomeImages/Experience.webp";
import Img from "@/assets/HomeImages/Experience.webp"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Experience = () => {
  return (
    <section className="bg-[#303030] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm font-regular uppercase tracking-[0.15em] text-[#F28C28] mb-3"
            >
              The Zion Experience
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-3xl md:text-4xl font-regular text-white leading-tight mb-6"
            >
              Experience Before You
              <br /> Invest
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-[#E5E2E199] font-regular leading-relaxed mb-9 max-w-xl"
            >
              A website can show you a machine, but experiencing it in person
              helps you understand the difference. Visit the Zion Fitness
              Equipment Store showroom to explore, compare and experience
              treadmills, spin bikes, ellipticals and home-gym equipment before
              making your choice.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9"
            >
              <div className="bg-[#E5E2E10D] border border-[#E5E2E11A] rounded-xl p-5">
                <p className="text-[11px] font-regular uppercase tracking-[0.15em] text-[#F28C28] mb-2">
                  Visit Us
                </p>
                <p className="text-sm text-white leading-relaxed">
                  Zion Fitness Equipment Store. 52, parathasarathy Street, Anna St, K.K.Thazhai, Chennai, Tamil Nadu 600051. 
                </p>
              </div>
              <div className="bg-[#E5E2E10D] border border-[#E5E2E11A] rounded-xl p-5">
                <p className="text-[11px] font-regular uppercase tracking-[0.15em] text-[#F28C28] mb-2">
                  Opening Hours
                </p>
                <p className="text-sm text-white leading-relaxed">
                    Mon - Sun: 10:00 AM - 9:00 PM
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://maps.app.goo.gl/FuE2SeqmuszgyagLA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9791d] text-white text-sm font-regular uppercase tracking-wide px-6 py-3.5 rounded-lg transition-colors duration-200"
              >
                Get Directions
                <Navigation size={16} />
              </a>
              <a
                href="tel:+919940159616"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white text-sm font-regular uppercase tracking-wide px-6 py-3.5 rounded-lg transition-colors duration-200"
              >
                Call Now
                <Phone size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg overflow-hidden"
          >
            <Image
              src={Img}
              alt="Consulting with a Zion Fitness specialist in the showroom"
              width={1200}
              height={800}
              className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
