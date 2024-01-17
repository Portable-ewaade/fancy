import React from "react";

const Section3 = () => {
  return (
    <section className="grid_container bg-white relative pb-16 text-lg ">
      <main className="wrapper box-sec">
        <div className="md:flex my-12 ">
          <div className="flex-1">
            <h3 className="text-color2 font-extrabold text-2xl mt-2 mb-1">
              Our Mission
            </h3>
            <hr className="text-color2 w-1/2 border-[0.1rem] border-[#00B4FE] mb-4" />
            <p className="md:w-11/12">
              MHRI embodies compassion, innovation, and scientific rigor at the
              forefront. We prioritize predictive analytics as a pivotal force,
              shaping the future of mental healthcare. This approach drives our
              relentless pursuit of groundbreaking solutions, redefining
              behavioral health interventions and policy development paradigms.
            </p>
          </div>
          <div className="flex-1 md:ms-14">
            <h3 className=" text-color2 font-extrabold text-2xl mt-2 mb-1">
              Our Vision
            </h3>
            <hr className="text-color2 w-1/2 border-[0.1rem] border-[#00B4FE] mb-4" />
            <p className="md:w-11/12">
              We envision a future where predictive analytics seamlessly
              integrate into community-based services, creating an ecosystem
              that offers personalized support for individuals with behavioral
              issues. This fosters not just their well-being but also successful
              reintegration into society.
            </p>
          </div>
        </div>
       
      </main>
    </section>
  );
};

export default Section3;
