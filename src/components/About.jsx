function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 " name="About">
        <div>
          <h1 className="text-2xl md:text-3xl  font-bold mb-5">
            About |{" "}
            <a
              rel="noopener noreferrer"
              href="https://thufelshaik-dev.github.io/my_resume/resume.pdf"
              target="_blank"
            >
              View My Resume
            </a>{" "}
          </h1>
          <p className="text-justify tracking-wide">
            I'm Thufel, a passionate full-stack developer with expertise in the
            MERN stack, AWS, and Linux. I enjoy building scalable web
            applications and optimizing system performance. My goal is to bridge
            development and cloud technologies to create efficient and impactful
            solutions.
          </p>
          <br />
          {/* <h1 className="text-xl text-blue-700 font-bold">
            Education & Training{" "}
          </h1>
          <h3 className="text-md mb-1">
            📌 B.Tech in Electronics and Communication Engineering (ECE)
          </h3>
          <p className="text-sm ml-5 mb-1 md:ml-10">
            Jawaharlal Nehru Technological University Anantapur, May-2024{" "}
          </p>
          <h3 className="text-md mb-1">📌 Additional Training</h3>
          <ul className="text-sm ml-5 space-y-2 md:ml-10">
            <li>Full-Stack Web Development (MERN Stack)</li>
            <li>AWS Cloud Fundamentals</li>
          </ul> */}
          <h1 className="text-2xl text-blue-700 font-bold mb-4">
            Education & Training
          </h1>

          <h3 className="text-lg font-semibold mb-1">
            📌 B.Tech in Electronics and Communication Engineering
          </h3>
          <p className="text-base ml-6 md:ml-12 mb-3">
            Jawaharlal Nehru Technological University Anantapur, May 2024
          </p>

          <h3 className="text-lg font-semibold mb-2">📌 Additional Training</h3>
          <ul className="text-base ml-6 md:ml-12 space-y-2">
            <li>Full-Stack Web Development (MERN Stack)</li>
            <li>AWS Cloud Fundamentals</li>
          </ul>

          <br />
          <h1 className="text-xl text-green-700 font-bold">
            Skills & Expertise{" "}
          </h1>
          <h3 className="text-md"><strong>🛠 Technical Skills:</strong></h3>
          <ul className="space-y-1 ml-5 md:ml-10">
            <li>
              <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, Django
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, MySQL, Oracle
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> AWS, Linux, GitHub
            </li>
          </ul>

          <br />
          <h1 className="text-xl text-purple-700 font-bold">
            Professional Experience{" "}
          </h1>
          <h3 className="text-md">
            📌 <strong>Projects</strong>
          </h3>
          <ul className="space-y-1 ml-5 md:ml-10">
            <li className="tracking-wide">
              <strong>Video Library Project – </strong>Built a video management platform using
              the MERN stack with role-based access control, secure
              authentication, and a responsive UI for seamless admin and user
              interaction.
            </li>

            <li>
              <strong>Portfolio Website –</strong> Developed a personal portfolio using React.js
              .
            </li>
          </ul>
          <h3 className="text-md">📌 <strong>Internships</strong></h3>
          <ul className="space-y-1 ml-5 md:ml-10">
            <li>Internship Role at BrainOvision</li>
          </ul>
          <ul className="space-y-1 ml-10 md:ml-20">
            <li> Worked on AWS.</li>
            <li>Gained experience in EC2, VPC, S3.</li>
          </ul>
          <br />
          <h1 className="text-orange-700 text-xl font-bold">
            Mission Statement
          </h1>
          <p className="text-justify tracking-wide">
            My mission is to build efficient, scalable, and impactful tech
            solutions by combining my ECE background with full-stack
            development.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
