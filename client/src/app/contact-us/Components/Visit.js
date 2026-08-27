"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  Phone,
  Mail,
  Users,
} from "lucide-react";
import { cloudinary } from "@/assets/Cloudinary";
const Img = cloudinary.contactUs.visit;

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

const contactCards = [
  {
    icon: Phone,
    label: "Phone Support",
    value: "+91 9940159616",
    desc: "Speak with our team for product enquiries, pricing and assistance.",
  },
  {
    icon: Mail,
    label: "Email Queries",
    value: "zionfes@gmail.com",
    desc: "For product enquiries, quotations and other information.",
  },
  {
    icon: Users,
    label: "BUSINESS & GYM ENQUIRIES",
    value: "zionfes@gmail.com",
    desc: "For commercial gym setups, bulk requirements and fitness facility enquiries.",
  },
];

const whatsappMessage = `
    Hi Zion Fitness Team,

    I’m contacting you through your website and I’m interested in your fitness equipment.

    Please share the available products, pricing, and other details.

    Thank you.
    `;


const Visit = ({
  eyebrow = "GLOBAL HEADQUARTERS",
  location = "Zion Industrial Luxe",
  heading = "Visit the Showroom",
  addressLines = ["52. parathasarathy Street, Anna St, K.K.Thazhai, Chennai, Tamil Nadu 600051"],
  hoursLines = ["Monday - Sunday: 10:00 AM - 9:00 PM"],
  directionsHref = "https://maps.app.goo.gl/FuE2SeqmuszgyagLA",
  whatsappHref = `https://wa.me/919940159616?text=${encodeURIComponent(whatsappMessage)}`,
  mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54096.187054733084!2d80.20006262374865!3d13.14455433364216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52656876269739%3A0x9fe30aa5e4345035!2sZion%20Fitness%20Equipment%20Store!5e1!3m2!1sen!2sin!4v1787649646024!5m2!1sen!2sin",
}) => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-16">
        {/* Dark card: image + contact info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden bg-[#1A1A1A]"
        >
          {/* Image with overlay label */}
          <div className="relative h-[320px] sm:h-[400px] lg:min-h-[550px]">
            {Img && (
              <Image
                src={Img}
                alt="Zion Fitness global headquarters showroom floor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="text-xs font-regular uppercase tracking-[0.15em] text-[#E5E2E1CC] mb-2">
                {eyebrow}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {location}
              </h3>
            </div>
          </div>

          {/* Contact panel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="px-6 py-10 sm:px-10 sm:py-12 flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base font-regular text-[#E5E2E1] mb-6"
            >
              {heading}
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-3 mb-6">
              <MapPin className="text-[#F28C28] shrink-0 mt-0.5" size={18} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-1.5">
                  Address
                </p>
                {addressLines.map((line) => (
                  <p
                    key={line}
                    className="text-sm text-[#E5E2E1] font-regular leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3 mb-9">
              <Clock className="text-[#F28C28] shrink-0 mt-0.5" size={18} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F28C28] mb-1.5">
                  Opening Hours
                </p>
                {hoursLines.map((line) => (
                  <p
                    key={line}
                    className="text-sm text-[#E5E2E1] font-regular leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9791d] text-white text-sm font-regular uppercase tracking-wide px-6 py-3.5 rounded-lg transition-colors duration-200"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white text-sm font-regular uppercase tracking-wide px-6 py-3.5 rounded-lg border border-white/30 hover:border-white/60 transition-colors duration-200"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-6 rounded-2xl overflow-hidden h-[280px] sm:h-[340px] lg:h-[400px]"
        >
          <iframe
            src={mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zion Fitness showroom location map"
          />
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {contactCards.map(({ icon: Icon, label, value, desc }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="bg-[#F0EDED] rounded-xl px-6 py-6 sm:py-7"
            >
              <div className="w-10 h-10 rounded-lg bg-[#914D00] flex items-center justify-center mb-4">
                <Icon className="text-white" size={18} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1B1B1C] mb-2">
                {label}
              </p>
              <p className="text-sm sm:text-base font-regular text-[#554336] mb-1">
                {value}
              </p>
              <p className="text-sm text-[#1B1B1C] font-regular leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Visit;