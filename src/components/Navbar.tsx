import { MediumLogo } from "phosphor-react"
import { navLinks } from "../data/data"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center py-4 px-16 z-50 bg-white/80 backdrop-blur-3xl">
      <div className="w-52 flex items-center gap-x-4">
        <div className="w-8 h-8 rounded-full bg-lightblack flex justify-center items-center text-white">
          <MediumLogo weight="fill"/>
        </div>
        <h1 className="font-semibold uppercase text-lightblack">HEI Hospitallity</h1>
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
        <button className="px-6 py-3 rounded-xl bg-lightblack text-white text-sm">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar