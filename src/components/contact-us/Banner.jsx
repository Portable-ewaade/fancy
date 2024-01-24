import React from "react";
//import { ContactForm } from '.';

const Banner = () => {
  return (
    <section className="grid_container relative lg:h-[80vh] h-[65vh] md:bg-[#03032F] bg-[#07075D]">
      <main className="wrapper">
        <div className=" text-white absolute md:top-1/3 top-1/4 md:start-20 start-4 md:mt-12 mt-5">
          <h1 className="md:text-4xl text-3xl font-extrabold md:leading-tight leading-tight tracking-wide">
            Learn how we are revolutionizing <br /> behavioral health.
          </h1>
          <p className="md:text-xl font-bold tracking-wide mt-5 ">
            Need more information or interested in collaborating with{" "}
            <br className="hidden md:block" /> us? Feel free to reach out.
          </p>
        </div>

        <div className="lg:block hidden absolute end-0 top-20 mt-10">
          <img
            src="/assets/contact-big-logo.png"
            alt="logo"
            className="md:w-[290px] "
            //width={290}
          />
        </div>
        {/* laptop view */}
        <div className="hidden lg:block absolute end-0 top-12">
          <img
            src="/assets/three-circles.png"
            alt="logo"
            className="w-[350px]"
            // width={350}
          />
        </div>
        {/* mobile view */}
        <div className="lg:hidden block absolute end-0 top-12">
          <img
            src="/assets/three-circle-mobile.png"
            alt="logo"
            className=" w-[50px] md:w-[70px] h-[430px]"
            // width={350}
          />
        </div>
        {/* <div className="absolute end-0 top-10">
          <img
            src="/assets/blue-right.png"
            alt="logo"
            className=""
            width={550}
          />
        </div> */}
      </main>
    </section>
  );
};

export default Banner;
