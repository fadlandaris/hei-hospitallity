import { useState, useEffect, type SetStateAction } from "react";
import { LOGO } from "../assets/assets";
import { navLinks } from "../data/data";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleIntersect = (entries: any[]) => {
      entries.forEach((entry: { isIntersecting: any; target: { id: SetStateAction<string> } }) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    navLinks.forEach((item) => {
      if (item.link) {
        const element = document.getElementById(item.link);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => {
      navLinks.forEach((item) => {
        if (item.link) {
          const element = document.getElementById(item.link);
          if (element) {
            observer.unobserve(element);
          }
        }
      });
    };
  }, []);

  return (
    <nav className="pt-4 fixed top-0 left-0 right-0 z-50 text-white bg-background/50 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-8 md:px-12 lg:px-20 relative">
        <div className="flex items-center gap-x-2 w-32">
          <div className="w-6 h-6 p-1 rounded-full bg-gradient-to-tr from-primary/50 to-secondary flex justify-center items-center text-white">
            <img src={LOGO} alt="" />
          </div>
          <h1 className="font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">HEI</h1>
        </div>

        <div className=" items-center gap-x-8 hidden lg:flex">
          {navLinks.map((item, i ) => {
            return (
              <div key={i}>
                <a href={`#${item.link}`} className="flex items-center gap-x-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300" >
                  {item.nav}
                </a>
                <div className={`${activeLink === item.link ? "opacity-100 transition-all duration-500 w-full" : "opacity-0 w-[1%]"} h-[1px] w-full bg-gradient-to-r from-primary/50 via-white to-primary/50 `}/>
              </div>
            )
          })}
        </div>
        <div className=" items-center w-32 justify-end hidden lg:flex">
          <a target="_blank" href="https://wa.me/6285150007878" className="group relative overflow-hidden flex bg-gradient-to-tr from-green-600 to-green-400 items-center gap-x-1 p-2 px-3 rounded-full text-sm cursor-pointer">
            <p className="relative z-10">Whatsapp</p>
            <WhatsappLogoIcon className="relative z-10"/>
            <div className="absolute w-[1px] opacity-0 h-full bg-gradient-to-tr from-green-400 to-green-600 rounded-full inset-0 group-hover:w-full group-hover:opacity-100 transition-all duration-1000"/>
          </a>
        </div>
            <button
          className="flex lg:hidden flex-col items-center justify-center p-4"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="space-y-1.5">
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center ${
                open ? "rotate-45 translate-y-2" : "rotate-0"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center ${
                open ? "-rotate-45 -translate-y-2" : "rotate-0"
              }`}
            />
          </div>
        </button>
        {open ? (
          <div className={`w-full transition-all duration-1000 absolute top-[67px] bg-background/50  right-0 flex flex-col gap-y-4 pt-4 p-8 rounded-b-2xl`}>
            {navLinks.map((item, i ) => {
              return (
                <div key={i}>
                  <a href={`#${item.link}`} className="flex items-center gap-x-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300" >
                    {item.nav}
                  </a>
                  <div className={`${activeLink === item.link ? "opacity-100 transition-all duration-1000 w-full" : "opacity-0 w-[1%]"} h-[1px] bg-gradient-to-r from-primary/50 via-white to-primary/50 hidden lg:flex`}/>
                </div>
              )
            })}
          <div>
            <a target="_blank" href="https://wa.me/6285150007878" className="group relative overflow-hidden flex bg-gradient-to-tr from-green-600 to-green-400 items-center gap-x-1 p-2 px-3 rounded-full text-sm cursor-pointer">
              <p className="relative z-10">Whatsapp</p>
              <WhatsappLogoIcon className="relative z-10"/>
              <div className="absolute w-[1px] opacity-0 h-full bg-gradient-to-tr from-green-400 to-green-600 rounded-full inset-0 group-hover:w-full group-hover:opacity-100 transition-all duration-1000"/>
            </a>
          </div>
        </div>
        ) : (
          null
        )}
      </div>
      <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5">
      </div>
    </nav>
  );
};

export default Navbar;
