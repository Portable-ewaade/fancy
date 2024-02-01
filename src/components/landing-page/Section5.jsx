import Link from "next/link";
import React from "react";

const Section5 = () => {
  return (
    <section className="grid_container bg-color2 relative md:text-center text-white text-lg py-10">
      <main className="wrapper box-sec">
        <div className="">
          <h1 className="font-extrabold md:text-3xl text-xl mt-12 mb-7 text-center">
            Reach Out for Collaborative Opportunities
          </h1>
          <p className="font-normal mt-8 text-lg md:tracking-wide">
            Interested in learning more or exploring collaborative opportunities
            with us? Feel free to <br className="hidden md:block" /> reach out
            to our team. Whether it's inquiries, partnership proposals, or
            seeking further <br className="hidden md:block" /> information, we
            are here to assist you.
          </p>
        </div>

        <div>
          <img
            src="/assets/home-img3.png"
            alt="home image"
            className="mx-auto pt-10 "
            width={550}
          />
        </div>

        <div className="text-center md:w-2/6 py-3 my-12 mx-auto bg-white rounded-lg ">
          <Link
            href="/contact-us"
            className="text-lg font-semibold text-color hover:text-[#0A0A8C]">
            Send us a message
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Section5;
