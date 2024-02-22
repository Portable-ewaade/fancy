import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section4 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      delay: 100,
    });
  }, []);
  return (
    <section className="grid_container bg-color relative pb-16 text-lg py-10">
      <main className="wrapper container mx-auto box-sec" data-aos="fade-down">
        <div className="">
          <h1 className="font-extrabold text-color text-center text-3xl my-12">
            Our Approach to Behavioral Health
          </h1>
          <p className="font-normal text-[1.1rem] mt-8 tracking-wide">
            At MHRI, our approach blends predictive analytics, robust research
            methodologies, and collaborative partnerships. We use data-driven
            insights to create impactful interventions tackling behavioral
            health challenges.
          </p>
          <p className="font-normal mt-8 text-[normal] tracking-wide">
            Integrating technology and research, we develop personalized
            interventions that adapt to individual needs. Collaboration with
            diverse stakeholders ensures cultural sensitivity and practicality
            in our solutions.
          </p>
        </div>

        <div className="push">
          <img
            src="/assets/home-img2.png"
            alt="home image"
            className="mx-auto pt-10 pb-10  hidden md:block"
          />

          <img
            src="/assets/mobile-home-img-2.png"
            alt="home image"
            className="mx-auto pt-10 md:hidden"
          />
        </div>

        <div className="absolute md:-end-10 end-2 md:top-10 top-5">
          <img
            src="/assets/small-star.png"
            alt="logo"
            className="md:w-[30px] w-[35px]"
          />
        </div>
        <div className="absolute md:-start-12 md:inset-y-1/2 start-1 bottom-2">
          <img
            src="/assets/small-star.png"
            alt="logo"
            className="md:w-[30px] w-[35px]"
          />
        </div>
      </main>
    </section>
  );
};

export default Section4;
