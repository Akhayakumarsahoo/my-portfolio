import { LightToggleBtn, Social } from "./Navbar";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { PiCompassTool, PiCompassToolBold } from "react-icons/pi";
import { RiContactsBook3Line, RiContactsBook3Fill } from "react-icons/ri";

export default function MobNavbar({
  isMenuOpen,
  sections,
  activeItem,
  scrollTo,
  handleToggle,
}) {
  const navIcon = [
    {
      section: "Home",
      icon: <GoHome />,
      selIcon: <GoHomeFill />,
    },
    {
      section: "About",
      icon: <BsPerson />,
      selIcon: <BsPersonFill />,
    },
    {
      section: "Projects",
      icon: <PiCompassTool />,
      selIcon: <PiCompassToolBold />,
    },
    {
      section: "Contact",
      icon: <RiContactsBook3Line />,
      selIcon: <RiContactsBook3Fill />,
    },
  ];
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
              className={`flex items-center gap-2 px-3 py-2 rounded-md font-medium w-full text-left`}
              onClick={() => scrollTo(section)}
            >
              <div className="secIcon text-2xl">
                {activeItem === section
                  ? navIcon.find((item) => item.section === section).selIcon
                  : navIcon.find((item) => item.section === section).icon}
              </div>
              <div
                className={`${
                  activeItem === section ? "font-bold" : "text-neutral-500"
                }`}
              >
                {section}
              </div>
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
      <div
        className={`md:hidden absolute right-10 h-10 w-10 bg-white dark:bg-black2  flex items-center justify-center rounded-full ${
          !isMenuOpen
            ? "backdrop-blur-lg backdrop-brightness-125 shadow-lg"
            : ""
        }`}
      >
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
          className="flex flex-col justify-between pl-[2px] w-[35px] h-[25px] cursor-pointer z-10"
        >
          <div className="relative w-6 h-6 scale-75">
            <span
              className={`absolute h-0.5 w-8 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-8 top-3 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-8 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
              }`}
            ></span>
          </div>
        </label>
      </div>
    </>
  );
}
