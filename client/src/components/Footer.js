import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import ZionLogo from "../assets/Logo.png";
import ZionLogo from "@/assets/Logo.svg";

const Footer = () => {
  const socialIconClass =
    "w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-[#6B7280] hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300";

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Equipment", path: "/equipment" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const equipmentLinks = [
    { label: "Orbitrack", category: "Orbitrack" },
    { label: "Elliptical", category: "Elliptical" },
    { label: "Bikes", category: "Bikes" },
    { label: "Spin Bikes", category: "Spin Bikes" },
    { label: "DC Series", category: "DC Series" },
    { label: "AC Series", category: "AC Series" },
    { label: "Home Gym", category: "Home Gym" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Image
                src={ZionLogo}
                alt="Zion Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <div className="leading-tight">
                <p className="text-lg font-bold text-white tracking-wide">
                  ZION
                </p>
                <p className="text-[9px] font-regular text-[#FFFFFF] tracking-[0.2em] -mt-1">
                  FITNESS EQUIPMENT
                </p>
              </div>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              Your trusted partner for premium fitness equipment and
              accessories. 15+ years of experience. Quality you can trust,
              service you can rely on.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/zionfitnessequipment/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/zionfitnessequipment/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@Zionfitnessequipmentstore"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-6 text-white">
              Equipment
            </h3>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              {equipmentLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={`/equipment?category=${encodeURIComponent(link.category)}`}
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-6 text-white">
              Contact Info
            </h3>
            <div className="space-y-4 text-sm text-[#6B7280] mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#F28C28] shrink-0 mt-0.5" size={18} />
                <p className="leading-relaxed">
                  52. parathasarathy Street, Anna St, K.K.Thazhai, Chennai,
                  Tamil Nadu 600051.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#F28C28] shrink-0" size={18} />
                <a
                  href="tel:+919876543210"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  +91 9940159616
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#F28C28] shrink-0" size={18} />
                <a
                  href="mailto:zionfes@gmail.com"
                  className="hover:text-orange-500 transition-colors duration-200 break-all"
                >
                  zionfes@gmail.com
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 text-white">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#6B7280]">Monday - Saturday</span>
                  <span className="text-[#F28C28] font-semibold">
                    10.00 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#6B7280]">Sunday</span>
                  <span className="text-[#F28C28] font-semibold">
                    10.00 AM - 9:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-4 xl:px-10 py-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Zion Fitness Equipment. All Rights
            Reserved | Developed by{" "}
            <a
              href="https://digida.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-[#F28C28]"
            >
              Digida
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
