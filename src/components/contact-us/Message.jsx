import React, { useEffect } from "react";
import Link from "next/link";
// import styles from "@/styles/contact.module.css";

const Message = ({ title, buttonText }) => {
  useEffect(() => {}, []);

  return (
    <section className="grid-container">
      <main className="wrapper mt-20 pt-20">
        <div className="text-black">
          <div className=" text-center">
            <h1 className="font-bold text-3xl mb-3">{title}</h1>
            <p className=" mt-4 mb-8">
              Our team of experts will get in touch with you in no time.
            </p>
            <div className="bg-[#0A0A8C] py-2 w-[60vh] text-white rounded mx-auto text-center hover:text-white">
              <Link href="/" className="text-normal font-bold ">
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
