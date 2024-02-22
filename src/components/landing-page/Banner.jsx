import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <section className="grid_container md:h-[45rem] h-auto">
      <main className="container mx-auto wrapper ">
        <div className="grid grid-cols-1 relative">
          <div data-aos="fade-up-right" className="mt-20 pt-20">
            <div className="md:text-center md:pt-20 px-5 lg:me-10 ">
              <h1 className=" md:text-5xl text-4xl font-extrabold text-color-banner md:pt-20 leading-tight md:leading-tight tracking-wide">
                Transforming <br className="block md:hidden" />
                <span className="text-color2"> mental health</span> with
                <br className="hidden md:block" />
                <span className="text-color2"> predictive</span> analytics.
              </h1>
              <p className="text-xl mt-5 tracking-wide font-normal">
                Personalized interventions for growth and resilience.
              </p>
            </div>
            <div className="animate__animated animate__bounce animate__infinite animate__slower md:hidden">
              <img src="/assets/mobile-big-logo.png" alt="logo" />
            </div>
          </div>

          <div className="roll absolute end-0 top-20 mt-10 hidden md:block">
            <img
              src="/assets/big-logo.png"
              alt="logo"
              className=""
              width={350}
            />
          </div>

          <div className="absolute start-0 top-10">
            <img
              src="/assets/blue-left.png"
              alt="logo"
              className="md:w-[550px] w-[250px]"
            />
          </div>
          <div className="absolute end-0 top-10">
            <img
              src="/assets/blue-right.png"
              alt="logo"
              className="md:w-[550px] w-[250px]"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Banner;
