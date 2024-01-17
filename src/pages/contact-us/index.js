import React from "react";
import { FooterBlue, Navbar } from "@/components/common";
import { Banner, ContactForm } from "@/components/contact-us";

const index = () => {
  return (
    <main>
      <Navbar />
      <Banner />
    <ContactForm /> 
      <FooterBlue />
    </main>
  );
};

export default index;
