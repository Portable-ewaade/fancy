import React from 'react'

const Section5 = () => {
  return (
    <section
      className="grid_container relative pb-16"
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
          Clinical Research Consulting
        </h1>

        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            Clinical Study Guidance Services
          </h3>
          <p className='font-medium text-lg'>
            Our clinical research consulting specializes in expert guidance for
            conducting clinical studies, ensuring regulatory compliance, and
            maximizing research effectiveness.
          </p>
        </div>
        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            Expert Assistance for Healthcare Studies
          </h3>
          <p className='font-medium text-lg'>
            We offer help and expertise in carrying out studies related to
            healthcare, ensuring they follow rules and use the best methods to
            get accurate results.
          </p>
        </div>
      </main>
    </section>
  );
}

export default Section5
