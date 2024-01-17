import React from "react";

const Banner = () => {
  return (
    <section
      className="grid_container relative bg-[#0A0A8C]"
      style={{
        backgroundImage: 'url("/assets/about-banner.png")',
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <div className="wrapper text-white absolute top-1/3 md:start-20 start-15 mt-16 ">
        <h1 className="text-5xl font-extrabold leading-tight">
          Empowering innovation in <br /> mental health.
        </h1>
        <p className="text-xl font-bold tracking-wide mt-5">
          Pioneering Solutions at the Intersection of Data and{" "}
          <br className="hidden md:block" /> Behavioral Health.
        </p>
      </div>
    </section>
  );
};

export default Banner;
