import React from "react";

const Section4 = () => {
  return (
    <section className="grid_container bg-[#CCF0FF] relative md:pb-16 ">
      <main className="wrapper box-sec">
        <h1 className="font-extrabold text-color text-center text-3xl my-16">
          Clinical Research Consulting
        </h1>

        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            Clinical Study Guidance Services
          </h3>
          <p className="font-medium text-lg">
            Our clinical research consulting specializes in expert guidance for
            conducting clinical studies, ensuring regulatory compliance, and
            maximizing research effectiveness.
          </p>
        </div>
        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            Expert Assistance for Healthcare Studies
          </h3>
          <p className="font-medium text-lg">
            We offer help and expertise in carrying out studies related to
            healthcare, ensuring they follow rules and use the best methods to
            get accurate results.
          </p>
        </div>

        <div className="absolute end-0 top-0 z-0">
          <img
            src="/assets/half-circle-right-white.png"
            alt="logo"
            className="md:w-[90px] w-[40px]"
            // width={90}
          />
        </div>

        <div className="absolute md:end-20 end-5 bottom-3 md:top-3/4 z-0">
          <img
            src="/assets/small-white-circle.png"
            alt="logo"
            className="md:w-[25px] w-[20px]"
            // width={25}
          />
        </div>
        <div className="absolute md:start-1/4 top-10 z-0">
          <img
            src="/assets/small-white-circle.png"
            alt="logo"
            className="md:w-[25px] w-[20px]"
            // width={25}
          />
        </div>
      </main>
    </section>
  );
};

export default Section4;
