import React, { useEffect } from "react";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
// import dynamic from "next/dynamic";

const Banner = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  useEffect(() => {}, []);

  const Responsive = {
    nav: false,
    dots: false,

    0: {
      items: 1,
      nav: false,
      dots: false,
      margin: 0,
    },
    768: {
      items: 1,
      nav: false,
      dots: false,
      margin: 0,
    },
    1024: {
      items: 1,
      nav: false,
      dots: false,
      margin: 0,
    },
  };
  return (
    <section className="grid_container relative ">
      <div className="wrapper z-0">
        <div className=" text-[#03032F] absolute md:top-1/3 top-1/4 md:start-20 start-5 z-10 mt-14">
          <h1 className="md:text-5xl text-[2.5rem] font-extrabold md:leading-tight leading-tight">
            Flexible collaboration <br /> models.
          </h1>
          <p className="md:text-xl font-bold tracking-wide mt-5">
            Tailored engagement options for seamless collaboration
          </p>
        </div>

        <OwlCarousel
          responsive={Responsive}
          loop={true}
          animateOut={"fadeOut"}
          autoplay={true}
          autoplaySpeed={1000}
          className="md:h-[82vh] h-[70vh] mt-16 z-0">
          <div className="item">
            <img
              src="/assets/contract-img-1.png"
              alt="about carousel image"
              className=" w-full md:h-[82vh] h-[70vh]"
            />
          </div>
          <div className="item">
            <img
              src="/assets/contract-img-2.png"
              alt="about carousel image"
              className=" w-full md:h-[82vh] h-[70vh]"
            />
          </div>
          <div className="item">
            <img
              src="/assets/contract-img-3.png"
              alt="about carousel image"
              className=" w-full md:h-[82vh] h-[70vh]"
            />
          </div>
          <div className="item">
            <img
              src="/assets/contract-img-4.png"
              alt="about carousel image"
              className=" w-full md:h-[82vh] h-[70vh]"
            />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Banner;
