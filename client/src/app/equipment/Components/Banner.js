"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";

import { cloudinary } from "@/assets/Cloudinary";
import { products } from "@/app/data/products";

const Img = cloudinary.productsPage.hero;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Banner = ({
  searchValue,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}) => {
  const [internalSearch, setInternalSearch] = useState("");
  const [internalCategory, setInternalCategory] = useState("All Equipment");

  const search = searchValue !== undefined ? searchValue : internalSearch;

  const category =
    activeCategory !== undefined ? activeCategory : internalCategory;

  const categories = [
    "All Equipment",
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];

  const handleSearchChange = (value) => {
    if (onSearchChange) {
      onSearchChange(value);
    } else {
      setInternalSearch(value);
    }
  };

  const handleCategoryChange = (value) => {
    if (onCategoryChange) {
      onCategoryChange(value);
    } else {
      setInternalCategory(value);
    }
  };

  return (
    <>
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative w-full flex items-center overflow-hidden py-16 pb-28">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src={Img}
            alt="Premium fitness equipment showroom floor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0000009E] to-[#FFFFFF00]" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="relative z-10 max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 w-full"
        >
          <div className="max-w-xl">
            <motion.span
              variants={itemVariants}
              className="inline-block bg-[#914D001A] text-[#FFDCC3] text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded mb-5"
            >
              Our Equipment
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-5"
            >
              No. 1 <br />
              <span className="text-[#F28C28]">
                Europe Fitness Equipment
              </span>{" "}
              Brand
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm font-regular text-[#E5E2E1CC] leading-relaxed mb-8 max-w-md"
            >
              Explore our complete collection of cardio and home-gym equipment
              designed for different workout goals and fitness environments.
              From versatile orbitracks and ellipticals to powerful treadmills,
              spin bikes and complete home-gym solutions, find the equipment
              that fits your fitness journey.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9791d] text-white text-xs font-semibold uppercase tracking-wide px-6 py-3.5 rounded-md transition-colors duration-200"
              >
                Visit Showroom
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =========================
          FLOATING SEARCH + FILTER
          OUTSIDE HERO SECTION
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        className="relative z-20 -mt-16 px-6 sm:px-10"
      >
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm px-6 py-6 sm:px-8 sm:py-8">
          {/* =========================
              SEARCH INPUT
          ========================== */}
          <div className="relative mb-5">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#554336]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search equipment by name or category..."
              className="w-full bg-[#F6F3F2] border border-gray-100 rounded-lg pl-11 pr-4 py-3.5 text-sm text-[#1A1A1A] placeholder-[#554336] font-regular focus:outline-none focus:ring-2 focus:ring-[#F28C28]/30"
            />
          </div>

          {/* =========================
    CATEGORY FILTER
    HORIZONTAL SCROLL
========================== */}
          <div className="relative">
            <div className="flex items-center justify-start gap-3 overflow-x-auto whitespace-nowrap pb-1 scrollbar-hide">
              {categories.map((cat) => {
                const isActive = category === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`shrink-0 text-xs font-regular uppercase tracking-wide px-5 py-2.5 rounded-full transition-colors duration-200 ${
                      isActive
                        ? "bg-[#914D00] text-white"
                        : "bg-[#EAE7E7]/90 text-[#554336] hover:bg-[#EAE7E7]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
