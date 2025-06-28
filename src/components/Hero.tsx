import { Exam, Bank, Star } from "phosphor-react"
import { socialMediaData } from "../data/data"
import { HERO, PERSON_4, PERSON_5, PROGRAM } from "../assets/assets"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <main id="home" className="mt-20 md:mt-24 xl:mt-36 md:px-8 xl:px-16 ">
      <div className="xl:h-screen relative grid grid-cols-1 md:grid-cols-2 ">
        <div className="absolute bg-gradient-to-b from-secondary/20 to-white w-[500px] h-72 rounded-4xl bottom-16 left-1/2 -translate-x-1/2 hidden xl:flex"/>
        <div className="absolute bg-gradient-to-b from-primary/20 to-white w-[500px] h-64 rounded-4xl top-0 right-32 hidden xl:flex"/>
        <div className="flex flex-col justify-between px-8 md:px-0">
          <div className="">
            <div className="text-3xl xl:text-6xl xl:leading-18">
              <h1>Creating the Hotelier's</h1>
              <div className="flex items-center gap-x-4">
                <h1>Champion</h1>
                <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white text-xl">
                  <Exam weight="fill"/>
                </div>
                <h1>,Services</h1>
              </div>
              <div className="flex items-center gap-x-4">
                <h1>& Hospitallity.</h1>
                <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center text-white text-xl">
                  <Bank weight="fill"/>
                </div>
              </div>
            </div>
            <p className="mt-8 text-text">HEI (Hospitality Education Institute) menawarkan <br /> pendidikan hospitality singkat, terjangkau, <br /> dan menjanjikan karier di dunia <br /> perhotelan & pariwisata</p>
            <div className="w-[50%] xl:w-full xl:flex items-center gap-x-4 mt-8">
              <Link to={`/pendaftaran-siswa`} className="block px-6 py-3 rounded-xl bg-gradient-to-r from-primary/60 to-primary text-white font-medium">
                Daftar Sekarang
              </Link>
             <a
                href="/brosur/hei-hospitality-brosur.pdf"
                download
                className="px-6 py-3 rounded-xl bg-lightgray font-medium mt-4 xl:mt-0 inline-block"
              >
                Download Brosur
              </a>
            </div>
          </div>
          <div className=" mt-8 xl:mt-0">
            <div className="flex items-center gap-x-2">
              <div className="flex items-center">
                <div className="text-xl hover:scale-y-150 transition-all duration-300 cursor-pointer text-yellow-400">
                  <Star weight="fill"/>
                </div>
                <div className="text-xl hover:scale-y-150 transition-all duration-300 cursor-pointer text-yellow-400">
                  <Star weight="fill"/>
                </div>
                <div className="text-xl hover:scale-y-150 transition-all duration-300 cursor-pointer text-yellow-400">
                  <Star weight="fill"/>
                </div>
                <div className="text-xl hover:scale-y-150 transition-all duration-300 cursor-pointer text-yellow-400">
                  <Star weight="fill"/>
                </div>
              </div>
              <p className="text-text"><span className="font-semibold text-lightblack">4.8</span> </p>
              <p>on Google Maps</p>
            </div>
            <div className="mt-8 flex items-center gap-x-4">
              {socialMediaData.map((item, i) => {
                return (
                  <a target="blank" href={item.link} key={i} className="p-3 rounded-2xl bg-lightgray hover:scale-120 transition-all duration-500 cursor-pointer group">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary text-white group-hover:scale-x-[-1] transition-all duration-500 rounded-full ">
                      <item.icon weight="fill"/>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="relative h-[500px] md:h-[600px] xl:h-full" style={{ backgroundImage: `url(${HERO})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="scale-75 absolute bottom-8 right-0 bg-gradient-to-b from-lightgray via-white to-white p-4 rounded-2xl flex justify-center items-center gap-x-4">
            <div className="flex items-center">
              <div className="w-14 h-20 bg-neutral rounded-xl" style={{ backgroundImage: `url(${PERSON_4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
              <div className="w-14 h-18 bg-neutral rounded-xl -ml-4" style={{ backgroundImage: `url(${PERSON_5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
              <div className="w-14 h-20 bg-neutral rounded-xl -ml-4" style={{ backgroundImage: `url(${PROGRAM})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
            </div>
            <h1 className="text-3xl xl:text-6xl">50 <span className="text-primary">+</span></h1>
            <div className="text-lightblack">
              <p>Lulusan</p>
              <p>Terbaik</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
