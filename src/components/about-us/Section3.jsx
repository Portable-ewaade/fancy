import React from "react";
import TrackVisibility from "react-on-screen";

const Section3 = () => {
  return (
    <section className="grid_container bg-white relative md:pb-16 pb-7 text-lg ">
      <main className="wrapper box-sec">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__bounceIn animate__delay-0s animate__slow"
                  : ""
              }
            >
              <div className=" md:flex my-12 ">
                <div className="flex-1">
                  <h3 className="text-color2 font-extrabold md:text-2xl text-3xl mt-2 mb-1 text-center md:text-start">
                    Our Mission
                  </h3>
                  <hr className="text-color2 md:w-1/2 w-3/4 border-[0.1rem] border-[#00B4FE] mb-4 mx-auto md:mx-0 " />
                  <p className="md:w-11/12">
                    MHRI embodies compassion, innovation, and scientific rigor
                    at the forefront. We prioritize predictive analytics as a
                    pivotal force, shaping the future of mental healthcare. This
                    approach drives our relentless pursuit of groundbreaking
                    solutions, redefining behavioral health interventions and
                    policy development paradigms.
                  </p>
                </div>
                <div className="flex-1 md:ms-14 mt-16 md:my-0">
                  <h3 className=" text-color2 font-extrabold md:text-2xl text-3xl mt-2 mb-1 text-center md:text-start ">
                    Our Vision
                  </h3>
                  <hr className="text-color2 md:w-1/2 w-3/4 border-[0.1rem] border-[#00B4FE] mb-4 mx-auto md:mx-0 " />
                  <p className="md:w-11/12">
                    We envision a future where predictive analytics seamlessly
                    integrate into community-based services, creating an
                    ecosystem that offers personalized support for individuals
                    with behavioral issues. This fosters not just their
                    well-being but also successful reintegration into society.
                  </p>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </main>
    </section>
  );
};

export default Section3;
