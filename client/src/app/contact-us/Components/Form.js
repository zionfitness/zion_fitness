"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Award,
  UserCheck,
  PackageCheck,
  Wrench,
  Send,
  Phone,
} from "lucide-react";
import { products } from "@/app/data/products";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.contactUs.form;

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxdGO_CLjM7gQLudj0qjBUij5Y9NC9uooripAmfeDkuVuavYsIMf_SQiwxod0xCp9aJ/exec";

const whyConsult = [
  {
    icon: Award,
    title: "15+ Years Industry Experience",
    desc: "Decades of logistical and technical expertise.",
  },
  {
    icon: UserCheck,
    title: "Professional Equipment Consultation",
    desc: "Custom-tailored recommendations for your specific needs.",
  },
  {
    icon: PackageCheck,
    title: "Premium Imported Equipment",
    desc: "Direct access to world-class manufacturing.",
  },
  {
    icon: Wrench,
    title: "Warranty & After-Sales",
    desc: "Dedicated maintenance crews on standby.",
  },
];

// const purposeOptions = [
//   "Home Use",
//   "Commercial Use",
//   "Gym / Studio",
//   "Corporate Wellness",
// ];
const contactMethods = ["Phone", "WhatsApp", "Email"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const inputClasses =
  "w-full bg-[#F0EDED] focus:bg-white text-sm text-[#1A1A1A] placeholder:text-[#9C9791] rounded-lg px-4 py-3.5 outline-none border border-transparent focus:border-[#F28C28] transition-colors duration-200";

const labelClasses =
  "block text-xs font-semibold uppercase tracking-[0.1em] text-[#554336] mb-2";

const EMPTY_FORM = {
  fullName: "",
  mobile: "",
  email: "",
  city: "",
  category: "",
  product: "",
//   purpose: "",
//   quantity: 1,
  contactMethod: "",
  message: "",
  wantCallback: false,
};

const Form = ({
  heading = "Find the Right ",
  highlight = "Equipment",
  headingEnd = " for Your Fitness Goals?",
  description = "Have questions about product specifications, pricing, warranty, installation, delivery or after-sales service? Share your requirements with us and our experienced team will help you identify the right equipment for your space and budget.",
}) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [],
  );

  const filteredProducts = useMemo(
    () =>
      form.category
        ? products.filter((p) => p.category === form.category)
        : products,
    [form.category],
  );

  const handleChange = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setForm((prev) => ({ ...prev, category, product: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Column order — must match the 11 columns appended in the Apps Script
    const payload = {
      fullName: form.fullName,
      mobile: form.mobile,
      email: form.email,
      city: form.city,
      product: form.product,
      category: form.category,
    //   purpose: form.purpose,
    //   quantity: form.quantity,
      contactMethod: form.contactMethod,
      message: form.message,
      wantCallback: form.wantCallback ? "Yes" : "No",
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        // text/plain avoids a CORS preflight request, which Apps Script
        // web apps do not handle correctly
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("Enquiry submission failed:", err);
      setStatus("error");
    }
  };

  const handleCallNow = () => {
    window.location.href = "tel:+18009466348";
  };

  return (
    <section id="form" className="bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-3">
            Product Enquiry
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-5">
            {heading}
            <span className="text-[#F28C28]">{highlight}</span>
            {headingEnd}
          </h2>
          <p className="text-sm sm:text-base text-[#615E5A] font-regular leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
              {Img && (
                <Image
                  src={Img}
                  alt="Zion Fitness expert guiding a customer on equipment"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

              <p className="absolute bottom-4 left-5 text-sm text-white/90 font-regular">
                Precision Engineering. Expert Insight.
              </p>
            </div>

            <div className="bg-[#F6F3F2] rounded-lg p-6 sm:p-7">
              <h3 className="text-sm font-regular text-[#1A1A1A] mb-5">
                Why Consult Zion Fitness?
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-5"
              >
                {whyConsult.map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="flex gap-3"
                  >
                    <Icon
                      className="text-[#914D00] shrink-0 mt-0.5"
                      size={18}
                    />
                    <div>
                      <p className="text-sm font-regular text-[#1B1B1C] mb-0.5">
                        {title}
                      </p>
                      <p className="text-xs text-[#554336] font-regular leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="border-t border-black/10 mt-6 pt-5">
                <p className="text-xs text-[#554336] italic font-regular leading-relaxed">
                  &ldquo;We help you choose the right equipment based on your
                  fitness goals, available space and budget.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#DBC2B04D] shadow-sm"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-7">
              Equipment Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Full Name*</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Your Name"
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Mobile Number*</label>
                  <input
                    required
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={form.mobile}
                    onChange={handleChange("mobile")}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={form.email}
                    onChange={handleChange("email")}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>City</label>
                  <input
                  required
                    type="text"
                    placeholder="Enter City"
                    value={form.city}
                    onChange={handleChange("city")}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Category</label>
                  <select
                  required
                    value={form.category}
                    onChange={handleCategoryChange}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Selected Product</label>
                  <select
                  required
                    value={form.product}
                    onChange={handleChange("product")}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="">Select a product</option>
                    {filteredProducts.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* <div>
                  <label className={labelClasses}>Purpose</label>
                  <select
                    value={form.purpose}
                    onChange={handleChange("purpose")}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="">Select purpose</option>
                    {purposeOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div> */}
                {/* <div>
                  <label className={labelClasses}>Quantity</label>
                  <input
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={handleChange("quantity")}
                    className={inputClasses}
                  />
                </div> */}
              </div>

              <div>
                <label className={labelClasses}>Preferred Contact Method</label>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {contactMethods.map((method) => (
                    <label
                      key={method}
                      className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] font-regular cursor-pointer"
                    >
                      <input
                      required
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={form.contactMethod === method}
                        onChange={handleChange("contactMethod")}
                        className="accent-[#F28C28] w-4 h-4"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClasses}>Message</label>
                <textarea
                  rows={4}
                  placeholder="I would like to know more about this equipment, warranty, delivery time, installation, pricing, or any other details."
                  value={form.message}
                  onChange={handleChange("message")}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.wantCallback}
                  onChange={handleChange("wantCallback")}
                  className="mt-1 accent-[#F28C28] w-4 h-4 shrink-0"
                />
                <span className="text-sm text-[#554336] font-regular leading-relaxed">
                  I would like a complimentary callback from the Zion Fitness
                  expert sales team.
                </span>
              </label>

              {status === "success" && (
                <p className="text-sm text-green-700 font-medium">
                  Thanks — your enquiry has been sent. Our team will be in touch
                  shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 font-medium">
                  Something went wrong sending your enquiry. Please try again or
                  call us directly.
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#914D00] hover:bg-[#7a4000] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-regular uppercase tracking-wide px-7 py-4 rounded-lg transition-colors duration-200"
                >
                  <Send size={16} />
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>

                <button
                  type="button"
                  onClick={handleCallNow}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#5F5E5E] hover:bg-[#1A1A1A] text-white text-sm font-regular uppercase tracking-wide px-7 py-4 rounded-lg transition-colors duration-200"
                >
                  <Phone size={16} />
                  Call Now
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Form;
