import React from "react";
import TrackVisibility from "react-on-screen";
// import "animate.css";

const Banner = () => {
  return (
    <section className="grid_container relative h-screen">
      <main className="wrapper mt-20 pt-20 ">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__fadeIn animate__delay-0s"
                  : ""
              }
            >
              <div className="md:text-center md:pt-20 px-5 lg:me-10 ">
                <h1 className=" md:text-5xl text-4xl font-extrabold text-color-banner md:pt-20 leading-tight md:leading-tight tracking-wide">
                  Transforming <br className="block md:hidden" />{" "}
                  <span className="text-color2"> mental health</span> with{" "}
                  <br className="hidden md:block" />{" "}
                  <span className="text-color2">predictive</span> analytics.
                </h1>
                <p className="text-xl mt-5 tracking-wide font-normal">
                  Personalized interventions for growth and resilience.
                </p>

                <div className="animate__animated animate__bounce animate__infinite md:hidden">
                  <img src="/assets/mobile-big-logo.png" alt="logo" />
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>

        <div className="roll absolute end-0 top-20 mt-10 hidden md:block">
          <img src="/assets/big-logo.png" alt="logo" className="" width={350} />
        </div>

        <div className="absolute start-0 top-10">
          <img
            src="/assets/blue-left.png"
            alt="logo"
            className="md:w-[550px] w-[250px]"
            // width={550}
          />
        </div>
        <div className="absolute end-0 top-10">
          <img
            src="/assets/blue-right.png"
            alt="logo"
            className="md:w-[550px] w-[250px]"
            // width={550}
          />
        </div>
      </main>
    </section>
  );
  console.log(isVisible);
};

export default Banner;
