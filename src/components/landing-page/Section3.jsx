import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section3 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
            delay: 100,
    });
  }, []);

  return (
    <section className="grid_container bg-white relative pb-16 text-lg">
      <main className="wrapper container mx-auto box-sec">
        <div className="" data-aos="fade-up">
          <h1 className="font-extrabold text-color text-center md:text-3xl text-2xl my-16">
            Tailored Comprehensive Solutions
          </h1>

          <div className="md:flex md:my-12 mt-12 mb-8">
            <div className="flex-1 ">
              <h3 className="font-bold md:text-xl my-3">
                Healthcare Technology Consulting <br className="hidden md:block" /> and Assistance
              </h3>
              <p className="md:w-5/6">
                Implementing technology solutions for improved healthcare
                delivery and efficiency.
              </p>
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <h3 className="font-bold md:text-xl mb-4 mt-3">
                Research Project Management
              </h3>
              <p className="md:w-6/7 mt-3">
                Skillful oversight of AI/ML and behavioral health <br className="hidden md:block" /> research
                initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:my-0" data-aos="fade-up">
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
              Expert guidance to ensure compliant and effective clinical studies
              success.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-5 md:mb-10">
          <Link
            href="/services"
            className=" text-color font-extrabold text-sm underline underline-offset-4 hover:text-[#0A0A8C]"
          >
            See more details about our services
          </Link>
        </div>

        <div className="absolute start-0 top-0 z-1">
          <img
            src="/assets/half-circle-left.png"
            alt="logo"
            className="md:w-[95px] w-[43px]"
                      />
        </div>
        <div className="absolute end-0 md:inset-y-1/2 bottom-0">
          <img
            src="/assets/half-cicle-right.png"
            alt="logo"
            className="md:w-[80px] w-[40px]"
                      />
        </div>
      </main>
    </section>
  );
};

export default Section3;
