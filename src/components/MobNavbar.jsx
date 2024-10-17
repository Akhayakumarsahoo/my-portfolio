import { LightToggleBtn, Social } from "./Navbar";
import { motion } from "framer-motion";
function MobNavbar({
  isMenuOpen,
  sections,
  activeItem,
  scrollTo,
  handleToggle,
}) {
  return (
    <>
      <div
        className={`menu md:hidden fixed top-0 right-0 w-64 h-96 rounded-2xl bg-white dark:bg-black2 backdrop-blur-lg md:backdrop-brightness-125 md:shadow-lg transform ${
          isMenuOpen ? "translate-x-0 right-10" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="pt-20 px-2 space-y-1 sm:px-3">
          {sections.map((section) => (
            <button
              key={section}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeItem === section
                  ? "font-bold animatedText"
                  : "text-black dark:text-white"
              }`}
              onClick={() => scrollTo(section)}
            >
              {section}
            </button>
          ))}
        </div>
        <div className={`absolute top-5 left-5`}>
          <LightToggleBtn id={"mob"} />
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 ">
          <Social />
        </div>
      </div>

      {/* Burger Menu */}
      <div className="md:hidden absolute right-10 h-14 w-14 bg-white dark:bg-black2  flex items-center justify-center rounded-full dark:bg-color1-bg">
        <input
          type="checkbox"
          id="menu-toggle"
          checked={isMenuOpen}
          onChange={handleToggle}
          className="block absolute cursor-pointer opacity-0 z-20"
          aria-label="Toggle menu"
        />
        <label
          htmlFor="menu-toggle"
          className="flex flex-col justify-between w-[35px] h-[25px] cursor-pointer z-10"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute h-0.5 w-8 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-1"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-8 top-3 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-8 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-5"
              }`}
            ></span>
          </div>
        </label>
      </div>
    </>
  );
}

export default MobNavbar;
