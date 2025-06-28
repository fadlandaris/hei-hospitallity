import { useState, useEffect, type SetStateAction } from "react";
import { LOGO } from "../assets/assets";
import { navLinks } from "../data/data";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between py-2 px-8 md:py-4 md:px-8 lg:px-16 z-50 bg-white/90 backdrop-blur-3xl ">
      {/* Logo */}
      <div className="w-52 flex items-center gap-x-2">
        <div className="w-8 h-8 p-1 rounded-full bg-primary flex justify-center items-center text-white">
          <img src={LOGO} alt="Logo" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-x-8 font-medium text-lightblack">
        {navLinks.map((item, i) => (
          <a
            key={i}
            href={`#${item.link}`}
            className={`${
              activeLink === item.link
                ? "text-primary transition-all duration-500"
                : "text-lightblack"
            }`}
          >
            {item.nav}
            <div
              className={`h-[1.5px] bg-primary rounded-full ${
                activeLink === item.link
                  ? "opacity-100 transition-all duration-500 w-full"
                  : "opacity-0 w-[1%]"
              }`}
            />
          </a>
        ))}
      </div>

      {/* Daftar Button (Desktop) */}
      <div className="hidden sm:flex w-52 justify-end items-center">
        <Link
          to={`/pendaftaran-siswa`}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary/60 to-primary text-white font-medium text-sm"
        >
          Daftar
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X size={28} className="text-primary" />
          ) : (
            <List size={28} className="text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col px-6 py-4 sm:hidden">
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={`#${item.link}`}
              className="py-2 text-sm font-medium border-gray-200 text-lightblack"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.nav}
            </a>
          ))}
          <Link
            to={`/pendaftaran-siswa`}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-center bg-gradient-to-r from-primary/60 to-primary text-white py-2 rounded-xl font-medium text-sm"
          >
            Daftar
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
