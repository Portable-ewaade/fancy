import React from "react";

const Banner = () => {
  return (
    <section className="grid_container relative h-screen">
      <main className="wrapper mt-20 pt-20">
        <div className="text-center pt-20 ">
          <h1 className="text-6xl font-extrabold text-color pt-16">
            Transforming <span className="text-color2"> mental health</span>{" "}
            with <br />
            <span className="text-color2">predictive</span> analytics.
          </h1>
          <p className="text-xl mt-5 tracking-wide font-extralight">
            Personalized interventions for growth and resilience.
          </p>
        </div>

        <div className="absolute end-0 top-20 mt-10">
          <img src="/assets/big-logo.png" alt="logo" className="" width={350} />
        </div>
        <div className="absolute start-0 top-10">
          <img
            src="/assets/blue-left.png"
            alt="logo"
            className=""
            width={550}
          />
        </div>
        <div className="absolute end-0 top-10">
          <img
            src="/assets/blue-right.png"
            alt="logo"
            className=""
            width={550}
          />
        </div>
      </main>
    </section>
  );
};

export default Banner;
