"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowLeft,
  BadgeCheck,
  ShieldCheck,
  Wrench,
  LifeBuoy,
} from "lucide-react";
import { products } from "@/app/data/products";

const trustBadges = [
  { icon: BadgeCheck, label: "Commercial Grade" },
  { icon: ShieldCheck, label: "Warranty Included" },
  { icon: Wrench, label: "Installation Support" },
  { icon: LifeBuoy, label: "After Sales Service" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/**
 * ProductDetails
 * -----------------------------------------------------------------------
 * Self-contained: reads the `path` route param, looks up the matching
 * product directly from products.js, and renders both the hero /
 * purchase panel and the Engineering Excellence spec table.
 *
 * No `product` prop needed — drop this component into any page under
 * app/equipment/[path]/ and it resolves itself from the URL.
 * ----------------------------------------------------------------------- */
const ProductDetails = () => {
  const params = useParams();
  const product = products.find((p) => p.path === params.path);

  const [activeImage, setActiveImage] = useState(0);
  // const [selectedColor, setSelectedColor] = useState(null);
  // const [selectedWeight, setSelectedWeight] = useState(null);
  // const [selectedFinish, setSelectedFinish] = useState(null);

  if (!product) {
    // In a Client Component this throws to the nearest not-found boundary.
    notFound();
    return null;
  }

  const gallery =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

  const specEntries = product.specs ? Object.entries(product.specs) : [];

  const waMessage = encodeURIComponent(
    `Hi, I'm interested in the ${product.name}. Could you share a commercial quote?`,
  );

  return (
    <>
      {/* ================= HERO / PURCHASE PANEL ================= */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-10 sm:py-14">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-2 bg-[#F28C28] p-3 rounded-lg text-sm font-regular uppercase tracking-wide text-[#FFFFFF] transition-colors duration-200 mb-8 sm:mb-10"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-2xl shadow-md overflow-hidden bg-white h-[300px] sm:h-[420px] lg:h-[480px] mb-4">
                {(product.category || product.tag) && (
                  <span className="absolute top-4 left-4 z-10 bg-[#914D00] text-white text-[10px] font-medium uppercase tracking-wide px-3 py-1.5 rounded-full">
                    {product.tag || product.category}
                  </span>
                )}
                <Image
                  src={gallery[activeImage]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        activeImage === i
                          ? "border-[#914D00]/70"
                          : "border-gray-200"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Info panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-regular uppercase tracking-[0.15em] text-[#914D00] mb-3"
              >
                {product.category}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-[#1B1B1C] leading-tight mb-4"
              >
                {product.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-sm text-[#554336] font-regular leading-relaxed mb-8 max-w-xl"
              >
                {product.description || product.shortNote}
              </motion.p>

              {/* Trust badges */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 gap-y-5 gap-x-6 mb-8 pb-8 border-b border-gray-100"
              >
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F0EDED] flex items-center justify-center shrink-0">
                      <Icon className="text-[#914D00]" size={18} />
                    </div>
                    <span className="text-sm font-medium text-[#1B1B1C]">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Frame Color — only renders if product.options.frameColor exists */}
              {/* {product.options?.frameColor && (
                <motion.div variants={fadeUp} className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] mb-3">
                    Frame Color
                  </p>
                  <div className="flex gap-3">
                    {product.options.frameColor.map((color) => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => setSelectedColor(color.value)}
                        aria-label={color.label}
                        aria-pressed={selectedColor === color.value}
                        className={`w-9 h-9 rounded-full border-2 transition-colors duration-200 ${
                          selectedColor === color.value
                            ? "border-[#1A1A1A]"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </motion.div>
              )} */}

              {/* Weight Stack — only renders if product.options.weightStack exists */}
              {/* {product.options?.weightStack && (
                <motion.div variants={fadeUp} className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] mb-3">
                    Weight Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.options.weightStack.map((weight) => (
                      <button
                        key={weight}
                        type="button"
                        onClick={() => setSelectedWeight(weight)}
                        aria-pressed={selectedWeight === weight}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors duration-200 ${
                          selectedWeight === weight
                            ? "bg-[#914D00] text-white border-[#914D00]"
                            : "bg-white text-[#1A1A1A] border-gray-200 hover:border-[#F28C28]"
                        }`}
                      >
                        {weight}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )} */}

              {/* Frame Finish — only renders if product.options.frameFinish exists */}
              {/* {product.options?.frameFinish && (
                <motion.div variants={fadeUp} className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] mb-3">
                    Frame Finish
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.options.frameFinish.map((finish) => (
                      <button
                        key={finish}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        aria-pressed={selectedFinish === finish}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors duration-200 ${
                          selectedFinish === finish
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                            : "bg-white text-[#1A1A1A] border-gray-200 hover:border-[#1A1A1A]"
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )} */}

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/919940159616?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex whitespace-nowrap items-center justify-center gap-2 bg-[#914D00] hover:bg-[#7a4100] text-white text-sm font-semibold uppercase tracking-wide px-6 py-4 rounded-lg transition-colors duration-200"
                >
                  Request Commercial Quote
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-black text-white text-sm font-semibold uppercase tracking-wide px-6 py-4 rounded-lg transition-colors duration-200"
                >
                  Book Showroom Visit
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING EXCELLENCE (SPEC TABLE) ================= */}
      {specEntries.length > 0 && (
        <section className="bg-[#F6F3F2] overflow-hidden">
          <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4">
                  Engineering
                  <br /> Excellence
                </h2>
                <p className="text-sm sm:text-base text-[#554336] font-regular leading-relaxed mb-8 max-w-sm">
                  {product.description}
                </p>

                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="text-[#914D00] shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A] mb-1">
                      EN957 Certified
                    </p>
                    <p className="text-sm text-[#554336] font-regular leading-relaxed">
                      {product.shortNote}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white rounded-xl overflow-hidden"
              >
                {specEntries.map(([label, value], index) => (
                  <motion.div
                    key={label}
                    variants={rowVariants}
                    className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1.5 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 ${
                      index !== specEntries.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <p className="text-sm font-regular uppercase tracking-[0.1em] text-[#554336]">
                      {label}
                    </p>
                    <p className="text-sm sm:text-base text-[#1B1B1C] font-regular">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
