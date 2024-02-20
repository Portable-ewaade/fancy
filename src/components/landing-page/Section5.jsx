import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TrackVisibility from "react-on-screen";

const Section5 = () => {
    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
                delay: 100,
      });
    }, []);
  return (
    <section className="grid_container bg-color2 relative md:text-center text-white text-lg py-10">
      <main className="wrapper box-sec">
        <div className="" data-aos="fade-up">
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
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__rotateIn animate__infinite animate__slower animate__delay-0s"
                  : ""
              }
            >
              <div>
                <img
                  src="/assets/home-img3.png"
                  alt="home image"
                  className="mx-auto pt-10 "
                  width={550}
                />
              </div>
            </div>
          )}
        </TrackVisibility>

        <div className="text-center md:w-2/6 py-3 my-12 mx-auto bg-white rounded-lg push">
          <Link
            href="/contact-us"
            className="text-lg font-semibold text-color hover:text-[#0A0A8C]"
          >
            Send us a message
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Section5;
