import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="grid-container text-lg relative">
      <div className="wrapper box-sec py-5 ">
        <div className="md:grid grid-cols-4">
          <div className="md:grid col-span-2">
            <Link href="/">
              <img
                src="/assets/nav-logo.png"
                alt="a & co"
                className="h-16 mt-6"
              />
            </Link>
            <p className="font-light md:font-semibold text-sm text-color">
              Transforming behavioral
              <br /> health.
            </p>
            <Link
              href="mailto:marvellous@motivhealth.org"
              className="text-sm text-color"
            >
              marvellous@motivhealth.org
            </Link>
          </div>

          <div className="">
            <ul>
              <h6 className="font-extrabold mt-8 mb-4 text-color"> Company</h6>
            </ul>
            <ul className="my-3">
              <Link
                href="/contact-us"
                className="font-light hover:text-[#0A0A8C]"
              >
                Contact Us
              </Link>
            </ul>
            <ul className="my-3">
              <Link href="/about" className="font-light hover:text-[#0A0A8C]">
                About Us
              </Link>
            </ul>
            <ul>
              <Link
                href="/services"
                className="font-light hover:text-[#0A0A8C]"
              >
                Services
              </Link>
            </ul>
          </div>
          <div className="">
            <ul>
              <h6 className="font-extrabold mt-8 mb-4 text-color"> Connect</h6>
            </ul>
            <ul className="my-3">
              <Link href="#" className="font-light hover:text-[#0A0A8C]">
                Instagram
              </Link>
            </ul>
            <ul className="my-3">
              <Link href="#" className="font-light hover:text-[#0A0A8C]">
                Twitter
              </Link>
            </ul>
            <ul>
              <Link href="#" className="font-light hover:text-[#0A0A8C]">
                Linkedln
              </Link>
            </ul>
          </div>
        </div>

        <div className="hidden md:block absolute end-0 md:inset-y-1/4 inset-y-1/2 animate__animated animate__bounce animate__infinite infinite">
          <img
            src="/assets/contact-big-logo.png"
            alt=""
            className="md:w-60 w-40"
          />
        </div>

        <div className="text-center text-xs mb-1 md:mt-20 mt-10 tracking-wide">
          &copy; 2024 Motive Health Research Initiative. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
