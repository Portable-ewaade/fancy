import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="grid-container text-lg ">
      <div className="wrapper box-sec py-5 ">
        <div className="md:flex">
          <div className="flex-1">
            <Link href="/">
              <img
                src="/assets/nav-logo.png"
                alt="a & co"
                className="h-16 mt-6"
                // style={{ width: "12rem" }}
              />
            </Link>
            {/* <br /> */}
            <p className="font-semibold md:font-light text-sm text-color">
              Transforming behaviourial <br /> health.
            </p>
          </div>

          <div className="flex-1 md:ms-10">
            <div className="flex ">
              <div className="grow ">
                <ul>
                  <h6 className="font-extrabold mt-8 mb-4 text-color ">
                    {" "}
                    Terms & Privacy
                  </h6>
                </ul>
                <ul className="my-3">
                  <Link
                    href="/privacy"
                    className="font-light hover:text-[#0A0A8C]">
                    Privacy Policy
                  </Link>
                </ul>
                <ul>
                  <Link
                    href="/terms"
                    className="font-light hover:text-[#0A0A8C]">
                    Terms of Use
                  </Link>
                </ul>
              </div>
              <div className="grow lg:ms-28">
                <ul>
                  <h6 className="font-extrabold mt-8 mb-4 text-color">
                    {" "}
                    Company
                  </h6>
                </ul>
                <ul className="my-3">
                  <Link
                    href="/contact-us"
                    className="font-light hover:text-[#0A0A8C]">
                    Contact Us
                  </Link>
                </ul>
                <ul className="my-3">
                  <Link
                    href="/about"
                    className="font-light hover:text-[#0A0A8C]">
                    About Us
                  </Link>
                </ul>
                <ul>
                  <Link
                    href="/services"
                    className="font-light hover:text-[#0A0A8C]">
                    Services
                  </Link>
                </ul>
              </div>
              <div className="grow lg:ms-28">
                <ul>
                  <h6 className="font-extrabold mt-8 mb-4 text-color">
                    {" "}
                    Connect
                  </h6>
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
                    Linkedin
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs mb-1 mt-20">
          &copy; 2024 Motive Health Research Initiative. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
