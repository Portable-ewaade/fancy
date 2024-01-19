import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Message from "./Message";

// import Select from "react-select";
// import styles from "@/styles/contact.module.css";

export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [formError, setFormError] = useState("");
  // const [selectedOptions, setSelectedOptions] = useState([]);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set loading to true just before sending the email
    setLoading(true);

    // Check if any required fields are empty
    const requiredFields = [
      "first_name",
      "last_name",
      "email_address",
      "phone_number",
      "company_name",
      "Message",
    ];

    const isFormValid = requiredFields.every((field) => {

      const fieldValue = form.current[field];
      return fieldValue !== "";
    });

    if (!isFormValid) {
      setFormError("Please fill in all required fields.");
      setLoading(false); // Reset loading state
      return;
    }

    const formElement = form.current;

    emailjs
      .sendForm(
        "service_rcgqlja",
        "template_cv4yida",
        formElement, // Pass the form element here
        "h323G-r1G3JnKE4c-"
      )
      .then(
        (result) => {
          setStep(1);

          // Reset the error message and loading state
          setFormError("");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);

          // Reset the loading state
          setLoading(false);
        }
      );
  };



  return (
    <>
      <main className="grid_container h-[88.5vh] mt-4 relative">
        <section className="wrapper box-sec mx-auto absolute bottom-20">
          <div className="card w-1/2 mx-auto my-8 p-10 shadow-lg bg-white text-black rounded-lg">
            <form className="" onSubmit={handleSubmit} ref={form}>
              {step === 0 && (
                <>
                  <label className="font-normal" htmlFor="inputFirstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mb-5 mt-1 block flex-1 border-[0.7px] border-slate-400 rounded-lg w-full bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:p-2 focus:ring-0 sm:text-sm sm:leading-6"
                    name="first_name"
                    placeholder="Enter your first name"
                  />
                  <label className="font-normal" htmlFor="inputLastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mb-5 mt-1 block flex-1 border-[0.7px] border-slate-400 rounded-lg w-full bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:p-2 focus:ring-0 sm:text-sm sm:leading-6"
                    name="last_name"
                    placeholder="Enter your Last name"
                  />
                  <label className="font-normal" htmlFor="inputEmailAddress">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mb-5 mt-1 block flex-1 border-[0.7px] border-slate-400 rounded-lg w-full bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:p-2 focus:ring-0 sm:text-sm sm:leading-6"
                    name="email_address"
                    placeholder="Enter your email address"
                  />
                  <label className="font-normal" htmlFor="inputPhoneNumber">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mb-5 mt-1 block flex-1 border-[0.7px] border-slate-400 rounded-lg w-full bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:p-2 focus:ring-0 sm:text-sm sm:leading-6"
                    name="phone_number"
                    placeholder="Enter your valid phone number"
                  />
                  <label className="font-normal" htmlFor="comapanyName">
                    Comapany's Name
                  </label>
                  <input
                    type="text"
                    className="mb-5 mt-1 block flex-1 border-[0.7px] border-slate-400 rounded-lg w-full bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:p-2 focus:ring-0 sm:text-sm sm:leading-6"
                    name="company_namee"
                    placeholder="Enter your company or business name"
                  />

                  <div className="">
                    <label className="font-normal" htmlFor="message">
                      Message
                    </label>
                    <div className="form-floating">
                      <textarea
                        className="mb-5 mt-1 block flex-1 border-[0.7px] border-slate-400 rounded-lg w-full bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:px-2 py-1 focus:ring-0 sm:text-sm sm:leading-6 h-[8rem]"
                        placeholder="Send us a message"
                        id="floatingTextarea2"
                        name="message"></textarea>
                    </div>
                  </div>
                  {/* row */}
                  <div>
                    <button
                      className="text-lg w-full mt-10 font-semibold bg-[#0A0A8C] py-3 text-white rounded "
                      value="Send"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={loading} // Disable the button while loading
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </>
              )}
            </form>
            {formError && (
              <div className="text-danger text-sm">{formError}</div>
            )}
            {step === 1 && (
              <>
                <Message
                  title={`Thank You for Contacting Us.`}
                  status="success"
                  buttonText="Go Back To Home Page"
                />
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
