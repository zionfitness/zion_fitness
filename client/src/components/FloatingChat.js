// "use client";

// import React from "react";
// import { MessageCircle } from "lucide-react";

// const FloatingChat = () => {
//   return (
//     <a
//       href="/contact-us#form"
//       aria-label="Open chat"
//       className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 rounded-full bg-[#F28C28] hover:bg-[#d9791d] flex items-center justify-center text-white shadow-lg transition-colors duration-200"
//     >
//       <MessageCircle size={20} />
//     </a>
//   );
// };

// export default FloatingChat;


"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

const FloatingChat = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const whatsappMessage = `
    Hi Zion Fitness Team,

    I’m contacting you through your website and I’m interested in your fitness equipment.

    Please share the available products, pricing, and other details.

    Thank you.
    `;

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-4 lg:right-6 sm:bottom-8 z-50 flex flex-col gap-3 transition-all duration-500 ease-out ${
        isFooterVisible
          ? "translate-y-10 opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* WhatsApp */}
      <a
        href={`https://wa.me/919940159616?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call */}
      <a
        href="tel:+919940159616"
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-110"
      >
        <FaPhoneAlt size={18} />
      </a>

      {/* Contact */}
      <a
        href="/contact-us#form"
        aria-label="Contact us"
        className="w-12 h-12 rounded-full bg-[#F28C28] hover:bg-[#d9791d] flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-110"
      >
        <MdContactSupport size={25} />
      </a>
    </div>
  );
};

export default FloatingChat;