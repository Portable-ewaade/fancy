import React, { useEffect } from "react";
import Link from "next/link";
// import styles from "@/styles/contact.module.css";

const Message = ({ title, buttonText }) => {
  useEffect(() => {}, []);

  return (
    <section className="grid-container"
    style={{
      height: "100vh",
      marginTop: '10rem'
    }}>
      <main className=''>
        <div
          style={{
            backgroundColor: "#fff" ? "#fff" : "",
            padding: "0.5rem 0.5rem" ? "0.5rem 0.5rem" : "",
            // borderRadius: "1.5rem" ? "1.5rem" : "",
          }}
          className=""
        >
          <div className=" text-center">
            <h5 className="fw-bold">{title}</h5>
            <p className=" fs-xsmall">
              Our team of experts will get in touch with you in no time.
            </p>

            <Link href="/" className="text-color fs-small lag-btnn">
              {buttonText ? buttonText : "Home"}
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Message;
