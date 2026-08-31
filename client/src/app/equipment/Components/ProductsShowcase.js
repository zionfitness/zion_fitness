"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { products } from "@/app/data/products";

// Badge shown on each product card. Defaults to the category itself
// (uppercased) unless a shorter/custom label is set here.
const categoryTagMap = {
  "Spin Bikes": "SPIN BIKE",
  "Treadmill DC Series": "Treadmill DC SERIES",
  "Treadmill AC Series": "Treadmill AC SERIES",
  "Home Gym": "HOME GYM",
};

const getTag = (category) =>
  categoryTagMap[category] || category?.toUpperCase() || "";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const ProductCard = ({ product }) => (
  <motion.div
    variants={cardVariants}
    className="w-full min-w-0 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
  >
    {/* Product Image */}
    <div className="relative h-[266px] flex items-center justify-center overflow-hidden">
      <span className="absolute top-4 left-4 z-10 bg-[#1A1A1A] text-white text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded">
        {getTag(product.category)}
      </span>

      <Image
        src={product.image}
        alt={product.name}
        width={800}
        height={800}
        className="w-full h-full object-contain"
      />
    </div>

    {/* Product Content */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-base font-bold text-[#1A1A1A] mb-1.5">
        {product.name}
      </h3>

      <p className="text-sm text-[#6B7280] font-regular leading-relaxed mb-5 line-clamp-2 flex-1">
        {product.shortNote}
      </p>

      <Link
        href={`/equipment/${product.path}`}
        className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-[#914D00] hover:text-[#F28C28] transition-colors duration-200"
      >
        View Details
        <ChevronRight size={14} />
      </Link>
    </div>
  </motion.div>
);

const CategorySection = ({ category, title, products: productList }) => {
  const categoryProducts = productList.filter((p) => p.category === category);

  if (categoryProducts.length === 0) return null;

  return (
    <section className="bg-[#FFFFFF] pt-32 overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 mb-10 border-b border-gray-200"
        >
          <div>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
              {title}
            </h2>

            {categoryProducts[0]?.shortNote && (
              <p className="text-sm text-[#6B7280] font-regular max-w-xl">
                {categoryProducts[0].shortNote}
              </p>
            )}
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectsShowcase = ({
  search = "",
  category = "All Equipment",
}) => {
  /*
   * Get all unique categories directly from products.js
   */
  const categories = [
    ...new Set(
      products
        .map((product) => product.category)
        .filter(Boolean)
    ),
  ];

  /*
   * Filter products
   */
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All Equipment" ||
      product.category === category;

    const q = search.trim().toLowerCase();

    const matchesSearch =
      !q ||
      product.name?.toLowerCase().includes(q) ||
      product.category?.toLowerCase().includes(q) ||
      product.subcategory?.toLowerCase().includes(q) ||
      product.shortNote?.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  /*
   * Create sections dynamically from categories
   */
  const sections = categories.map((categoryName) => ({
    category: categoryName,
    title: categoryName,
  }));

  /*
   * If a specific category is selected,
   * only show that category section.
   */
  const visibleSections =
    category === "All Equipment"
      ? sections
      : sections.filter(
          (section) => section.category === category
        );

  return (
    <>
      {visibleSections.map((section) => (
        <CategorySection
          key={section.category}
          {...section}
          products={filteredProducts}
        />
      ))}
    </>
  );
};

export default ProjectsShowcase;