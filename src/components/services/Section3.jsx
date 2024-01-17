import React from 'react'

const Section3 = () => {
  return (
    <section
      className="grid_container relative pb-16"
      style={{
        backgroundImage: 'url("/assets/service-bg2.png")',
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <main className="wrapper box-sec">
        <h1 className="font-extrabold text-color text-center text-3xl my-16">
          Consulting
        </h1>

        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">Consulting Solution</h3>
          <p className='font-medium text-lg'>
            Our service offers expert guidance to individuals and organizations
            seeking innovative mental health solutions. We use data-driven
            insights and behavioral health expertise to provide strategic advice
            for impactful outcomes.
          </p>
        </div>
        <div className="md:w-3/5 mb-12">
          <h3 className="font-bold text-xl my-2">
            Expert Advice for Better Mental Health Solution
          </h3>
          <p className='font-medium text-lg'>
            We provide advice and strategic guidance to people and organizations
            looking for new and innovative solutions in mental health using
            information and expertise in behavioral health.
          </p>
        </div>
        
      </main>
    </section>
  );
}

export default Section3
