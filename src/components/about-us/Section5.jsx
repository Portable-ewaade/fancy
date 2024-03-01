import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Section5 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className='text-lg text-white bg-color2'>
      <main className='container w-[90%] mx-auto'>
        <div className='relative grid md:grid-cols-2'>
          <div className='md:mt-20 md:pt-10'>
            <h1
              className='mt-20 mb-5 text-3xl font-extrabold text-center md:text-start'
              data-aos='fade-up-right'
            >
              Our Impact and Commitment
            </h1>
            <p
              className='mt-5 font-normal tracking-wide '
              data-aos='fade-up-right'
            >
              Aligned with our mission, vision, and objectives, MotivHealth
              Research Initiative is committed to making a meaningful impact on
              the lives of individuals facing mental health challenges. We
              endeavor to promote health equity, eliminate disparities, and
              ensure equal opportunities for optimal health, particularly for
              vulnerable and underserved populations.
            </p>
          </div>
          <div>
            <div
              className='mt-14 md:absolute -end-16'
              data-aos='zoom-in-up'
            >
              <img
                src='/assets/big-logo-white.png'
                alt='home image'
                className='w-[450px]'
                // width={450}
              />
            </div>
          </div>
        </div>

        <div>
          <div className=' md:pt-10 pb-14'>
            <h1
              className='mt-20 mb-5 text-3xl font-extrabold'
              data-aos='fade-up-right'
            >
              Our Core Values
            </h1>
            <p
              className='mt-5 font-normal tracking-wide md:w-3/5 '
              data-aos='fade-up-right'
            >
              Our identity is forged upon three core values.
            </p>
          </div>

          <div className='pb-10 '>
            <div className='md:flex'>
              <div
                className='flex-1 p-5 my-8 text-black bg-white rounded-lg shadow-lg push md:me-8'
                data-aos='fade-up'
              >
                <h1 className='mt-1 text-2xl font-bold text-color'>
                  Innovation
                </h1>
                <p className='mt-1'>
                  We're committed to fostering a culture of constant innovation.
                  We explore groundbreaking methods, push technology and
                  research boundaries, aiming for transformative change.
                </p>
              </div>
              <div
                className='flex-1 p-5 text-black bg-white rounded-lg shadow-lg push md:m-8'
                data-aos='fade-down'
              >
                <h1 className='mt-2 text-2xl font-bold text-color'>
                  Collaboration
                </h1>
                <p className='mt-2'>
                  We believe in working closely with diverse partners,
                  healthcare providers, researchers, policymakers, and community
                  groups, to create powerful solutions together
                </p>
              </div>
              <div
                className='flex-1 p-5 my-8 text-black bg-white rounded-lg shadow-lg push md:m-8'
                data-aos='fade-up'
              >
                <h1
                  className='mt-2 text-2xl font-bold text-color'
                  data-aos='fade-up'
                >
                  Compassion
                </h1>
                <p className='mt-2'>
                  At the core of our approach is compassion. We prioritize
                  empathy, infusing our initiatives with a deeply human-centric
                  focus to ensure effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Section5;
