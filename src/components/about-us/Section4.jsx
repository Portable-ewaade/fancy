import React, { useEffect } from "react";
import TrackVisibility from "react-on-screen";
import AOS from "aos";
import "aos/dist/aos.css";
const Section4 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section
      className="grid_container pb-12 relative text-lg "

    >
      <main className="wrapper box-sec">
        <div className="" data-aos="fade-up">
          <h1 className="font-extrabold text-color text-center text-4xl my-10">
            Our Objectives
          </h1>
        </div>

        <div className="md:grid grid-rows-4 grid-flow-col gap-4">
          <div className="my-9 md:my-2"  data-aos="fade-up">
            <h3 className="font-bold text-2xl my-2">
              Conducting Cutting-edge Research
            </h3>
            <p className="md:w-5/6 md:text-lg lg:text-lg" data-aos="fade-down">
              MHRI is deeply committed to pioneering research in Artificial
              Intelligence/Machine Learning and behavioral health. We use
              innovative methods and technology to uncover insights and create
              proven interventions for mental health challenges.
            </p>
          </div>
          <div className="my-9 md:my-2"  data-aos="fade-up">
            <h3 className="font-bold text-2xl my-2">
              Developing Innovative Interventions
            </h3>
            <p className="md:w-5/6 md:text-lg lg:text-lg" data-aos="fade-down">
              We specialize in developing groundbreaking interventions. Using
              predictive analytics, we offer personalized support tailored to
              individual needs. Our aim is to provide adaptable solutions for
              diverse needs, fostering lasting recovery and well-being.
            </p>
          </div>
          <div className="my-9 md:my-2" data-aos="fade-up">
            <h3 className="font-bold text-2xl my-2">Community Partnerships</h3>
            <p className="md:w-5/6 md:text-lg" data-aos="fade-down">
              We work closely with shelters, rehab centers, mental health
              services, and policymakers. These collaborations strengthen our
              research and interventions, making sure they meet community needs
              with practicality and cultural sensitivity.
            </p>
          </div>
          <div className="my-9 md:my-2">
            <h3 className="font-bold text-2xl my-2">
              Addressing Social Determinants of Health
            </h3>
            <p className="md:w-5/6 md:text-lg lg:text-lg" data-aos="fade-down">
              At MHRI, we focus on identifying and lessening social factors
              impacting well-being. Our aim is to reduce health disparities and
              promote fairer healthcare outcomes by understanding these
              determinants thoroughly.
            </p>
          </div>
        </div>

        {/* absolute images */}
        <div className="absolute start-0 top-0">
          <img
            src="/assets/dark-blue-left.png"
            alt="logo"
            className="md:w-[500px] w-[250px]"
            // width={500}
          />
        </div>
        <div className="absolute end-0 top-0">
          <img
            src="/assets/dark-blue-right.png"
            alt="logo"
            className="md:w-[500px] w-[250px]"
            // width={500}
          />
        </div>

        <div className="absolute md:end-10 end-2 md:bottom-1/3 bottom-5">
          <img
            src="/assets/small-star.png"
            alt="logo"
            className="md:w-[30px] w-[35px]"
            // width={30}
          />
        </div>
        <div className="absolute md:start-5 start-0 md:top-10 top-5">
          <img
            src="/assets/dark-blue-star.png"
            alt="logo"
            className="md:w-[30px] w-[35px]"
          />
        </div>
        <div className="absolute end-0 bottom-0">
          <img
            src="/assets/dark-blue-btm.png"
            alt="logo"
            className="md:w-[600px] w-[250px]"
          />
        </div>
      </main>
    </section>
  );
};

export default Section4;
