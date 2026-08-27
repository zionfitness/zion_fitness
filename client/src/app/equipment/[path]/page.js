import React from "react";
import Versatility from "../ProductDetails/Versatility";
import Precision from "../ProductDetails/Precision";
import Strength from "../ProductDetails/Strength";
import Guaranteed from "../ProductDetails/Guaranteed";
import YourSuite from "../ProductDetails/YourSuite";
import Faq from "../ProductDetails/Faq";
import AboutCTA from "@/app/about-us/Components/AboutCTA";
import { cloudinary } from "@/assets/Cloudinary";
import ProductDetails from "../ProductDetails/ProductDetails";
const ShowroomImg = cloudinary.about.hero;

const page = () => {
  return (
    <div>
      <ProductDetails />
      <Versatility />
      <Precision />
      <Strength />
      <Guaranteed />
      <YourSuite />
      <Faq />
      <AboutCTA
        heading="Interested in This Equipment?"
        description="Our team is ready to help you understand the equipment, compare available options and choose the right solution for your fitness space."
        backgroundImage={ShowroomImg}
        buttons={[
          { label: "Visit Showroom", href: "/contact-us", variant: "solid" },
          { label: "Send Enquiry", href: "/contact-us", variant: "dark" },
          { label: "Call Now", href: "tel:+919940159616", variant: "outline" },
        ]}
      />
    </div>
  );
};

export default page;
