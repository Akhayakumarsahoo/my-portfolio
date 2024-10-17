import { motion } from "framer-motion";
import { Social } from "./Navbar";
function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="Home"
      className="min-h-screen flex flex-col items-center justify-center px-5 mt-16 z-0"
    >
      <h1 className="pb-1 text-5xl md:text-6xl font-bold heroColor text-center">
        Hi,I'm Akshay
      </h1>
      <p className="mt-8 text-xl  font-semibold text-gray-500 text-center">
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
    </motion.section>
  );
}

export default Hero;
