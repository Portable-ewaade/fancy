import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const Banner = () => {
//   const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//     ssr: false,
//   });
//   const Responsive = {
//     nav: false,
//     dots: false,
//     0: {
//       items: 1,
//       nav: true,
//       dots: false,
//       margin: 5,
//     },
//     768: {
//       items: 1,
//       nav: true,
//       dots: false,
//       margin: 10,
//     },
//     1024: {
//       items: 1,
//       nav: true,
//       dots: false,
//       margin: 20,
//     },
//   };
//   useEffect(() => {}, []);

  return (
    <section
    classNameName="grid_container relative bg-[#0A0A8C]"
    // style={{
    //   backgroundImage: 'url("/assets/about-banner.png")',
    //   backgroundRepeat: "none",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   height: "90vh",
    // }}
    // aixo for fetching data
    // react query to get data from axios
    >
       {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
<div
  id="carouselExampleCrossfade"
  class="relative"
  data-te-carousel-init
  data-te-ride="carousel">
  <div
    class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="0"
      data-te-carousel-active
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="1"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCrossfade"
      data-te-slide-to="2"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>


  <div
    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

    <div
      class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        class="block w-full"
        alt="Wild Landscape" />
    </div>

    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block w-full"
        alt="Camera" />
    </div>

    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block w-full"
        alt="Exotic Fruits" />
    </div>
  </div>

  
  <button
    class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCrossfade"
    data-te-slide="prev">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  
  <button
    class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCrossfade"
    data-te-slide="next">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
      {/* <OwlCarousel
        responsive={Responsive}
        autoplay={true}
        autoplaySpeed={2000}
        className="owl-theme owl-nav owl-controls custom-nav ">
        <div className="item">
          <img
            src="/assets/about-banner.png"
            alt="about-banner"
            className="w-full"
          />
        </div>
        <div className="item">
          <img
            src="/assets/about-img-2.png"
            alt="about-banner"
            className="w-full"
          />
        </div>
      </OwlCarousel> */}
      {/* <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="active duration-700 ease-in-out" data-carousel-item>
            <img
              src="/assets/about-banner.png"
              className="active absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="about banner carousel"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/assets/about-img-2.png"
              className="hidden absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="about banner carousel"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/assets/about-banner.png"
              className="hidden absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="about banner carousel"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/assets/about-banner.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="about banner carousel"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/assets/about-banner.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="about banner carousel"
            />
          </div>
        </div>
        Slider
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"></button>
        </div>
        Slid
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}

      {/* <div classNameName="wrapper text-white absolute top-1/3 md:start-20 start-15 mt-16 ">
        <h1 classNameName="text-5xl font-extrabold leading-tight">
          Empowering innovation in <br /> mental health.
        </h1>
        <p classNameName="text-xl font-bold tracking-wide mt-5">
          Pioneering Solutions at the Intersection of Data and{" "}
          <br classNameName="hidden md:block" /> Behavioral Health.
        </p>
      </div> */}
    </section>
  );
};

export default Banner;
