import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

function Contact() {
  const { addToast } = useToasts();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const submitMail = async () => {
      const call = await fetch(
        `https://getform.io/f/${process.env.REACT_APP_FORM_IO}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (call.ok === true) {
        setLoading(false);
        addToast("Mail Sent Successfully", { appearance: "success" });
        setData({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        addToast("Some Error Occured Please Try Again Later.", {
          appearance: "error",
        });
      }
    };
    submitMail();
  };
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl text-text">
          Get in touch 👋
        </h1>

        <p className="mt-4 text-text">
          Feel free to email me about anything. Do you have some feedback or
          suggestions? You can also reach me around the web:{" "}
          <a
            href="https://www.github.com/dheerajtp"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:underline">GitHub</span>
          </a>
          ,
          <a
            href="https://www.twitter.com/dheerajtp3"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:underline">Twitter</span>
          </a>
        </p>
      </div>

      <form
        onSubmit={formHandler}
        className="max-w-md mx-auto mt-8 mb-0 space-y-4"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Full Name
          </label>

          <div className="relative">
            <input
              name="fullName"
              value={data.fullName}
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter Full Name"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              name="email"
              value={data.email}
              type="email"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>

          <div className="relative">
            <textarea
              name="message"
              value={data.message}
              type="text"
              className="resize w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter Your Message"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto text-center">
          <button
            type="submit"
            className="px-10 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            disabled={loading ? true : false}
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
