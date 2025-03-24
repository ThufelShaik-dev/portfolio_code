import React from "react";
import { FaInstagram, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
      <div className="mx-w-screen-2xl container mx-auto px-4 md:px-20 my-10  ">
        <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center space-x-4 text-2xl">
          <a href="https://www.instagram.com/thufel_shaik_/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://github.com/ThufelShaik-dev" target="_blank">
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/thufel-shaik-594180280/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center ">
          <p className=" text-sm text-center ">
            &copy; 2025 Thufel Shaik. Crafted with 💻, ☕, and infinite loops.
          </p>
        </div>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
