import React from "react";

const Banner = () => {
  return (
    <section className="grid_container h-screen">
      <main className="wrapper md:mt-10 ">
        <div className="md:text-center pt-20 ms-4 md:ms-0">
          <h1 className="md:text-6xl text-4xl font-extrabold text-color-banner pt-16 md:leading-tight leading-tight">
            <span className="text-color2">
              Our <br className="block md:hidden" />{" "}
            </span>{" "}
            comprehensive <span className="text-color2">services</span> in{" "}
            <br /> <span className="text-color2">mental health </span>
            innovation.
          </h1>

          <p className="text-xl mt-5 tracking-wide font-normal">
            Empowering solutions at the intersection of behavioral health and
            technology.
          </p>
        </div>

        <div className="mt-5">
          <img
            src="/assets/home-img3.png"
            alt="logo"
            className="mx-auto"
            width={570}
          />
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
};

export default Banner;
