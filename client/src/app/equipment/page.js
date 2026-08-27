"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import AboutCTA from "../about-us/Components/AboutCTA";
import { cloudinary } from "@/assets/Cloudinary";
import Guidance from "./Components/Guidance";
import Banner from "./Components/Banner";
import ProjectsShowcase from "./Components/ProductsShowcase";

const ShowroomImg = cloudinary.about.hero;

const Equipment = () => {
  const searchParams = useSearchParams();

const [search, setSearch] = useState("");

const [category, setCategory] = useState(
  searchParams.get("category") || "All Equipment"
);

  return (
    <div>
      <Banner
        searchValue={search}
        onSearchChange={setSearch}
        activeCategory={category}
        onCategoryChange={setCategory}
      />

      <ProjectsShowcase
        search={search}
        category={category}
      />

      <Guidance />

      <AboutCTA
        heading="Ready to Build Your Fitness Space?"
        description="Visit our showroom and experience our equipment before making your decision. Explore and compare treadmills, ellipticals, orbitracks, exercise bikes, spin bikes and home-gym equipment in person."
        backgroundImage={ShowroomImg}
        buttons={[
          {
            label: "Visit Showroom",
            href: "/contact-us",
            variant: "solid",
          },
          {
            label: "Contact Us",
            href: "/contact-us",
            variant: "outline",
          },
        ]}
      />
    </div>
  );
};

export default Equipment;