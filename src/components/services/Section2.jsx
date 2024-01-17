import React from "react";

const Section2 = () => {
  return (
    <section className="grid_container bg-color relative pb-16 ">
      <main className="wrapper box-sec">
        <h1 className="font-extrabold text-color text-center text-3xl my-16">
          Research Project Management
        </h1>

        <div className="md:w-3/5 mb-12 font-medium">
          <h3 className="font-bold text-xl my-2">Project Management</h3>
          <p className='font-medium text-lg'>
            We create tailored service agreements for projects, short or
            long-term. Working closely with clients, we strategize, research,
            design interventions, and achieve measurable outcomes aligned with
            their goals.
          </p>
        </div>
        <div className="md:w-3/5 mb-12 font-medium">
          <h3 className="font-bold text-xl my-2">
            Research Oversight and Coordination
          </h3>
          <p className='font-medium text-lg'>
            Our project managers guide every stage of research projects using
            behavioral health-aligned methods to achieve impactful outcomes.
          </p>
        </div>
        <div className="md:w-3/5 mb-12 font-medium">
          <h3 className="font-bold text-xl my-2">
            Guiding and Organizing Research Projects
          </h3>
          <p className='font-medium text-lg'>
            We handle the organization and supervision of research projects,
            making sure each step is well-planned and completed on time to
            achieve meaningful results.
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
          <img
            src="/assets/blue-star.png"
            alt="logo"
            className=""
            width={27}
          />
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
};

export default Section2;
