import React from "react";

const Section5 = () => {
  return (
    <section className="grid_container bg-color2 relative  text-white text-lg">
      <main className="wrapper box-sec">
        <div className="flex">
          <div className="flex-1 mt-20 pt-10">
            <h1 className="font-extrabold text-3xl mt-20 mb-5">
              Our Impact and Commitment
            </h1>
            <p className="font-normal mt-5 tracking-wide md:w-3/5 ">
              Aligned with our mission, vision, and objectives, MotivHealth
              Research Initiative is committed to making a meaningful impact on
              the lives of individuals facing mental health challenges. We
              endeavor to promote health equity, eliminate disparities, and
              ensure equal opportunities for optimal health, particularly for
              vulnerable and underserved populations.
            </p>
          </div>

          <div className="flex mt-7 absolute end-0">
            <img
              src="/assets/big-logo-white.png"
              alt="home image"
              className=""
              width={450}
            />
          </div>
        </div>

        <div>
          <div className=" pt-10 pb-14">
            <h1 className="font-extrabold text-3xl mt-20 mb-5">
              Our Core Values
            </h1>
            <p className="font-normal mt-5 tracking-wide md:w-3/5 ">
              Our identity is forged upon three core values.
            </p>
          </div>

          <div className="pb-10 ">
            <div className="flex">
              <div className="flex-1 my-8 me-8 p-5 shadow-lg bg-white text-black rounded-lg">
                <h1 className="text-color text-2xl font-bold mt-1">
                  Innovation
                </h1>
                <p className="mt-1">
                  We're committed to fostering a culture of constant innovation.
                  We explore groundbreaking methods, push technology and
                  research boundaries, aiming for transformative change.
                </p>
              </div>
              <div className="flex-1 m-8 p-5 shadow-lg bg-white text-black rounded-lg">
                <h1 className="text-color text-2xl font-bold mt-2">
                  Collaboration
                </h1>
                <p className="mt-2">
                  We believe in working closely with diverse partners,
                  healthcare providers, researchers, policymakers, and community
                  groups, to create powerful solutions together
                </p>
              </div>
              <div className="flex-1 m-8 p-5 shadow-lg bg-white text-black rounded-lg">
                <h1 className="text-color text-2xl font-bold mt-2">
                  Compassion
                </h1>
                <p className="mt-2">
                  At the core of our approach is compassion. We prioritize
                  empathy, infusing our initiatives with a deeply human-centric
                  focus to ensure effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Section5;
