import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsArrowUpCircle } from "react-icons/bs";
// import styles from "../../styles/home.module.css";
import styles from "@/styles/contact.module.css";

const ContactFooter = () => {
  return (
    <main
      className="grid-container text-white"
      style={{ backgroundColor: "#A80D10" }}
    >
      <section
        className={`${styles.contact_footer} bx-container`}
        style={{
          backgroundImage: 'url("/assets/contact-footer.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <Row className="py-5">
          <Col sm={12} md={5} className="my-2 text-center text-md-start">
            <Link href="/">
              <img
                src="/assets/white-aco.png"
                alt="a & co"
                className="footer-logo"
                style={{ width: "12rem" }}
              />
            </Link>
            <br />
            <p className=" ms-3">
              Creating innovative solutions for you.
            </p>
            <Link
              href="mailto:info@theacconsulting.com"
              className=" mt-0 pt-0 ms-3 text-white"
            >
              info@theacconsulting.com
            </Link>
          </Col>

          <Col sm={12} md={7} className="my-2 text-center text-md-start">
            <div className="">
              <Row>
                <Col md={5} className="my-md-4 my-3   my-md-1 ">
                  <ul>
                    <h6 className="fs-normal fw-bold"> Terms & Privacy</h6>
                  </ul>
                  <ul>
                    <Link href="/privacy" className="text-white ">
                      Privacy Policy
                    </Link>
                  </ul>
                  <ul>
                    <Link href="/terms" className="text-white">
                      Terms of Use
                    </Link>
                  </ul>
                </Col>
                <Col md={4} className="my-md-4 my-3  my-md-1 ">
                  <ul>
                    <h6 className=" fs-normal fw-bold"> Company</h6>
                  </ul>
                  <ul>
                    <Link href="/contact" className="text-white">
                      Contact Us
                    </Link>
                  </ul>
                  <ul>
                    <Link href="/about" className="text-white">
                      About Us
                    </Link>
                  </ul>
                  <ul>
                    <Link href="/services" className="text-white">
                      Services
                    </Link>
                  </ul>
                </Col>
                <Col md={3} className="my-md-4 my-3  my-md-1 ">
                  <div className="d-none d-md-block">
                    <ul>
                      <h6 className=" fs-normal fw-bold"> Connect </h6>
                    </ul>
                    <ul>
                      <Link
                        className="text-white"
                        href="https://instagram.com/theacconsulting?igshid=OGQ5ZDc2ODk2ZA=="
                      >
                        Instagram
                      </Link>
                    </ul>
                    <ul>
                      <Link
                        className="text-white"
                        href="https://twitter.com/theacconsulting?t=DXUUcQ9DQq1DE5PcMCojOA&s=09"
                      >
                        Twitter
                      </Link>
                    </ul>
                    <ul>
                      <Link className="text-white" href="/terms">
                        Linkedin
                      </Link>
                    </ul>
                  </div>
                  {/* mobile view */}
                  <div className="d-block d-md-none">
                    <Row>
                      <Col sm={4}>
                        <Link href="https://instagram.com/theacconsulting?igshid=OGQ5ZDc2ODk2ZA==">
                          <img
                            src="/assets/insta-white.png"
                            alt="icons"
                            className=" mx-3"
                            style={{ width: "1.7rem" }}
                          />
                        </Link>
                        <Link href="https://twitter.com/theacconsulting?t=DXUUcQ9DQq1DE5PcMCojOA&s=09">
                          <img
                            src="/assets/twitter-white.png"
                            alt="icons"
                            className="mx-3"
                            style={{ width: "1.3rem" }}
                          />
                        </Link>
                        <Link href="/contact">
                          <img
                            src="/assets/linkedin-white.png"
                            alt="icons"
                            className="mx-3"
                            style={{ width: "1.7rem" }}
                          />
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="text-center fs-xsmall mb-3">
          &copy; 2023 A&Co Consulting. All rights reserved.
        </div>
        <Link
          href="#"
          className="position-absolute position-fixed bottom-0 end-0 top-25 mx-4 my-3 arrow-up"
        >
          <h2>
            <BsArrowUpCircle />
          </h2>
        </Link>
      </section>
    </main>
  );
};

export default ContactFooter;
