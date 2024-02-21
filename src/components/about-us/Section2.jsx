import React, { useEffect } from "react";
import TrackVisibility from "react-on-screen";
import AOS from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section className="grid_container pb-12 relative text-lg">
      <main className="wrapper box-sec">
        <div data-aos="fade-in">
          <div className="">
            <h1 className="font-extrabold text-color text-center text-4xl my-10">
              About MHRI
            </h1>
            <p className="font-normal mt-8 tracking-wide">
              At MotivHealth Research Initiative (MHRI), our unwavering
              dedication lies in revolutionizing behavioral health. We
              strategically integrate predictive analytics, innovative
              interventions, and informed health policies to drive
              transformative changes. Our commitment transcends boundaries,
              focused on advancing research methodologies and harnessing
              cutting-edge technologies to elevate health outcomes for
              individuals navigating a spectrum of mental health challenges.
            </p>
            <p className="font-normal mt-8 tracking-wide">
              At MotivHealth Research Initiative (MHRI), our identity is rooted
              in a passionate commitment to transforming behavioral health. We
              are a team of dedicated professionals, driven by a collective
              mission to pioneer innovative solutions, inform health policy, and
              significantly improve outcomes for individuals navigating mental
              health challenges. MHRI embodies a culture of innovation,
              collaboration, and compassion. We believe in leveraging
              data-driven insights, cutting-edge technology, and evidence-based
              practices to create a profound impact on mental health care
              delivery.
            </p>
          </div>
          <div className="push hidden md:block">
            <img
              src="/assets/about-img1.png"
              alt="home image"
              className="mx-auto pt-10"
              // height={500}
            />
          </div>
          <div className="push md:hidden">
            <img
              src="/assets/about-img1-mobile.png"
              alt="home image"
              className="mx-auto pt-10"
              // height={500}
            />
          </div>
        </div>

        <div className="absolute start-0 top-0">
          <img
            src="/assets/blue-left.png"
            alt="logo"
            className="md:w-[550px] w-[250px]"
            // width={500}
          />
        </div>
        <div className="absolute end-0 top-0">
          <img
            src="/assets/blue-right.png"
            alt="logo"
            className="md:w-[550px] w-[250px]"
            // width={500}
          />
        </div>
      </main>
    </section>
  );
};

export default Section2;
