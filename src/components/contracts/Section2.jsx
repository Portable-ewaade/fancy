import React from "react";

const Section2 = () => {
  return (
    <section className="grid_container bg-white relative pb-16 z-0">
      <main className="wrapper box-sec">
        <div className="mb-10">
          <h1 className="font-extrabold text-color text-center text-3xl mt-16 mb-4">
            Versatile <span className="text-color2">Partnership</span> Options
          </h1>
          <p className="text-center w-2/3 mx-auto">
            We offer flexible contract vehicles designed to meet the diverse
            needs of our clients, enabling seamless collaboration and access to
            our expertise in mental health consulting, research, and innovative
            interventions.
          </p>
        </div>
        {/*  sec1 */}
        <div className="flex my-12 pb-10">
          <div className="flex-1 mt-16">
            <h3 className="font-bold text-xl my-3">Service Agreement</h3>
            <p className="w-3/4 ">
              Our service agreements are tailored to accommodate specific
              project needs, whether short-term or long-term. We collaborate
              closely with clients to develop comprehensive strategies, conduct
              research, design interventions, and deliver measurable outcomes
              aligned with their goals.
            </p>
          </div>
          <div className="flex">
            <img
              src="/assets/contract-img1.png"
              className="w-[500px]"
              alt="contract-image1"
            />
          </div>
        </div>
        {/*  sec2 */}
        <div className="flex my-12 pb-10">
          <div className="flex-1">
            <img
              src="/assets/contract-img2.png"
              className="w-[500px]"
              alt="contract-image1"
            />
          </div>
          <div className="flex-1 mt-16">
            <h3 className="font-bold text-xl my-3">Grants and Funding</h3>
            <p className="w-3/4 ">
              MHRI actively pursues grants and funding opportunities to support
              groundbreaking research and interventions in behavioral health.
              Collaborating with us through grant-funded projects allows for
              mutually beneficial partnerships aimed at advancing mental health
              initiatives.
            </p>
          </div>
        </div>
        {/*  sec3 */}
        <div className="flex my-12 z-10 ">
          <div className="flex-1 mt-16">
            <h3 className="font-bold text-xl my-3">Consultancy Contracts</h3>
            <p className="w-3/4 ">
              Engage our team through consultancy contracts to access our
              expertise in mental health research, data analytics, intervention
              development, and program evaluation. Our consultants work closely
              with clients to offer tailored solutions and strategic guidance.
            </p>
          </div>
          <div className="flex">
            <img
              src="/assets/contract-img3.png"
              className="w-[500px]"
              alt="contract-image1"
            />
          </div>
        </div>
        {/*  sec4 */}
        <div className="flex my-12 pb-10">
          <div className="flex-1 ">
            <img
              src="/assets/contract-img4.png"
              className="w-[500px]"
              alt="contract-image1"
            />
          </div>
          <div className="flex-1 mt-16">
            <h3 className="font-bold text-xl my-3">
              Government Contracts and RFPs
            </h3>
            <p className="w-3/4 ">
              We actively pursue government contracts and respond to Requests
              for Proposals (RFPs) related to mental health research, innovative
              interventions, and policy development. Partnering with us on
              government contracts enables impactful contributions to mental
              health initiatives.
            </p>
          </div>
        </div>
        {/* sec5 */}
        <div className="flex my-12 pb-5">
          <div className="flex-1 mt-16">
            <h3 className="font-bold text-xl my-3">
              Customized Contracting Solutions
            </h3>
            <p className="w-3/4 ">
              Recognizing the diverse needs of our clients, MRI offers
              customized contracting solutions. We collaborate with clients to
              tailor contract vehicles that best suit their requirements,
              ensuring a smooth and productive engagement.
            </p>
          </div>
          <div className="flex">
            <img
              src="/assets/contract-img5.png"
              className="w-[500px]"
              alt="contract-image1"
            />
          </div>
        </div>

        {/* absolute images */}
        <div className="absolute start-0 top-0 z-1">
          <img
            src="/assets/half-circle-left.png"
            alt="logo"
            className=""
            width={140}
          />
        </div>
        <div className="absolute end-5 inset-y-7">
          <img
            src="/assets/small-circle.png"
            alt="logo"
            className=""
            width={50}
          />
        </div>
        <div className="absolute start-5 inset-y-1/3 mt-64 ">
          <img
            src="/assets/small-circle.png"
            alt="logo"
            className=""
            width={45}
          />
        </div>
        <div className="absolute end-0 inset-y-1/3 z-0">
          <img
            src="/assets/half-cicle-right.png"
            alt="logo"
            className=""
            width={180}
          />
        </div>
        <div className="absolute end-5 bottom-7">
          <img
            src="/assets/small-circle.png"
            alt="design"
            className=""
            width={50}
          />
        </div>
        <div className="half-circle absolute start-0 bottom-10 z-20">
          <img
            src="/assets/half-circle-left.png"
            alt="design"
            className=""
            width={155}
          />
        </div>
      </main>
    </section>
  );
};

export default Section2;
