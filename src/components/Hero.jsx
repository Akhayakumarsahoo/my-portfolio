import { motion } from "framer-motion";
import { Social } from "./Navbar";
import { SlArrowDown } from "react-icons/sl";

function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const variants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col items-center justify-center px-5 pt-20 md:pt-28 z-0"
    >
      <motion.h1
        variants={variants}
        initial={"initial"}
        whileInView={"animate"}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        className="pb-1 text-4xl md:text-6xl font-bold heroColor text-center"
      >
        Hi,I&apos;m Akhaya
      </motion.h1>
      <motion.p
        variants={variants}
        initial={"initial"}
        whileInView={"animate"}
        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
        className="mt-4 md:mt-8 md:text-xl  font-semibold text-gray-500 text-center"
      >
        A Web Developer & A Tech Enthusiast
      </motion.p>
      <motion.div
        variants={variants}
        initial={"initial"}
        whileInView={"animate"}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        className="flex space-x-4 mt-5"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="h-12 w-36 cursor-pointer flex items-center justify-center text-black dark:text-white bg-white dark:bg-black rounded-full backdrop-blur-lg backdrop-brightness-125 shadow-lg"
          href="https://docs.google.com/document/d/1YxmiOtYi_uMzCi6v6cxuV055NRJZ3ULjVmpL_L-TbEo/edit?usp=sharing"
          target="_blank"
        >
          My CV
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollTo("Contact")}
          className="h-12 w-36 cursor-pointer flex items-center justify-center text-white dark:text-black bg-black dark:bg-gray-100 rounded-full backdrop-blur-lg backdrop-brightness-125 shadow-lg"
        >
          Contact Info
        </motion.a>
      </motion.div>
      <motion.div
        variants={variants}
        initial={"initial"}
        whileInView={"animate"}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
        className="mt-10"
      >
        <Social />
      </motion.div>
      <motion.div
        variants={variants}
        initial={"initial"}
        whileInView={"animate"}
        transition={{
          opacity: { delay: 1, duration: 0.5, type: "spring" },
          scale: { ease: "linear", duration: 1, repeat: Infinity },
        }}
        onClick={() => scrollTo("About")}
        className="ArrowDown absolute bottom-16 md:bottom-10 text-2xl cursor-pointer"
      >
        <SlArrowDown />
      </motion.div>
    </section>
  );
}

export default Hero;
