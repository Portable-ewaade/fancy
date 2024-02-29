import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" bg-[#0A0A8C] text-white text-lg ">
      <div className="container w-[90%] mx-auto py-5">
        <div className="relative grid-cols-4 md:grid">
          <div className="col-span-2 md:grid">
            <Link href="/">
              <img
                src="/assets/nav-logo-white.png"
                alt="a & co"
                className="h-16 mt-6"
              />
            </Link>
            <p className="text-sm  md:font-light lg:font-semibold">
              Transforming behavioral <br /> health.
            </p>
            <Link href="mailto:marvellous@motivhealth.org" className="text-sm">
              marvellous@motivhealth.org
            </Link>
          </div>

          <div className="">
            <ul>
              <h6 className="mt-8 mb-4 font-extrabold "> Company</h6>
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
              <h6 className="mt-8 mb-4 font-extrabold"> Connect</h6>
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
                Linkedln
              </Link>
            </ul>
          </div>
        <div className="absolute hidden md:block -end-16 md:inset-y-1/4 inset-y-1/2 bounce">
          <img
            src="/assets/big-logo-white.png"
            alt=""
            className="w-40 md:w-60"
          />
        </div>
</div>

        <div className="mt-10 mb-1 text-xs tracking-wide text-center md:mt-20">
          &copy; 2024 MotivHealth Research Initiative. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
