import { MediumLogo, ArrowUp } from "phosphor-react"
import { navLinks } from "../data/data"
import { socialMediaData } from "../data/data"

const Footer = () => {
  return (
    <footer className="mt-32 bg-gradient-to-b bg-black text-white px-16 py-24 relative overflow-hidden">
      <div className="w-64 h-32 absolute bg-primary blur-[200px] bottom-0 right-0"/>
      <div className="w-64 h-32 absolute bg-secondary blur-[200px] bottom-0 left-0"/>
      <div className="">
        <div className="grid grid-cols-3">
          <div className=" col-span-2">
              <div className="flex items-center gap-x-4">
                <div className="w-8 h-8 rounded-full bg-lightgray flex justify-center items-center text-lightblack">
                  <MediumLogo weight="fill"/>
                </div>
                <h1 className="font-semibold uppercase ">HEI Hospitallity</h1>
              </div>
            <div className="text-5xl mt-8 leading-14">
              <h1>Optimize Every Details of Creating a </h1>
              <h1>Compensation with Hei Hospitallity</h1>
            </div>
            <button className="px-6 py-3 rounded-xl bg-lightgray text-lightblack mt-12 bg-gradient-to-r from-primary/60 to-primary text-white">
              Register Now
            </button>
          </div>
          <div className=" grid grid-cols-2">
            <div className="flex flex-col justify-between">
              {navLinks.map((item, i) => {
                return (
                  <a className="font-medium" href="">
                    {item.nav}
                  </a>
                )
              })}
            </div>
            <div className="flex flex-col justify-between">
              <div className=" flex items-center justify-between">
                {socialMediaData.map((item, i) => {
                  return (
                    <div key={i} className="scale-80 p-3 rounded-2xl bg-white hover:scale-100 transition-all duration-500 cursor-pointer group">
                      <div className="w-8 h-8 flex items-center justify-center bg-primary text-white group-hover:scale-x-[-1] transition-all duration-500 rounded-full ">
                        <item.icon weight="fill"/>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className=" flex justify-end">
                <button className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-primary text-white text-sm hover:scale-x-[-1] transition-all duration-500 z-10">
                  <ArrowUp weight="bold"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t">
          <p className="mt-12 ">© 2025, Hei Hospitallity All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer