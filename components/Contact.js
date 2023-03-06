import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nt9umqy",
        "template_4op9eue",
        form.current,
        "m4BawOqCOvHQi521I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="lg:mt-16">
              <h2 className="text-[45px] lg:text-[90px] text-gray-200 leading-none mb-12">
                You can reach me here
              </h2>
            </div>
          </div>
          <form
            className="flex-1  rounded-xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              name="user_email"
              required
              type="email"
              placeholder="Email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white transition-all"
            />

            <input
              id="subject"
              required
              type="text"
              placeholder="Subject"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white transition-all"
            />

            <textarea
              id="message"
              required
              placeholder="Message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white transition-all resize-none mb-12"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
