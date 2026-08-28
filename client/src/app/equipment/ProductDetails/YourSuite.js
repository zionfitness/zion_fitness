"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

import { products as allProducts } from "@/app/data/products";

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
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const YourSuite = () => {
  const params = useParams();

  /*
   * Example:
   * URL = /equipment/cw-2095
   *
   * params.path = "cw-2095"
   */
  const currentPath = params?.path;

  /*
   * Find the current product
   */
  const currentProduct = useMemo(() => {
    return allProducts.find((product) => product.path === currentPath);
  }, [currentPath]);

  /*
   * Find products from the same category.
   *
   * Exclude the current product itself.
   *
   * Show maximum 4 products.
   */
  const relatedProducts = useMemo(() => {
    if (!currentProduct) return [];

    return allProducts
      .filter(
        (product) =>
          product.category === currentProduct.category &&
          product.path !== currentProduct.path,
      )
      .slice(0, 4);
  }, [currentProduct]);

  /*
   * Don't render the section if there are
   * no related products.
   */
  if (!currentProduct || relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="flex items-center justify-between gap-4 mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] uppercase tracking-tight">
            Related Products
          </h2>

          <Link
            href={`/equipment?category=${encodeURIComponent(
              currentProduct.category,
            )}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-[#F28C28] hover:text-[#d9791d] transition-colors duration-200 shrink-0"
          >
            Explore More Equipment
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Related Products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {relatedProducts.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <Link href={`/equipment/${product.path}`} className="group block">
                {/* Product Image */}
                <div className="relative rounded-xl shadow-lg overflow-hidden h-[160px] sm:h-[220px] lg:h-[240px] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Name */}
                <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] mb-1 group-hover:text-[#F28C28] transition-colors duration-200">
                  {product.name}
                </h3>

                {/* Product Short Note */}
                <p className="text-sm text-[#6B7280] font-regular">
                  {product.shortNote}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Link */}
        <div className="mt-10 sm:hidden">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-[#F28C28] hover:text-[#d9791d] transition-colors duration-200"
          >
            Explore More Equipment
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YourSuite;
