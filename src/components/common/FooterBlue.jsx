import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="grid-container bg-[#0A0A8C] text-white text-lg relative">
      <div className="wrapper box-sec py-5 ">
        <div className="md:grid grid-cols-4 ">
          <div className="md:grid col-span-2">
            <Link href="/">
              <img
                src="/assets/nav-logo-white.png"
                alt="a & co"
                className="h-16 mt-6"
              />
            </Link>
            <p className=" md:font-light lg:font-semibold text-sm ">
              Transforming behaviourial <br /> health.
            </p>
            <Link href="mailto:marvellous@motivhealth.org" className="text-sm">
              marvellous@motivhealth.org
            </Link>
          </div>

          <div className="">
            <ul>
              <h6 className="font-extrabold mt-8 mb-4 "> Company</h6>
            </ul>
            <ul className="my-3">
              <Link href="/contact-us" className="font-light">
                Contact Us
              </Link>
            </ul>
            <ul className="my-3">
              <Link href="/about" className="font-light">
                About Us
              </Link>
            </ul>
            <ul>
              <Link href="/services" className="font-light">
                Services
              </Link>
            </ul>
          </div>
          <div className="">
            <ul>
              <h6 className="font-extrabold mt-8 mb-4"> Connect</h6>
            </ul>
            <ul className="my-3">
              <Link href="#" className="font-light">
                Instagram
              </Link>
            </ul>
            <ul className="my-3">
              <Link href="#" className="font-light">
                Twitter
              </Link>
            </ul>
            <ul>
              <Link href="#" className="font-light">
                Linkedin
              </Link>
            </ul>
          </div>
        </div>

        <div className="hidden md:block absolute end-0 md:inset-y-1/4 inset-y-1/2  animate__animated animate__bounce animate__infinite infinite">
          <img
            src="/assets/big-logo-white.png"
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
