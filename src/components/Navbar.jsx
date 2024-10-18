import { useState, useEffect } from "react";
import { PiMoonStarsFill } from "react-icons/pi";
import { BsSun } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import MobNavbar from "./MobNavbar";
import { motion } from "framer-motion";

export default function Navbar() {
  // Menu toggle handle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = ["Home", "About", "Projects", "Contact"];
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      if (currentSection) {
        setActiveItem(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //Scroll effect
  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, top: -100 }}
      animate={{ opacity: 1, top: 10 }}
      transition={{
        delay: 0.5,
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="h-16 fixed top-5 z-50 w-full flex items-center justify-between px-10 md:px-20"
    >
      {/* Logo */}
      <div className="flex flex-row">
        <Tooltip title="sup!">
          <a
            onClick={() => scrollTo("Home")}
            className="h-10 w-10 rounded-full backdrop-blur-lg backdrop-brightness-150 shadow-lg "
          >
            <img
              className="h-10 w-10 rounded-full "
              src="Logo.gif"
              alt="Akshaya Kumar Sahoo"
            />
          </a>
        </Tooltip>
        <a
          href="#Home"
          className="animatedText text-xl pl-3 font-extrabold cursor-pointer pt-1"
        >
          AKS
        </a>
      </div>

      {/* Menu Items for large screen */}
      <div
        className={`menu bg-gray-100 dark:bg-black2 hidden rounded-full px-1 md:flex items-center justify-center flex-col md:flex-row md:backdrop-blur-lg md:backdrop-brightness-125 md:shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2 dark:[#555] `}
      >
        <motion.ul
          layout
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-12 w-80 list-none rounded-full md:flex md:items-center md:justify-center md:flex-row"
        >
          {sections.map((section) => (
            <motion.li
              layout
              transition={{ type: "spring" }}
              key={section}
              onClick={() => scrollTo(section)}
              className={`px-4 md:py-2 text-sm rounded-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 ${
                activeItem === section
                  ? "font-bold"
                  : "text-neutral-500 dark:text-neutral-500"
              } `}
            >
              {section}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <MobNavbar
        isMenuOpen={isMenuOpen}
        sections={sections}
        activeItem={activeItem}
        scrollTo={scrollTo}
        handleToggle={handleToggle}
      />

      {/* Social links and Light Toggle button */}
      <div className="hidden md:flex items-center md:space-x-2 lg:space-x-4">
        <LightToggleBtn id={"large"} />
      </div>
    </motion.nav>
  );
}

export function LightToggleBtn({ id }) {
  const [themeMode, setThemeMode] = useState("light");

  // actual change in theme
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  // Light button handle
  const onChangeBtn = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* Light toggle button */}
      <div
        className={`cursor-pointer h-8 w-8 dark:text-white text-xl rounded-full flex items-center justify-center hover:scale-105 transition duration-200 ease-in-out md:backdrop-blur-lg md:backdrop-brightness-125 md:shadow-lg`}
      >
        <input
          id={id}
          type="checkbox"
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <label htmlFor={id} className="cursor-pointer">
          {themeMode === "dark" ? (
            <Tooltip title="Turn on light">
              <div className="">
                <PiMoonStarsFill />
              </div>
            </Tooltip>
          ) : (
            <Tooltip title="Turn off light">
              <div className="">
                <BsSun />
              </div>
            </Tooltip>
          )}
        </label>
      </div>
    </>
  );
}

export function Social() {
  return (
    <div className="flex space-x-5 md:space-x-2 lg:space-x-4">
      {/* GitHub */}
      <div className="cursor-pointer h-8 w-8 text-white text-xl bg-black hover:bg-gray-900 rounded-full flex items-center justify-center hover:scale-105 transition duration-200 ease-in-out md:backdrop-blur-lg md:backdrop-brightness-125 md:shadow-lg">
        <Tooltip title="GitHub">
          <a href="https://github.com/Akhayakumarsahoo">
            <FaGithub />
          </a>
        </Tooltip>
      </div>
      {/* X */}
      <div className="cursor-pointer h-8 w-8 text-white text-lg bg-black hover:bg-gray-900 rounded-full flex items-center justify-center hover:scale-105 transition duration-200 ease-in-out md:backdrop-blur-lg md:backdrop-brightness-125 md:shadow-lg">
        <Tooltip title="X">
          <a href="https://x.com/akxyaKumar">
            <FaXTwitter />
          </a>
        </Tooltip>
      </div>
      {/* LinkedIn */}
      <div className="cursor-pointer h-8 w-8 text-white text-lg bg-black hover:bg-gray-900 rounded-full flex items-center justify-center hover:scale-105 transition duration-200 ease-in-out md:backdrop-blur-lg md:backdrop-brightness-125 md:shadow-lg">
        <Tooltip title="LinkedIn">
          <a href="https://www.linkedin.com/in/akxyakumar">
            <FaLinkedinIn />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
