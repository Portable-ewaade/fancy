import React from "react";
import { FooterBlue, Navbar } from "@/components/common";
import {
  Banner,
  Section2,
  Section3,
  Section4,
  Section5,
} from "@/components/services";

const index = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <FooterBlue />
    </main>
  );
};

export default index;
