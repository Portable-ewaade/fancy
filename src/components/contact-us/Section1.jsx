import React from "react";
import TrackVisibility from "react-on-screen";
// import styles from "@/styles/contact.module.css";

const Section1 = () => {
  return (
    <main className="grid-container">
      <section
        className=''
      >
        {/* <div>
       <img src="/assets/red-bg-img.png" alt="a & co"  style={{height:"0%"}}/>
       </div> */}

        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? " animate__animated animate__fadeIn " : ""}
            >
              <div className="bx-container text-center mt-md-5 pt-md-4">
                <h1 className="fs-1 fw-bold">Hello.</h1>
                <p className="fs-normal fw-semibold">
                  Send us a message and let’s bring your ideas to life with our
                  innovation.
                </p>
              </div>
            </div>
          )}
        </TrackVisibility>

        <div className="position-absolute top-0 start-100 translate-middle mt-5 pt-5 pe-4">
          <div className="mt-5">
            <img
              src="/assets/half-circle-l.png"
              alt=""
              className=""
              width={30}
              height={60}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Section1;
