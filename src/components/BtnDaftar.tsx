import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

const BtnDaftar = () => {
  return (
     <div data-aos="fade-right"  data-aos-easing="ease-in-sine" className="cursor-pointer group border-r-3 inline-block border-black/20 rounded-full py-2 px-4 md:px-8 md:py-4 bg-gradient-to-tr from-primary to-secondary  items-center font-medium text-white relative overflow-hidden hover:scale-105 transition-all duration-200 ">
      <Link to={'/pendaftaran-siswa'} className="flex items-center gap-x-1 group-hover:gap-x-4 transition-all duration-700 relative z-10">
        Daftar Sekarang
        <div className="group-hover:rotate-45 transition-all duration-1000">
          <ArrowUpRightIcon weight="bold"/>
        </div>
      </Link>
      <div className="absolute w-[1px] h-full group-hover:w-full group-hover:opacity-100 transition-all duration-1000 opacity-0 gr bg-gradient-to-tr from-secondary to-primary text-primary inset-0 z-0 rounded-r-4xl"/>
    </div>
  )
}

export default BtnDaftar