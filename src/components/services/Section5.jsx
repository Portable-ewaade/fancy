import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section5 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section
      className="grid_container relative md:pb-16"
      style={{
        backgroundImage: 'url("/assets/service-bg4.png")',
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <main className="wrapper  container mx-auto box-sec">
        <h1 className="font-extrabold text-color text-center text-3xl my-16">
          AI/ML Research and Development
        </h1>

        <div className="md:w-3/5 mb-12" data-aos="fade-up">
          <h3 className="font-bold text-xl my-2">
            Advanced Cognitive Computing
          </h3>
          <p className="font-medium text-lg">
            MHRI's AI/ML research and development service specializes in
            utilizing Artificial Intelligence and Machine Learning methodologies
            to drive groundbreaking solutions in mental health research and
            intervention development.
          </p>
        </div>
        <div className="md:w-3/5 mb-12" data-aos="fade-up">
          <h3 className="font-bold text-xl my-2">
            Innovative Tech for Mental Health Improvement
          </h3>
          <p className="font-medium text-lg">
            We study and develop new ways of using computers to help with mental
            health research and creating better treatments.
          </p>
        </div>
        <div className="md:w-3/5 mb-12" data-aos="fade-up">
          <h3 className="font-bold text-xl my-2">
            AI-driven Mental Health Solution{" "}
          </h3>
          <p className="font-medium text-lg">
            We explore AI/ML methodologies to pioneer innovative solutions in
            mental health research and intervention development.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Section5;
