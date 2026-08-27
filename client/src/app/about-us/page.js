import React from "react";
import HeroSection from "./Components/HeroSection";
import OurStory from "./Components/OurStory";
import Advantage from "./Components/Advantage";
import Guidance from "./Components/Guidance";
import Quality from "./Components/Quality";
import Solution from "./Components/Solution";
import Journey from "./Components/Journey";
import AboutCTA from "./Components/AboutCTA";
import { cloudinary } from "@/assets/Cloudinary";
const ShowroomImg = cloudinary.about.hero;

const Page = () => {
  return (
    <div>
      <HeroSection />
      <OurStory />
      <Advantage />
      <Guidance />
      <Quality />
      <Solution />
      <Journey />
      <AboutCTA
        heading="Ready to Build Your Fitness Space?"
        description="Visit the Zion Fitness Equipment Store showroom in North Chennai to explore our range of treadmills, ellipticals, exercise bikes, spin bikes and home-gym equipment."
        backgroundImage={ShowroomImg}
        buttons={[
          { label: "Visit Showroom", href: "/contact-us", variant: "solid" },
          { label: "Contact Us", href: "/contact-us", variant: "outline" },
        ]}
      />
    </div>
  );
};

export default Page;
