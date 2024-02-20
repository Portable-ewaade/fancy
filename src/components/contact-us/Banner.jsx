import React from "react";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  return (
    <section className="grid_container container mx-auto relative lg:h-[40rem] h-[65vh] md:bg-[#03032F] bg-[#07075D] mb-20">
      <main className="wrapper">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__fadeIn animate__delay-0s animate__slower"
                  : ""
              }
            >
              <div className=" text-white absolute md:top-1/3 top-1/4 md:start-20 start-4 md:mt-12 mt-5">
                <h1 className="md:text-4xl text-3xl font-extrabold md:leading-tight leading-tight tracking-wide">
                  Learn how we are revolutionizing <br /> behavioral health.
                </h1>
                <p className="md:text-xl text-sm font-bold tracking-wide mt-5 ">
                  Need more information or interested in collaborating with{" "}
                  <br className="hidden md:block" /> us? Feel free to reach out.
                </p>
              </div>
            </div>
          )}
        </TrackVisibility>

        <div className="bounce lg:block hidden absolute end-0 top-20 mt-10">
          <img
            src="/assets/contact-big-logo.png"
            alt="logo"
            className="md:w-[290px] "
                      />
        </div>
        {/* laptop view */}
        <div className="hidden lg:block absolute end-0 top-12">
          <img
            src="/assets/three-circles.png"
            alt="logo"
            className="w-[350px]"
                      />
        </div>
        {/* mobile view */}
        <div className="lg:hidden block absolute end-0 top-12">
          <img
            src="/assets/three-circle-mobile.png"
            alt="logo"
            className=" w-[50px] md:w-[70px] h-[430px]"
                      />
        </div>

      </main>
    </section>
  );
};

export default Banner;
