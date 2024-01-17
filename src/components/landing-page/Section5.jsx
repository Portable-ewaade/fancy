import React from "react";

const Section5 = () => {
  return (
    <section className="grid_container bg-color2 relative text-center text-white text-lg">
      <main className="wrapper box-sec">
        <div className="">
          <h1 className="font-extrabold text-3xl mt-12 mb-7">
            Reach Out for Collaborative Opportunities
          </h1>
          <p className="font-normal mt-8 text-lg tracking-wide">
            Interested in learning more or exploring collaborative opportunities
            with us? Feel free to <br /> reach out to our team. Whether it's
            inquiries, partnership proposals, or seeking further <br />{" "}
            information, we are here to assist you. Click the button below.
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

        <div className=" pt-10 pb-14">
          <a
            href="/contact-us"
            className="text-lg font-semibold bg-white py-3 px-24 text-color rounded "
          >
            Send us a message
          </a>
        </div>
      </main>
    </section>
  );
};

export default Section5;
