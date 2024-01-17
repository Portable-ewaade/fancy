import React from "react";
import { Footer, Navbar } from "@/components/common";
import { Banner, Section2, Section3, Section4, Section5 } from "@/components/about-us";

const index = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  );
};

export default index;
