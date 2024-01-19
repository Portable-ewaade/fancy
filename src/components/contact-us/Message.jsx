import React, { useEffect } from "react";
import Link from "next/link";
// import styles from "@/styles/contact.module.css";

const Message = ({ title, buttonText }) => {
  useEffect(() => {}, []);

  return (
    <section
      className="grid-container h-screen "
      // style={{
      //   height: "100vh",
      //   marginTop: "10rem",
      // }}
    >
      <main className="wrapper">
        <div
          style={
            {
              // backgroundColor: "#fff" ? "#fff" : "",
              // padding: "0.5rem 0.5rem" ? "0.5rem 0.5rem" : "",
              // borderRadius: "1.5rem" ? "1.5rem" : "",
            }
          }
          className="">
          <div className=" text-center">
            <h1 className="font-bold text-2xl mb-3">{title}</h1>
            <p className=" text-sm mt-4 mb-8">
              Our team of experts will get in touch with you in no time.
            </p>
            <div className="bg-[#0A0A8C] py-2 w-4/5 text-white rounded mx-auto text-center hover:text-white">
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
