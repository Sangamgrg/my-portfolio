import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/95e8038a-0260-4dff-9af2-d42b06246172"
        className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-base text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email- sangamgrg89@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          placeholder="Message"
          rows="10"></textarea>
        <button className="text-white border-2 hover:bg-base hover:border-primary px-4 py-3 my-8 mx-auto flex items-center">
          Let's talk
        </button>
      </form>
    </div>
  );
};

export default Contact;
