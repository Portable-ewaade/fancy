import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="relative z-0 pb-16 bg-white grid_container">
      <main className="container mx-auto wrapper box-sec">
        <div className="z-10 mb-10" div data-aos="fade-up">
          <h1 className="mt-12 mb-4 text-3xl font-extrabold text-center text-color">
            Versatile <span className="text-color2">Partnership</span> Options
          </h1>
          <p className="mx-auto text-lg md:text-center md:w-2/3">
            We offer flexible contract vehicles designed to meet the diverse
            needs of our clients, enabling seamless collaboration and access to
            our expertise in mental health consulting, research, and innovative
            interventions.
          </p>
        </div>

        {/*  section 1 mobile and laptop view */}

        <div className="pb-10 md:flex md:my-12 ">
          <div className="flex-1 md:mt-16" data-aos="fade-up-right">
            <h3 className="my-3 text-2xl font-bold">Service Agreement</h3>
            <p className="text-lg md:w-4/5">
              Our service agreements are tailored to accommodate specific
              project needs, whether short-term or long-term. We collaborate
              closely with clients to develop comprehensive strategies, conduct
              research, design interventions, and deliver measurable outcomes
              aligned with their goals.
            </p>
          </div>
          <div className="flex mt-6 md:mt-2" data-aos="fade-down-left">
            <img
              src="/assets/contract-img1.png"
              className="w-[500px]"
              alt="contract-image1"
            />
          </div>
        </div>

        {/*  section 2 laptop view */}

        <div className="hidden pb-10 my-12 md:flex">
          <div className="flex-1" data-aos="fade-up-right">
            <img
              src="/assets/contract-img2.png"
              className="w-[520px]"
              alt="contract-image1"
            />
          </div>
          <div className="flex-1 mt-16" data-aos="fade-down-left">
            <h3 className="my-3 text-2xl font-bold">Grants and Funding</h3>
            <p className="text-lg w-6/7">
              MHRI actively pursues grants and funding opportunities to support
              groundbreaking research and interventions in behavioral health.
              Collaborating with us through grant-funded projects allows for
              mutually beneficial partnerships aimed at advancing mental health
              initiatives.
            </p>
          </div>
        </div>

        {/* section 2 mobile view */}
        <div className="block md:hidden">
          <div className="mb-6">
            <h3 className="my-3 text-2xl font-bold">Grants and Funding</h3>
            <p className="text-lg">
              MHRI actively pursues grants and funding opportunities to support
              groundbreaking research and interventions in behavioral health.
              Collaborating with us through grant-funded projects allows for
              mutually beneficial partnerships aimed at advancing mental health
              initiatives.
            </p>
          </div>
          <div className="">
            <img
              src="/assets/contract-img2.png"
              className="w-[500px]"
              alt="contract-image1"
            />
          </div>
        </div>

        {/*  section 3 laptop and mobile view  */}
        <div className="my-12 md:flex">
          <div className="z-10 flex-1 mt-16" data-aos="fade-up-right">
            <h3 className="my-3 text-2xl font-bold">Consultancy Contracts</h3>
            <p className="md:w-3/4 text-[1.09rem]">
              Engage our team through consultancy contracts to access our
              expertise in mental health research, data analytics, intervention
              development, and program evaluation. Our consultants work closely
              with clients to offer tailored solutions and strategic guidance.
            </p>
          </div>
          <div className="z-10 flex mt-6 md:mt-0" data-aos="fade-up-right">
            <img
              src="/assets/contract-img3.png"
              className="w-[500px] z-10"
              alt="contract-image1"
            />
          </div>
        </div>

        {/*  section 4 laptop view  */}

        <div className="hidden pb-10 my-12 md:flex" data-aos="fade-up-right">
          <div className="flex-1 ">
            <img
              src="/assets/contract-img4.png"
              className="w-[520px]"
              alt="contract-image1"
            />
          </div>
          <div className="flex-1 mt-16" data-aos="fade-up-left">
            <h3 className="my-3 text-2xl font-bold">
              Government Contracts and RFPs
            </h3>
            <p className="text-lg w-6/7 ">
              We actively pursue government contracts and respond to Requests
              for Proposals (RFPs) related to mental health research, innovative
              interventions, and policy development. Partnering with us on
              government contracts enables impactful contributions to mental
              health initiatives.
            </p>
          </div>
        </div>

        {/*  section 4 mobile view  */}
        <div className="block my-12 md:hidden">
          <div className="mt-16">
            <h3 className="my-3 text-2xl font-bold">
              Government Contracts and RFPs
            </h3>
            <p className="text-[1.15rem] ">
              We actively pursue government contracts and respond to Requests
              for Proposals (RFPs) related to mental health research, innovative
              interventions, and policy development. Partnering with us on
              government contracts enables impactful contributions to mental
              health initiatives.
            </p>
          </div>
          <div className="mt-6">
            <img
              src="/assets/contract-img4.png"
              className="w-[500px]"
              alt="contract-image1"
            />
          </div>
        </div>

        {/* section 5 laptop and mobile */}
        <div className="md:flex md:my-12 md:pb-5" data-aos="fade-up-right">
          <div className="flex-1 md:mt-16">
            <h3 className="my-3 text-2xl font-bold">
              Customized Contracting Solutions
            </h3>
            <p className="text-lg md:w-4/5">
              Recognizing the diverse needs of our clients, MHRI offers
              customized contracting solutions. We collaborate with clients to
              tailor contract vehicles that best suit their requirements,
              ensuring a smooth and productive engagement.
            </p>
          </div>
          <div className="flex mt-6 md:mt-0" data-aos="fade-up-left">
            <img
              src="/assets/contract-img5.png "
              className="w-[500px] z-10"
              alt="contract-image1"
            />
          </div>
        </div>

        {/* absolute images */}
        <div className="absolute top-0 z-0 start-0">
          <img
            src="/assets/half-circle-left.png"
            alt="logo"
            className="md:w-[140px] w-[25px]"
            width={140}
          />
        </div>
        <div className="absolute md:end-5 end-2 md:inset-y-7 top-3">
          <img
            src="/assets/small-circle.png"
            alt="logo"
            className="md:w-[50px] w-[30px]"
                      />
        </div>
        <div className="absolute md:start-5 start-2 md:inset-y-1/3 inset-y-1/2 md:mt-64 mt-96 pt-7 ">
          <img
            src="/assets/small-circle.png"
            alt="logo"
            className="md:w-[45px] w-[25px]"
                      />
        </div>
        <div className="absolute end-0 md:inset-y-1/3 inset-y-1/3 mt-96 md:mt-10">
          <img
            src="/assets/half-cicle-right.png"
            alt="logo"
            className="md:w-[180px] w-[35px] z-0"
                      />
        </div>
        <div className="absolute end-5 bottom-7">
          <img
            src="/assets/small-circle.png"
            alt="design"
            className="md:w-[50px] w-[30px]"
                      />
        </div>
        <div className="absolute bottom-0 half-circle start-0 md:bottom-10">
          <img
            src="/assets/half-circle-left.png"
            alt="design"
            className="md:w-[95px] w-[30px]"
                      />
        </div>
      </main>
    </section>
  );
};

export default Section2;
