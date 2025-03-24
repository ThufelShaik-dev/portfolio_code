import React from "react";
import js from "../../public/javascript.png";
import react from "../../public/reactjs.png";
import express from "../../public/express.png";
import node from "../../public/node.png";
import python from "../../public/python.webp";
import mongodb from "../../public/mongodb.jpg";
import mysql from "../../public/mysql.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";

function Experience() {
  const pictures = [
    { id: 1, logo: html, title: "HTML" }, // Frontend
    { id: 2, logo: css, title: "CSS" },
    { id: 3, logo: js, title: "JavaScript" },
    { id: 4, logo: react, title: "React" },
    { id: 5, logo: node, title: "Node.js" }, // Backend
    { id: 6, logo: express, title: "Express.js" },
    { id: 7, logo: mysql, title: "MySQL" }, // Database
    { id: 8, logo: mongodb, title: "MongoDB" },
    { id: 9, logo: python, title: "Python" }, // General-purpose language
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10" name="Experience">
        <div>
          <h1 className="text-3xl font-bold mb-5">Expereince</h1>
          <p className="mb-5 tracking-wider">
            I have been working with the following technologies for more than
            one year.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3   ">
            {pictures.map(({ id, logo, title }) => (
              <div
                className="flex flex-col items-center justify-center border-2 rounded-full md:w-[200px] md:h-[200px] shadow:md-1 p-1 cursor-pointer hover:scale-110 duration-300 "
                key={id}
              >
                <img
                  src={logo}
                  className="md:w-[150px]  rounded-full px-2"
                  alt=""
                />
                <h1 className="mt-2">{title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
