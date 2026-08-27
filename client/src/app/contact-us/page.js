import React from "react";
import Banner from "./Components/Banner";
import Stats from "../HomePage/Components/Stats";
import CTASection from "../HomePage/Components/CTASection";
import WhyChoose from "./Components/WhyChoose";
import Visit from "./Components/Visit";
import Form from "./Components/Form";
// import { FormIcon } from "lucide-react";

const page = () => {
  return (
    <div>
      <Banner />
      <Stats />
      <Form />
      <WhyChoose />
      <Visit />

      <CTASection
        heading="Ready to Find the Right Equipment?"
        description="Whether you're building a home gym, commercial fitness centre or a dedicated workout space, our team is ready to help you choose the right equipment."
        primaryButton={{
          text: "EXPLORE EQUIPMENT",
          href: "/equipment",
          icon: "ArrowRight",
        }}
        secondaryButton={{
          text: "CONTACT US",
          href: "#form",
          icon: "Phone",
        }}
      />
    </div>
  );
};

export default page;