import React, { useEffect } from "react";
import Link from "next/link";

const Message = ({ title, buttonText }) => {
  useEffect(() => {}, []);

  return (
    <section className="grid-container">
      <main className="w-[100vw] container mx-auto mt-20 pt-20">
        <div className="text-black lg:pt-20 lg:mt-10">
          <div className="text-center">
            <h1 className="font-bold text-3xl mb-3">{title}</h1>
            <p className=" mt-4 mb-8">
              Our team of experts will get in touch with you in no time.
            </p>
            <div className="bg-[#0A0A8C] py-2 md:w-[60vh] w-[50vh] text-white rounded-lg mx-auto text-center hover:text-white">
              <Link href="/" className="text-normal font-bold hover:text-white">
                {buttonText ? buttonText : "Home"}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Message;
