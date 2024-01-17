import React from 'react'

const Section6 = () => {
  return (
    <section className="grid_container bg-color relative pb-16 ">
      <main className="wrapper box-sec">
        <h1 className="font-extrabold text-color text-center text-3xl my-16">
          AI/ML Research and Development
        </h1>

        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            Advanced Cognitive Computing
          </h3>
          <p className='font-medium text-lg'>
            MHRI's AI/ML research and development service specializes in
            utilizing Artificial Intelligence and Machine Learning methodologies
            to drive groundbreaking solutions in mental health research and
            intervention development.
          </p>
        </div>
        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            Innovative Tech for Mental Health Improvement
          </h3>
          <p className='font-medium text-lg'>
            We study and develop new ways of using computers to help with mental
            health research and creating better treatments.
          </p>
        </div>
        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            AI-driven Mental Health Solution
          </h3>
          <p className='font-medium text-lg'>
            We explore AI/ML methodologies to pioneer innovative solutions in
            mental health research and intervention development.
          </p>
        </div>

        <div className="absolute start-0 top-0 z-0">
          <img
            src="/assets/half-circle-left.png"
            alt="logo"
            className=""
            width={90}
          />
        </div>

        <div className="absolute end-10 top-5 z-0">
          <img
            src="/assets/small-star.png"
            alt="logo"
            className=""
            width={27}
          />
        </div>
        <div className="absolute start-0 top-2/3 z-0">
          <img src="/assets/blue-star.png" alt="logo" className="" width={27} />
        </div>
        <div className="absolute end-20 top-3/4 z-0">
          <img
            src="/assets/small-dark-star.png"
            alt="logo"
            className=""
            width={25}
          />
        </div>
      </main>
    </section>
  );
}

export default Section6
