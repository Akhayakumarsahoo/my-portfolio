import { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";
import MobNavbar from "./MobNavbar";
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
    setActiveItem(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="h-16 bg-transparent fixed top-0 z-50 w-full flex items-center justify-between px-5">
      {/* Logo */}
      <a href="#" className="menu-logo">
        <img
          className="h-8 w-8 rounded-full"
          src="Logo1.gif"
          alt="Akshaya Kumar Sahoo"
        />
      </a>

      {/* Menu Items for large screen */}
      <div
        className={`menu bg-color2-bg hidden rounded-full px-1 md:flex items-center justify-center flex-col md:flex-row md:bg-opacity-10 md:backdrop-blur-lg md:backdrop-brightness-125 md:shadow-lg absolute md:left-1/2 md:transform md:-translate-x-1/2 `}
      >
        <ul className="h-12 w-96 list-none lg:space-x-2 rounded-full md:flex md:items-center md:justify-center md:flex-row ">
          {sections.map((section) => (
            <li key={section}>
              <a
                onClick={() => scrollTo(section)}
                className={`px-5 md:py-2 rounded-full cursor-pointer hover:bg-gray-900 ${
                  activeItem === section
                    ? "bg-gray-800 text-white "
                    : " hover:bg-gray-700 text-black hover:text-white dark:text-white"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
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
        <Social />
        <LightToggleBtn />
      </div>
    </nav>
  );
}

export function LightToggleBtn() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  // Light button handle
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <>
      {/* Light toggle button */}
      <div className="cursor-pointer h-8 w-8 pb-1 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center hover:scale-105">
        <input
          id="themeSwither"
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <label htmlFor="themeSwither" className="cursor-pointer">
          {themeMode === "dark" ? (
            <Tooltip title="Turn on light">
              <LightModeIcon sx={{ color: "white" }} />
            </Tooltip>
          ) : (
            <Tooltip title="Turn off light">
              <DarkModeIcon sx={{ color: "white" }} />
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
      <div className="cursor-pointer h-8 w-8 pb-1 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center hover:scale-105">
        <Tooltip title="GitHub">
          <a href="https://github.com/Akhayakumarsahoo">
            <GitHubIcon sx={{ color: "white" }} />
          </a>
        </Tooltip>
      </div>
      {/* X */}
      <div className="cursor-pointer h-8 w-8 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center hover:scale-105">
        <Tooltip title="X">
          <a href="https://x.com/akxyaKumar">
            <i className="fa-brands fa-x-twitter text-white"></i>
          </a>
        </Tooltip>
      </div>
      {/* LinkedIn */}
      <div className="cursor-pointer h-8 w-8 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center hover:scale-105">
        <Tooltip title="LinkedIn">
          <a href="https://www.linkedin.com/in/akxyakumar">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
