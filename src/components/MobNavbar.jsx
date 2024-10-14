import { LightToggleBtn, Social } from "./Navbar";

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
        className={`menu md:hidden fixed top-0 right-0 bottom-0 w-64 border-l-2 border-black bg-gray-800 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="pt-20 px-2 space-y-1 sm:px-3">
          {sections.map((item) => (
            <button
              key={item}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeItem === item
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={"lightToggleBtn absolute top-5 left-5"}>
          <LightToggleBtn />
        </div>
        <div className="socials absolute bottom-20 left-16">
          <Social />
        </div>
      </div>

      {/* Burger Menu */}
      <div className="md:hidden absolute right-10">
        <input
          type="checkbox"
          id="menu-toggle"
          checked={isMenuOpen}
          onChange={handleToggle}
          className="block w-[35px] h-[25px] absolute cursor-pointer opacity-0 z-20"
          aria-label="Toggle menu"
        />
        <label
          htmlFor="menu-toggle"
          className="flex flex-col justify-between w-[35px] h-[25px] cursor-pointer z-10"
        >
          <span
            className={`block w-[33px] h-[4px] mb-[5px] bg-gray-400 rounded transition-transform duration-500 ${
              isMenuOpen ? "transform rotate-45 translate-y-2.6" : ""
            }`}
          ></span>
          <span
            className={`block w-[33px] h-[4px] mb-[5px] bg-gray-400 rounded transition-opacity duration-500 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-[33px] h-[4px] bg-gray-400 rounded transition-transform duration-500 ${
              isMenuOpen ? "transform -rotate-45 -translate-y-2.6" : ""
            }`}
          ></span>
        </label>
      </div>
    </>
  );
}

export default MobNavbar;
