import React from "react";
import { FooterBlue, Navbar } from "@/components/common";
import {
  Banner,
  Section2,
} from "@/components/contracts";

const index = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Section2 />
      <FooterBlue />
    </main>
  );
};

export default index;
