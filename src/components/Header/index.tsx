import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };
  return (
    <nav
      className={`py-[18px] fixed w-[100%] top-0 z-[999] transform ease-in duration-300 ${
        scrolled ? "py-0 bg-[#121212]" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>

        <div>
          <a
            href="#home"
            className="px-[25px] text-[18px] tracking-[0.8px] opacity-75 hover:opacity-100"
          >
            Home
          </a>
          <a
            href="#skills"
            className="px-[25px] text-[18px] tracking-[0.8px] opacity-75 hover:opacity-100"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-[25px] text-[18px] tracking-[0.8px] opacity-75 hover:opacity-100"
          >
            Projects
          </a>
        </div>

        <div>
          <button
            className="font-bold text-[18px] ml-[18px] border border-white px-[34px] py-[18px] bg-transparent relative
            before:transition-all  before:duration-300 before:-z-[1]
            before:absolute before:w-0 before:h-[100%] before:top-0 before:left-0 
            before:content-[''] hover:before:w-full before:bg-white hover:text-black
          "
          >
            <span className="z-[1]">Let's Connect</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
