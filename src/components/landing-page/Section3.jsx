import Link from "next/link";
import React from "react";
import TrackVisibility from "react-on-screen";

const Section3 = () => {
  return (
    <section className="grid_container bg-white relative pb-16 text-lg">
      <main className="wrapper box-sec">
        <div className="">
          <h1 className="font-extrabold text-color text-center md:text-3xl text-2xl my-16">
            Tailored Comprehensive Solutions
          </h1>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__animated animate__fadeInLeft animate__delay-0.5s animate__slower"
                    : ""
                }
              >
                <div className="md:flex md:my-12 mt-12 mb-8">
                  <div className="flex-1 ">
                    <h3 className="font-bold md:text-xl my-3">
                      Healthcare Technology Consulting <br /> and Assistance
                    </h3>
                    <p className="md:w-5/6">
                      Implementing technology solutions for improved healthcare
                      delivery and efficiency.
                    </p>
                  </div>
                  <div className="flex-1 mt-6 md:mt-0">
                    <h3 className="font-bold md:text-xl my-3">
                      Research Project Management
                    </h3>
                    <p className="md:w-6/7">
                      Skillful oversight of AI/ML and behavioral health research
                      initiatives.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>

          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__animated animate__fadeInRight animate__delay-0.5s animate__slower"
                    : ""
                }
              >
                <div className="md:flex md:my-12 ">
                  <div className="flex-1">
                    <h3 className="font-bold md:text-xl my-3">
                      AI/ML Research and Development
                    </h3>
                    <p className="md:w-5/6">
                      Exploring innovative AI/ML for mental health solutions.
                    </p>
                  </div>
                  <div className="flex-1 mt-6 md:my-0">
                    <h3 className="font-bold md:text-xl my-3">
                      Clinical Research Services
                    </h3>
                    <p className="md:w-5/6">
                      Expert guidance to ensure compliant and effective clinical
                      studies success.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
          <div className="flex-1 mt-5 md:mb-10">
            <Link
              href="/services"
              className=" text-color font-extrabold text-sm underline underline-offset-4 hover:text-[#0A0A8C]"
            >
              See more details about our services
            </Link>
          </div>
        </div>

        <div className="absolute start-0 top-0 z-1">
          <img
            src="/assets/half-circle-left.png"
            alt="logo"
            className="md:w-[95px] w-[43px]"
            // width={140}
          />
        </div>
        <div className="absolute end-0 md:inset-y-1/2 bottom-0">
          <img
            src="/assets/half-cicle-right.png"
            alt="logo"
            className="md:w-[80px] w-[40px]"
            // width={80}
          />
        </div>
      </main>
    </section>
  );
};

export default Section3;
