import React from "react";

const Banner = () => {
  return (
    <section
      className="grid_container relative"
      style={{
        backgroundImage: 'url("/assets/contract-banner.png")',
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}>
      <div className="wrapper text-color absolute top-1/3 md:start-20 start-15 md:mt-16 ">
        <h1 className="text-5xl font-extrabold leading-tight">
          Flexible collaboration <br /> models.
        </h1>
        <p className="text-xl font-bold tracking-wide mt-5">
          Tailored engagement options for seamless collaboration
        </p>
      </div>
    </section>
  );
};

export default Banner;
