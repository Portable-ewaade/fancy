import React from "react";

const Section3 = () => {
  return (
    <section className="grid_container bg-white relative pb-16 ">
      <main className="wrapper box-sec">
        <div className="">
          <h1 className="font-extrabold text-color text-center text-3xl my-16">
            Tailored Comprehensive Solutions
          </h1>
          <div className="flex my-12 ">
            <div className="flex-1">
              <h3 className="font-bold text-xl my-2">
                Research Project Management
              </h3>
              <p>
                Skillful oversight of AI/ML and behavioral health research
                initiatives.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl my-2">Consulting Solution</h3>
              <p>
                Strategic guidance and expert advice for data-driven innovations
                in mental health.
              </p>
            </div>
          </div>

          <div className="flex my-12 ">
            <div className="flex-1">
              <h3 className="font-bold text-xl my-2">
                Healthcare Technology Consulting
              </h3>
              <p>
                Implementing technology solutions for improved healthcare
                delivery and efficiency.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl my-2">
                Clinical Research Services
              </h3>
              <p>
                Expert guidance to ensure compliant and effective clinical
                studies' success.
              </p>
            </div>
          </div>

          <div className="flex my-12">
            <div className="flex-1">
              <h3 className="font-bold text-xl my-2">
                AI/ML Research and Development
              </h3>
              <p>Exploring innovative AI/ML for mental health solutions.</p>
            </div>
            <div className="flex-1 mt-10">
              <a
                href="#"
                className=" text-color font-extrabold text-xs underline underline-offset-4"
              >
                See more details about our services
              </a>
            </div>
          </div>
        </div>

        <div className="absolute start-0 top-0 z-1">
          <img
            src="/assets/half-circle-left.png"
            alt="logo"
            className=""
            width={140}
          />
        </div>
        <div className="absolute end-0 inset-y-1/2">
          <img
            src="/assets/half-cicle-right.png"
            alt="logo"
            className=""
            width={80}
          />
        </div>
      </main>
    </section>
  );
};

export default Section3;
