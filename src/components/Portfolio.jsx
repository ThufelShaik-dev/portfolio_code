import React from "react";
import js from "../../public/javascript.png";
import react from "../../public/reactjs.png";
import mern from "../../public/mern-developer.jpg";
import { FaDisplay } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function Portfolio() {
  const projects = [
    {
      id: 1,
      logo: js,
      title: "JavaScript",
      summary: "Dynamic Product Display with FakeStore API",
      demo: "https://thufelshaik-dev.github.io/MiniProject_JSON_ex/",
      srcCode: "https://github.com/ThufelShaik-dev/MiniProject_JSON_ex",
    },
    {
      id: 2,
      logo: js,
      title: "JavaScript",
      summary: "Smart Queue Token Management System",
      demo: "https://thufelshaik-dev.github.io/JS_bank_project/bank.html",
      srcCode: "https://github.com/ThufelShaik-dev/JS_bank_project",
    },
    {
      id: 3,
      logo: react,
      title: "React",
      summary: "Interactive Portfolio Built with React.js",
      demo: "https://cheery-gecko-713719.netlify.app/",
      srcCode: "https://github.com/ThufelShaik-dev/portfolio_code",
    },
    {
      id: 4,
      logo: mern,
      title: "MERN",
      summary: "Video Library Project",
      demo: "https://github.com/ThufelShaik-dev/Video_Library_Project",
      srcCode: "https://github.com/ThufelShaik-dev/Video_Library_Project",
    },
  ];
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
        name="Portfolio"
      >
        <div>
          <h1 className="font-semibold text-3xl mb-5 ">Portfolio</h1>
          <h1 className="underline font-bold my-3 text-xl">
            Featured Projects
          </h1>
          {/* //card  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
            {projects.map(({ id, logo, title, summary, demo, srcCode }) => (
              <div
                className="md:w-[300ox] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-90 duration-200"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] ml-[100px] md:ml-[100px] rounded-full border-[2px] h-[120px]"
                  alt=""
                />
                <div className="font-bold px-2 text-2xl mb-2">{title}</div>
                <p className="px-2  text-gray-700 tracking-wider ">{summary}</p>
                <div className="flex justify-around py-4 px-4 space-x-3 ">
                  <a href={demo} target="_blank">
                    <button className="bg-yellow-500 flex items-center hover:bg-yellow-700 font-bold py-2 px-4 rounded text-black">
                      <FaDisplay />
                      &nbsp; Demo
                    </button>
                  </a>
                  <a href={srcCode} target="_blank">
                    <button className="bg-green-500 flex items-center hover:bg-green-700 font-bold py-2 px-4 rounded  text-black">
                      <FaGithubSquare />
                      &nbsp; Source Code
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
