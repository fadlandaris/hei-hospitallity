import { useState, type SetStateAction } from "react"
import { LOGO } from "../assets/assets"
import { navLinks } from "../data/data"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

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
    <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center py-4 px-16 z-50 bg-white/90 backdrop-blur-3xl">
      <div className="w-52 flex items-center gap-x-2">
        <div className="w-8 h-8 p-1 rounded-full bg-primary flex justify-center items-center text-white">
          <img src={LOGO} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-12 font-medium text-lightblack">
        {navLinks.map((item, i) => {
          return (
            <a className={`${activeLink === item.link ? "text-primary transition-all duration-500" : "text-lightblack"}`} href={`#${item.link} `} key={i} >
              {item.nav}
              <div className={`h-[1.5px] bg-primary rounded-full ${activeLink === item.link ? "opacity-100 transition-all duration-500 w-full" : "opacity-0 w-[1%]"}`}/>
            </a>
          )
        })}
      </div>
      <div className="w-52 flex justify-end items-center">
        <Link to={`/pendaftaran-siswa`} className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary/60 to-primary text-white font-medium text-sm">
          Daftar
        </Link>
      </div>
    </nav>
  )
}

export default Navbar