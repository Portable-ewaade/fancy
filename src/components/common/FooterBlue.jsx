import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="grid-container bg-[#0A0A8C] text-white text-lg">
      <div className="wrapper box-sec py-5 ">
        <div className="md:flex">
          <div className="md:flex-1">
            <Link href="/">
              <img
                src="/assets/nav-logo-white.png"
                alt="a & co"
                className="h-16 mt-6"
                // style={{ width: "12rem" }}
              />
            </Link>
            {/* <br /> */}
            <p className=" md:font-light font-semibold text-sm ">
              Transforming behaviourial <br /> health.
            </p>
          </div>

          <div className="md:flex-1 md:ms-10">
            <div className="md:flex ">
              <div className="grow ">
                <ul>
                  <h6 className="font-extrabold mt-8 mb-4 ">
                    {" "}
                    Terms & Privacy
                  </h6>
                </ul>
                <ul className="my-3">
                  <Link href="/privacy" className="font-light">
                    Privacy Policy
                  </Link>
                </ul>
                <ul>
                  <Link href="/terms" className="font-light">
                    Terms of Use
                  </Link>
                </ul>
              </div>
              <div className="grow lg:ms-28">
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
              <div className="grow lg:ms-28">
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
          </div>
        </div>

        <div className="text-center text-xs mb-1 md:mt-20 mt-10">
          &copy; 2024 Motive Health Research Initiative. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
