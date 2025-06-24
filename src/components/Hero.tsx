import { Exam, Bank, Star } from "phosphor-react"
import { socialMediaData } from "../data/data"
import { HERO } from "../assets/assets"

const Hero = () => {
  return (
    <main className="mt-36 px-16  ">
      <div className="h-screen relative grid grid-cols-2 ">
        <div className="absolute bg-gradient-to-b from-lightgray to-white w-[500px] h-72 rounded-4xl bottom-16 left-1/2 -translate-x-1/2 "/>
        <div className="absolute bg-gradient-to-b from-lightgray to-white w-[500px] h-64 rounded-4xl top-0 right-32 "/>
        <div className="flex flex-col justify-between">
          <div className="">
            <div className="text-6xl leading-18">
              <h1>Your Direct Link to</h1>
              <div className="flex items-center gap-x-4">
                <h1>Celebrity</h1>
                <div className="w-10 h-10 rounded-2xl bg-red-500 flex items-center justify-center text-white text-xl">
                  <Exam weight="fill"/>
                </div>
                <h1>Greetings</h1>
              </div>
              <div className="flex items-center gap-x-4">
                <h1>& Endorsement</h1>
                <div className="w-10 h-10 rounded-2xl bg-yellow-500 flex items-center justify-center text-white text-xl">
                  <Bank weight="fill"/>
                </div>
              </div>
            </div>
            <p className="mt-12 text-text">Lorem ipsum dolor sit amet consectetur adipi <br />sicing elit. Doloribus reprehenderit eum </p>
            <div className="flex items-center gap-x-4 mt-8">
              <button className="px-6 py-3 rounded-xl bg-lightblack text-white">
                Register Now
              </button>
              <button className="px-6 py-3 rounded-xl bg-lightgray  font-medium">
                Join As Constributor
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-x-2">
              <div className="flex items-center">
                <div className="text-xl hover:scale-y-150 transition-all duration-300 cursor-pointer text-yellow-500">
                  <Star weight="fill"/>
                </div>
                <div className="text-xl hover:scale-y-150 transition-all duration-300 cursor-pointer text-yellow-500">
                  <Star weight="fill"/>
                </div>
                <div className="text-xl hover:scale-y-150 transition-all duration-300 cursor-pointer text-yellow-500">
                  <Star weight="fill"/>
                </div>
                <div className="text-xl hover:scale-y-150 transition-all duration-300 cursor-pointer text-yellow-500">
                  <Star weight="fill"/>
                </div>
              </div>
              <p className="text-text"><span className="font-semibold text-lightblack">4.8</span> </p>
              <p>on Google Maps</p>
            </div>
            <div className="mt-8 flex items-center gap-x-4">
              {socialMediaData.map((item, i) => {
                return (
                  <div key={i} className="p-3 rounded-2xl bg-lightgray hover:scale-120 transition-all duration-500 cursor-pointer group">
                    <div className="w-8 h-8 flex items-center justify-center bg-red-500 text-white group-hover:scale-x-[-1] transition-all duration-500 rounded-full ">
                      <item.icon weight="fill"/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div
          className="relative" style={{ backgroundImage: `url(${HERO})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
          <div className="absolute bottom-8 right-0 bg-gradient-to-b from-lightgray via-white to-white py-4 px-8 rounded-2xl flex justify-center items-center gap-x-4">
            <div className="flex items-center">
              <div className="w-14 h-20 bg-neutral-300 border-2 border-white rounded-xl"/>
              <div className="w-14 h-18 bg-neutral-300 border-2 border-white rounded-xl -ml-4"/>
              <div className="w-14 h-20 bg-neutral-300 border-2 border-white rounded-xl -ml-4"/>
            </div>
            <h1 className="text-6xl">100 <span className="text-red-500">+</span></h1>
            <div className="text-text">
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
