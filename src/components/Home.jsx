import React from "react";
import profile from "../../public/profile.png";
import { ReactTyped, Typed } from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
function Home() {
  return (
    <>
      <div className="max-w-screen-2xl my-28 container px-4 md:px-20 mx-auto" name="Home">
        <div className="flex  flex-col  md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-3 order-2 md:order-1">
            <span className="text-xl">Hey there! Glad to have you here</span>
            <div className="flex space-x-3 text-2xl md:text-4xl">
              <h1>I'm </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Cloud Enthusiast", "Tech Explorer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-justify text-sm md:text-md ">
              I'm a full-stack developer skilled in MERN (MongoDB, Express.js,
              React, Node.js) and proficient in AWS and Linux. I love building
              scalable web applications, optimizing performance, and exploring
              cloud technologies. Currently, I'm enhancing my DevOps skills to
              bridge development and deployment seamlessly.
            </p>
            <br />
            <div className="md:flex-row items-center space-y-6 md:space-y-0 md:justify-between flex flex-col   ">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-7">
                  <a
                    href="https://www.linkedin.com/in/thufel-shaik-594180280/"
                    target="_blank"
                  >
                    <li className="border border-[8] ml-3 md:ml-0 text-2xl md:text-3xl rounded-full">
                      <FaLinkedin />
                    </li>{" "}
                  </a>
                  <a href="https://github.com/ThufelShaik-dev" target="_blank">
                    <li className="border border-[2] text-2xl md:text-3xl rounded-full">
                      <FaGithubSquare />
                    </li>
                  </a>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex justify-between">
                  <SiMongodb className="border border-[2]  md:text-3xl text-2xl rounded-full" />
                  <SiExpress className="border border-[2] md:text-3xl text-2xl rounded-full" />
                  <FaReact className="border border-[2]  md:text-3xl text-2xl rounded-full" />
                  <FaNode className="border border-[2] md:text-3xl text-2xl rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 mt-8 md:mt-20 md:ml-48 ">
            <img
              src={profile}
              className="h-[450px] w-[450px] rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
