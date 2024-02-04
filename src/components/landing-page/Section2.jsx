import Link from "next/link";
import React from "react";
import TrackVisibility from "react-on-screen";


const Section2 = () => {
  return (
    <section className="grid_container bg-color pb-12 text-lg">
      <main className="wrapper box-sec">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="">
              <div
                className={
                  isVisible ? "animate__animated animate__fadeInU" : ""
                }
              >
                <h1 className="font-extrabold text-color text-center text-3xl my-12">
                  About MotivHealth Research Initiative
                </h1>
                <p className="font-normal mt-8 tracking-wide">
                  Welcome to MotivHealth Research Initiative (MHRI). We're
                  dedicated to revolutionizing behavioral health through
                  data-driven insights, technology, and innovative
                  interventions. Our commitment lies in transforming mental
                  health by advancing research with predictive analytics.{" "}
                </p>
                <p className="font-normal mt-8 tracking-wide">
                  {" "}
                  MHRI is a passionate collective, striving to reshape
                  behavioral health by pioneering solutions, influencing health
                  policy, and improving outcomes. We embody a culture of
                  innovation, collaboration, and compassion, leveraging data,
                  technology, and evidence-based practices to impact mental
                  health care delivery.
                </p>
              </div>
            </div>
          )}
        </TrackVisibility>

        <div className="push">
          <img
            src="/assets/home-img1.png"
            alt="home image"
            className="mx-auto pt-10 hidden md:block"
            height={500}
          />
          <img
            src="/assets/mobile-home-img.png"
            alt="home image"
            className="mx-auto pt-10 md:hidden"
            height={500}
          />

          <Link
            href="/about"
            className="text-color font-extrabold text-xs underline underline-offset-4 hover:text-[#0A0A8C]"
          >
            See more about us
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Section2;
