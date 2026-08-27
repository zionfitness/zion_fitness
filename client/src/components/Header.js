"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
// import ZionLogo from "../assets/Logo.png"
import ZionLogo from "@/assets/Logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  { label: "Equipment", path: "/equipment" },
  { label: "Contact", path: "/contact-us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow-md">
      <div className="max-w-[1500px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1220px] 2xl:max-w-[1500px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-4 xl:px-10 h-[76px] md:h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={ZionLogo}
            alt="Zion Fitness Equipment"
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 ml-auto mr-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.label}
                href={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#914D00]"
                    : "text-[#000000] hover:text-[#914D00]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side actions (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact-us"
            className="bg-[#F28C28]/90 hover:bg-[#F28C28] text-white text-sm font-regular uppercase tracking-wide px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Visit Showroom
          </Link>
          {/* <Link
            href="/account"
            className="w-10 h-10 rounded-full bg-[#914D00] text-white flex items-center justify-center hover:bg-[#4a362b] transition-colors duration-200 shrink-0"
            aria-label="Account"
          >
            <User size={18} />
          </Link> */}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors duration-200"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full overflow-hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[420px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 sm:px-10 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.label}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium uppercase tracking-wide text-left px-3 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-[#914D00] bg-[#914D00]/10"
                    : "text-[#000000] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 mt-3 px-3">
            <Link
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center bg-[#F28C28] hover:bg-[#F28C28] text-white text-sm font-regular uppercase tracking-wide px-5 py-3 rounded-lg transition-colors duration-200"
            >
              Visit Showroom
            </Link>
            {/* <Link
              href="/account"
              onClick={() => setMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-[#914D00] text-white flex items-center justify-center shrink-0"
              aria-label="Account"
            >
              <User size={18} />
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
