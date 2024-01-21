import React from "react";

const Section3 = () => {
  return (
    <section className="grid_container bg-white relative pb-16 text-lg">
      <main className="wrapper box-sec">
        <div className="">
          <h1 className="font-extrabold text-color text-center md:text-3xl text-2xl my-16">
            Tailored Comprehensive Solutions
          </h1>
          <div className="md:flex my-12 ">
            <div className="flex-1 ">
              <h3 className="font-bold text-xl my-3">
                Research Project Management
              </h3>
              <p className="w-5/6">
                Skillful oversight of AI/ML and behavioral health research
                initiatives.
              </p>
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <h3 className="font-bold text-xl my-3">Consulting Solution</h3>
              <p className="w-6/7">
                Strategic guidance and expert advice for data-driven innovations
                in mental health.
              </p>
            </div>
          </div>

          <div className="md:flex md:my-12 ">
            <div className="flex-1">
              <h3 className="font-bold text-xl my-3">
                Healthcare Technology Consulting
              </h3>
              <p className="w-5/6">
                Implementing technology solutions for improved healthcare
                delivery and efficiency.
              </p>
            </div>
            <div className="flex-1 mt-6 md:my-0">
              <h3 className="font-bold text-xl my-3">
                Clinical Research Services
              </h3>
              <p className="w-5/6">
                Expert guidance to ensure compliant and effective clinical
                studies' success.
              </p>
            </div>
          </div>

          <div className="md:flex my-12">
            <div className="flex-1">
              <h3 className="font-bold text-xl my-3">
                AI/ML Research and Development
              </h3>
              <p>Exploring innovative AI/ML for mental health solutions.</p>
            </div>
            <div className="flex-1 mt-10">
              <a
                href="/about"
                className=" text-color font-extrabold text-lg underline underline-offset-4">
                See more details about our services
              </a>
            </div>
          </div>
        </div>

        <div className="absolute start-0 top-0 z-1">
          <img
            src="/assets/half-circle-left.png"
            alt="logo"
            className="md:w-[140px] w-[100px]"
            // width={140}
          />
        </div>
        <div className="absolute end-0 md:inset-y-1/2 bottom-0">
          <img
            src="/assets/half-cicle-right.png"
            alt="logo"
            className="w-[80px]"
            // width={80}
          />
        </div>
      </main>
    </section>
  );
};

export default Section3;
