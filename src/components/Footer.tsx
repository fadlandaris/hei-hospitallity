import { ArrowUp } from "phosphor-react"
import { navLinks } from "../data/data"
import { socialMediaData } from "../data/data"
import { LOGO } from "../assets/assets"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="mt-32 bg-gradient-to-b bg-black text-white px-8 lg:px-16 py-12 lg:py-24 relative overflow-hidden">
      <div className="w-64 h-32 absolute bg-primary blur-[150px] bottom-0 right-0"/>
      <div className="w-64 h-32 absolute bg-secondary blur-[150px] bottom-0 left-0"/>
      <div className="">
        <div className="lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2">
              <div className="flex items-center gap-x-2">
                 <div className="w-8 h-8 p-1 rounded-full bg-primary flex justify-center items-center text-white">
                  <img src={LOGO} alt="" />
                </div>
              </div>
            <div className="text-3xl lg:text-4xl mt-8 lg:leading-14">
              <h1>Optimize Every Details of Creating a </h1>
              <h1>Compensation with Hei Hospitallity</h1>
            </div>
            <div className="mt-12">
              <Link to={`/pendaftaran-siswa`} className="px-6 py-3 rounded-xl bg-lightgray bg-gradient-to-r from-primary/60 to-primary text-white">
                Daftar Sekarang
              </Link>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 grid lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              {navLinks.map((item, i) => {
                return (
                  <a key={i} className="font-medium mt-4 lg:mt-0" href="">
                    {item.nav}
                  </a>
                )
              })}
            </div>
            <div className="flex flex-col justify-between mt-8 lg:mt-0 w-[50%] lg:w-full">
              <div className=" flex items-center justify-between">
                {socialMediaData.map((item, i) => {
                  return (
                    <a href={item.link} target="blank" key={i} className=" p-3 rounded-2xl bg-white hover:scale-120 transition-all duration-500 cursor-pointer group">
                      <div className="w-8 h-8 flex items-center justify-center bg-primary text-white group-hover:scale-x-[-1] transition-all duration-500 rounded-full ">
                        <item.icon weight="fill"/>
                      </div>
                    </a>
                  )
                })}
              </div>
              <div className=" flex justify-end mt-4 lg:mt-0">
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