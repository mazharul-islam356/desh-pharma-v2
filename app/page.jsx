"use client";

import OurServices from "./Home/OurServices";
import FAQ from "./Home/FAQ";
import Footer from "./Home/Footer";
import WhyChoseUs from "./Home/WhyChoseUs";
import Commitment from "./Home/Commitment";
import HelthTips from "./Home/HelthTips";
import Contact from "./Home/Contact";

export default function Home() {
  return (
    <main>
      <div className="">
        <OurServices></OurServices>
        <WhyChoseUs></WhyChoseUs>
       
        <Commitment></Commitment>
        <FAQ></FAQ>
        <Contact></Contact>
        
      </div>
    </main>
  );
}
