import React from 'react'

const Section4 = () => {
  return (
    <section className="grid_container bg-[#CCF0FF] relative md:pb-16 ">
      <main className="wrapper box-sec">
        <h1 className="font-extrabold text-color text-center text-3xl my-16">
          Human and Health Services Technology <br /> Consulting
        </h1>

        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">Healthcare Tech Advisory</h3>
          <p className='font-medium text-lg'>
            MHRI provides strategic guidance and implementation of technology
            solutions tailored for improved healthcare delivery. We prioritize a
            people-centric approach and operational efficiency.
          </p>
        </div>
        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">Healthcare Tech Guidance</h3>
          <p className='font-medium text-lg'>
            Our service offers expert advice and hands-on support in
            implementing technology solutions to elevate healthcare services. We
            focus on enhancing user experiences and service efficiency.
          </p>
        </div>
        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            Healthcare Tech Enhancement
          </h3>
          <p className='font-medium text-lg'>
            MHRI's consultancy specializes in guiding and implementing
            cutting-edge tech solutions within healthcare. Our emphasis is on a
            people-centered approach and optimizing service efficiency.
          </p>
        </div>

        <div className="absolute end-0 top-0 z-0">
          <img
            src="/assets/half-circle-right-white.png"
            alt="logo"
            className="md:w-[90px] w-[40px]"
            // width={90}
          />
        </div>

        <div className="absolute md:end-20 end-5 bottom-3 md:top-3/4 z-0">
          <img
            src="/assets/small-white-circle.png"
            alt="logo"
            className="md:w-[25px] w-[20px]"
            // width={25}
          />
        </div>
        <div className="absolute md:start-1/4 top-10 z-0">
          <img
            src="/assets/small-white-circle.png"
            alt="logo"
            className="md:w-[25px] w-[20px]"
            // width={25}
          />
        </div>
      </main>
    </section>
  );
}

export default Section4
