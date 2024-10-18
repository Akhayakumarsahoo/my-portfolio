import { Social } from "./Navbar";

function Footer() {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-700 h-44 w-full flex items-center text-neutral-500 md:black flex-col justify-center space-y-5">
      <hr />
      <div className="md:absolute md:left-20">
        &copy;2024 Akhaya Kumar Sahoo
      </div>
      <div className="md:absolute md:right-20">
        <Social />
      </div>
    </div>
  );
}

export default Footer;
