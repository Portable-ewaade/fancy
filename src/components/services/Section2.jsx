import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="grid_container bg-color relative md:pb-16 pb-6">
      <main className="wrapper box-sec">
        <div className="">
          <h1 className="font-extrabold text-color text-center text-3xl my-16">
            Human and Health Services Technology <br /> Consulting
          </h1>
        </div>

        <div>
          <div className="md:w-3/5 mb-12 font-medium" data-aos="fade-down">
            <h3 className="font-bold text-xl my-2">
              Healthcare Tech Advisory and Assistance
            </h3>
            <p className="font-medium text-lg">
              MHRI offers strategic guidance, expert advice, and hands-on
              implementation of technology solutions, prioritizing
              people-centric approaches, improved healthcare delivery, enhanced
              user experiences, and operational efficiency.
            </p>
          </div>
          <div className="md:w-3/5 mb-12 font-medium" data-aos="fade-down">
            <h3 className="font-bold text-xl my-2">Consulting Solution</h3>
            <p className="font-medium text-lg">
              Our service offers expert guidance to individuals and
              organizations seeking innovative mental health solutions. We use
              data-driven insights and behavioral health expertise to provide
              strategic advice for impactful outcomes.
            </p>
          </div>
          <div className="md:w-3/5 mb-12 font-medium" data-aos="fade-down">
            <h3 className="font-bold text-xl my-2">
              Expert Advice for Better Mental Health Solution
            </h3>
            <p className="font-medium text-lg">
              We provide advice and strategic guidance to people and
              organizations looking for new and innovative solutions in mental
              health using information and expertise in behavioral health.
            </p>
          </div>
        </div>

        <div className="absolute start-0 top-0 z-0">
          <img
            src="/assets/half-circle-left.png"
            alt="logo"
            className="md:w-[90px] w-[45px]"
            // width={90}
          />
        </div>

        <div className="absolute end-10 top-5 z-0">
          <img
            src="/assets/small-star.png"
            alt="logo"
            className=""
            width={27}
          />
        </div>
        <div className="absolute start-0 md:top-2/3 inset-y-1/3 mt-24 md:mt-0 z-0">
          <img
            src="/assets/blue-star.png"
            alt="logo"
            className="md:w-[27px] w-[23px] "
            // width={27}
          />
        </div>
        <div className="absolute md:end-20 end-4 md:top-3/4 z-0">
          <img
            src="/assets/small-dark-star.png"
            alt="logo"
            className="md:w-[25px] w-[20px] "
            // width={25}
          />
        </div>
      </main>
    </section>
  );
};

export default Section2;
