"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

import { products } from "@/app/data/products"; 

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
    y: 28,
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

const Popular = () => {
  const featuredProducts = products.filter(
    (product) => product.featured === true
  );

  return (
    <section className="bg-[#FAF6F3] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-2">
              Featured Equipment
            </p>

            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Popular Equipment
            </h2>
          </div>

          <Link
            href="/equipment"
            className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-[#F28C28] hover:text-[#d9791d] transition-colors duration-200 shrink-0"
          >
            View All Equipment
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="bg-white p-1 shadow-sm h-[266px] flex items-center justify-center overflow-hidden">
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
                <h3 className="text-base font-semibold text-[#F28C28] mb-2">
                  {product.name}
                </h3>

                <p className="text-sm text-[#554336] font-regular leading-relaxed mb-5 flex-1">
                  {product.shortNote}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-[8px] font-regular uppercase tracking-[0.1em] text-[#554336]">
                    {product.category}
                  </p>

                  <Link
                    href={`/equipment/${product.path}`}
                    className="inline-flex items-center gap-1 text-sm font-regular uppercase tracking-wide text-[#1A1A1A] hover:text-[#F28C28] transition-colors duration-200"
                  >
                    View Details
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Popular;