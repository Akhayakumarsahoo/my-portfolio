import { FaSchool } from "react-icons/fa6";
import { SiKnowledgebase } from "react-icons/si";
import { images } from "../assets/devIcon";
import { motion } from "framer-motion";

export default function About() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="About"
      className="min-h-screen flex flex-col justify-center md:mx-16 lg:mx-36"
    >
      {/* heading */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, type: "ease" }}
        viewport={{ once: true }}
        className="Heading pt-12 md:pt-20 text-center"
      >
        <p className="text-[#555] dark:text-gray-300">Get To Know More</p>
        <h1 className=" text-4xl md:text-5xl heroColor font-bold">About Me</h1>
      </motion.div>
      {/* About */}
      <div className="min-w-screen flex flex-col md:flex-row md:items-center md:justify-center mt-10">
        {/* Image */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="Image md:w-2/5 flex justify-center mb-5"
        >
          <img
            src="akhayakumarsahoo.jpg"
            alt="akhayakumarsahoo"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 hover:backdrop-blur-lg hover:backdrop-brightness-125 hover:shadow-lg transition-all duration-500 ease-in-out"
            loading="lazy"
          />
        </motion.div>
        {/* Info */}
        <motion.div
          variants={variants}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
          className="Info md:w-3/5 px-10 md:px-20 lg:px-0 h-full flex flex-col md:justify-center"
        >
          <div className="Name pb-2">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Akhaya Kumar Sahoo
            </h1>
          </div>
          <p className="text-[#222] dark:text-gray-200">
            <span>
              I am a passionate web developer specializing in creating dynamic
              and responsive web applications. With expertise in React, Node.js,
              and Tailwind CSS, I strive to build user-friendly interfaces that
              provide seamless experiences.
            </span>
            <br />
            <br />
            <span>
              My journey into web development began with a fascination for
              technology and a desire to solve real-world problems through code.
            </span>
          </p>
          <div className="pt-3">
            <span className="flex items-center mt-5 mb-2 space-x-5 text-3xl">
              <FaSchool />
              <h1 className="text-xl font-bold">Education</h1>
            </span>

            <p className="text-black dark:text-gray-300">
              Currently i am pursuing my B.Sc. Bachelors Degree in Computer
              Science
            </p>
          </div>
        </motion.div>
      </div>

      {/*Skills and tech */}
      <div className="h-[200px] mt-20 md:h-48 md:mb-5 flex flex-col">
        <span className=" flex items-center gap-4 pb-5 text-2xl pl-12 md:pl-0">
          <SiKnowledgebase />
          <span className="text-lg md:text-2xl font-bold">
            Skills & Technologies
          </span>
        </span>

        <div className=" relative h-1/2 w-full overflow-hidden flex items-center">
          {/* Left Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 dark:from-black1 to-transparent pointer-events-none z-10" />

          {/* Right shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 dark:from-black1 to-transparent pointer-events-none z-10" />
          <div className="absolute flex gap-10 animate-loop-scroll hover:[animation-play-state:paused]">
            {[...images, ...images].map((image, idx) => (
              <img
                className="w-16 h-16 hover:scale-125 transition-all duration-100 ease-in-out"
                loading="lazy"
                src={image}
                alt={image}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
