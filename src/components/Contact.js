import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link } from "react-scroll";
import ContactImg from "../assets/contact.jpg";

const Contact = () => {
  const fileName = "gamelayodele.pdf";
  const fileUrl =
    "https://drive.google.com/file/d/1BTi7-uU9iVbzSaxs-ZkmOUWq9NiVtU_Q";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
        }
      );
  };
  return (
    <div id="contact" className="w-full lg:h-screen px-8 py-16">
      <div className="max-w-[1240px] m-auto  w-full md:pl-10">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-500 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  src={ContactImg}
                  alt="contact"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Gamel Ayodele</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/gamel-ayodele-55182b19b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/gamelayo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <AiOutlineMail />
                  </div>

                  <a
                    href={fileUrl}
                    download={fileName}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-md shadow-gray-500 border-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-[#2d3748]"
                      type="text"
                      name="user_name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-[#2d3748]"
                      type="text"
                      name="user_number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-[#2d3748]"
                    type="email"
                    name="user_email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-[#2d3748]"
                    type="text"
                    name="user_subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-[#2d3748]"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link to="main" smooth={true} duration={500}>
            <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
