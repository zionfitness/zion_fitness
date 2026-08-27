import AboutZion from "./Components/AboutZion";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import CTASection from "./Components/CTASection";
import Experience from "./Components/Experience";
import Popular from "./Components/Popular";
import Stats from "./Components/Stats";
import WhyChoose from "./Components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <Stats />
      <AboutZion />
      <Category />
      <Popular />
      <WhyChoose />
      <Experience />
      <CTASection />
    </div>
  );
}
