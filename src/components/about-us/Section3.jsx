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
    <section className="relative text-lg bg-white md:pb-16 pb-7">
      <main className="container w-[90%] mx-auto py-5">
        <div className="my-12 md:flex">
          <div className="flex-1" data-aos="fade-up-right">
                  <h3 className="mt-2 mb-1 text-3xl font-extrabold text-center text-color2 md:text-2xl md:text-start">
                    Our Mission
                  </h3>
                  <hr className="text-color2 md:w-1/2 w-3/4 border-[0.1rem] border-[#00B4FE] mb-4 mx-auto md:mx-0 " />
                  <p className="md:w-11/12">
                    MHRI embodies compassion, innovation, and scientific rigor at the
              forefront. We prioritize predictive analytics as a pivotal force,
              shaping the future of mental healthcare. This approach drives our
              relentless pursuit of groundbreaking solutions, redefining
              behavioral health interventions and policy development paradigms.
                  </p>
                </div>

                <div className="flex-1 mt-16 md:ms-2 md:my-0" data-aos="zoom-in-up">
                  <h3 className="mt-2 mb-1 text-3xl font-extrabold text-center text-color2 md:text-2xl md:text-start">
                    Our Vision
                  </h3>
                  <hr className="text-color2 md:w-1/2 w-3/4 border-[0.1rem] border-[#00B4FE] mb-4 mx-auto md:mx-0 " />
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
