import React from 'react'
//import { ContactForm } from '.';

const Banner = () => {
  return (
    <section className="grid_container relative h-[70vh] bg-[#03032F]">
      <main className="wrapper mt-20 pt-20">
        <div className=" text-white absolute top-1/3 md:start-20 start-15 mt-16 ">
          <h1 className="text-4xl font-extrabold leading-tight">
            Learn how we are revolutionizing <br /> behavioral health.
          </h1>
          <p className="text-xl font-bold tracking-wide mt-5">
            Need more information or interested in collaborating with{" "}
            <br className="hidden md:block" /> us? Feel free to reach out.
          </p>
        </div>

        <div className="absolute end-0 top-20 mt-10">
          <img
            src="/assets/contact-big-logo.png"
            alt="logo"
            className=""
            width={290}
          />
        </div>

        <div className="absolute end-0 top-12">
          <img
            src="/assets/three-circles.png"
            alt="logo"
            className=""
            width={350}
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
}

export default Banner
