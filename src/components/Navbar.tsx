import { LOGO } from "../assets/assets"
import { navLinks } from "../data/data"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center py-4 px-16 z-50 bg-white/80 backdrop-blur-3xl">
      <div className="w-52 flex items-center gap-x-2">
        <div className="w-8 h-8 p-1 rounded-full bg-primary flex justify-center items-center text-white">
          <img src={LOGO} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-12 font-medium text-lightblack">
        {navLinks.map((item, i) => {
          return (
            <a href="" key={i}>
              {item.nav}
            </a>
          )
        })}
      </div>
      <div className="w-52 flex justify-end items-center">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary/60 to-primary text-white font-medium text-sm">
          Daftar
        </button>
      </div>
    </nav>
  )
}

export default Navbar