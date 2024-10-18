import { motion } from "framer-motion";
import { Social } from "./Navbar";
import { SlArrowDown } from "react-icons/sl";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="Home"
      className="min-h-screen flex flex-col items-center justify-center px-5 pt-20 md:pt-28 z-0"
    >
      <h1 className="pb-1 text-4xl md:text-6xl font-bold heroColor text-center">
        Hi,I'm Akhaya
      </h1>
      <p className="mt-4 md:mt-8 md:text-xl  font-semibold text-gray-500 text-center">
        A Web Developer & A Tech Enthusiast
      </p>
      <div className="flex space-x-4 mt-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="h-12 w-36 dark:text-gray-300 text-black bg-gray-100 dark:bg-black rounded-full backdrop-blur-lg backdrop-brightness-125 shadow-lg"
        >
          Download CV
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollTo("Contact")}
          className="h-12 w-36 cursor-pointer flex items-center justify-center text-white dark:text-black bg-black dark:bg-gray-100 rounded-full backdrop-blur-lg backdrop-brightness-125 shadow-lg"
        >
          Contact Info
        </motion.a>
      </div>
      <div className="mt-10">
        <Social />
      </div>
      <motion.div
        onClick={() => scrollTo("About")}
        animate={{ scale: [1, 1.3, 1] }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        transition={{
          ease: "linear",
          duration: 1,
          repeat: Infinity,
        }}
        className="ArrowDown absolute bottom-10 text-2xl cursor-pointer"
      >
        <SlArrowDown />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
