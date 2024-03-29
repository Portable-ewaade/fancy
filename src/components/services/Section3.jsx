import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section3 = () => {
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
        backgroundImage: 'url("/assets/service-bg2.png")',
        backgroundRepeat: "none",
        backgroundSize: "cover",
                height: "auto",
      }}
    >
      <main className="wrapper  container mx-auto box-sec">
        <h1 className="font-extrabold text-color text-center text-3xl my-16">
          Research Project Management
        </h1>
        <div className="" data-aos="fade-up">
          <div className="md:w-3/5 mb-12">
            <h3 className="font-bold text-xl my-2">Project Management</h3>
            <p className="font-medium text-lg">
              We create tailored service agreements for projects, short or
              long-term. Working closely with clients, we strategize, research,
              design interventions, and achieve measurable outcomes aligned with
              their goals.
            </p>
          </div>
        </div>
        <div className="" data-aos="fade-up">
          <div className="md:w-3/5 mb-12">
            <h3 className="font-bold text-xl my-2">
              Research Oversight and Coordination
            </h3>
            <p className="font-medium text-lg">
              Our project managers guide every stage of research projects using
              behavioral health-aligned methods to achieve impactful outcomes.
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="md:w-3/5 mb-12">
            <h3 className="font-bold text-xl my-2">
              Guiding and Organizing Research Projects
            </h3>
            <p className="font-medium text-lg">
              We handle the organization and supervision of research projects,
              making sure each step is well-planned and completed on time to
              achieve meaningful results.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Section3;
