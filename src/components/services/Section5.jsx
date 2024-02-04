import React from 'react'
import TrackVisibility from "react-on-screen";


const Section5 = () => {
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
      <main className="wrapper box-sec">
        <h1 className="font-extrabold text-color text-center text-3xl my-16">
          AI/ML Research and Development
        </h1>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__fadeIn animate__delay-0s animate__fast"
                  : ""
              }
            >
              <div className="md:w-3/5 mb-12">
                <h3 className="font-bold text-xl my-2">
                  Advanced Cognitive Computing
                </h3>
                <p className="font-medium text-lg">
                  MHRI's AI/ML research and development service specializes in
                  utilizing Artificial Intelligence and Machine Learning
                  methodologies to drive groundbreaking solutions in mental
                  health research and intervention development.
                </p>
              </div>
              <div className="md:w-3/5 mb-12">
                <h3 className="font-bold text-xl my-2">
                  Innovative Tech for Mental Health Improvement
                </h3>
                <p className="font-medium text-lg">
                  We study and develop new ways of using computers to help with
                  mental health research and creating better treatments.
                </p>
              </div>
              <div className="md:w-3/5 mb-12">
                <h3 className="font-bold text-xl my-2">
                  AI-driven Mental Health Solution{" "}
                </h3>
                <p className="font-medium text-lg">
                  We explore AI/ML methodologies to pioneer innovative solutions
                  in mental health research and intervention development.
                </p>
              </div>
            </div>
          )}
        </TrackVisibility>
      </main>
    </section>
  );
}

export default Section5
