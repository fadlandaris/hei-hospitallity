import { whyUsData, aboutData } from "../data/data"
import { ABOUT } from "../assets/assets"
import { ArrowUpRight } from "phosphor-react"
import { HERO } from "../assets/assets"
import Marquee from "react-fast-marquee"
import { marqueeData } from "../data/data"

const About = () => {
  return (
    <main className="py-16 mt-16  bg-gradient-to-b from-lightgray to-lightgray/50">
      <div className="px-16">
        <h1 className="text-5xl leading-14">Bridging the Gap <br />Between Artist and Fans</h1>
        <div className="mt-16">
          <div className="w-full h-[80vh] relative bg-neutral-300 rounded-4xl">
            <div className="p-8 w-[500px] h-72 flex flex-col justify-between rounded-2xl absolute right-32 -top-32 bg-white z-10 shadow">
             <div className="flex justify-between">
              <h1 className="text-3xl">Offering a Uniqe <br /> and Unforgettable <br /> Experience.</h1>
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-text/50 flex items-center justify-center">
                <ArrowUpRight/>
              </div>
             </div>
             <div className="flex justify-between items-end">
              <h1 className="uppercase font-medium text-text">New Experience</h1>
              <div className="w-28 h-28 rounded-3xl bg-gradient-to-b from-red-500/50 to-red-500/80 ">
                <img src={HERO} className="object-cover w-full h-full object-top" alt="" />
              </div>
             </div>
            </div>
            <div className="absolute inset-0  bg-gradient-to-t from-lightblack via-lightblack/50 to-white/5 rounded-br-4xl rounded-bl-4xl"/>
            <img src={ABOUT} className="w-full h-full object-cover rounded-3xl object-bottom" />
            <div className="absolute bottom-0 w-full p-16 ">
              <div className="px-4 py-2 bg-white inline-block rounded-full text-text text-sm">
                Why Choose Us ?
              </div>
              <div className="grid grid-cols-4 gap-x-10 mt-8">
                {whyUsData.map((item, i) => {
                  return (
                    <div key={i} className=" text-white">
                      <h1 className="text-3xl tracking-wide font-medium">{item.title}</h1>
                      <p className="mt-4">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-x-16">
            {aboutData.map((item, i) => {
              return (
                <div key={i} className="flex items-start gap-x-4">
                  <div className="text-3xl ">
                    <item.icon weight="fill"/>
                  </div>
                  <div className="flex items-start gap-x-2 text-7xl">
                    <h1>{item.value}</h1>
                    <p className="text-3xl font-semibold">{item.subTitle}</p>
                  </div>
                  <p className="text-text">{item.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mt-28 px-8">
        <Marquee autoFill pauseOnHover className="py-8 cursor-pointer"  >
          {marqueeData.map((item, i) => {
            const bgClass = (id: number) => {
              switch (id) {
                case 1: return "bg-yellow-50";
                case 2: return "bg-red-100";
                case 3: return "bg-green-100";
                case 4: return "bg-blue-100";
                case 5: return "bg-purple-100";
                default: return "bg-gray-100";
              }
            };
            return (
              <div key={i} className={`mx-2 hover:mx-8 rounded-xl w-20 h-20  hover:scale-150 transition-all duration-500
              ${bgClass(item.id)}`}>
                <img src={item.img} className="w-full h-full object-cover object-top" alt="" />
              </div>
            )
          })}
        </Marquee>
      </div>
    </main>
  )
}

export default About