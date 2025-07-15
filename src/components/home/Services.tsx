import {  ArrowUpRightIcon } from "@phosphor-icons/react"
import { serviceData } from "../../data/data"
import Title from "../Title"

const Services = () => {
  return (
    <main id="whyus" className="mt-20 lg:mt-32 px-8 md:px-12 lg:px-20 py-24 bg-background relative overflow-hidden">
      <div className="absolute w-96 h-36 rounded-full bg-primary top-0 lg:bottom-0 left-0 blur-[100px]"/>
      <div className="absolute w-36 h-96 rounded-full bg-primary bottom-0 left-1/4 blur-[100px] rotate-45"/>
      <div className="absolute w-96 h-36 rounded-full bg-secondary bottom-0 right-0 blur-[100px] rotate-45"/>
      <div className="relative">
        <Title title={"We Offer wide range"} subTitle={"Hospitality Services"} mark={"Why Us?"} variant={"center"}/>
        <div className="mt-12 grid grid-cols-1 gap-y-6 md:grid-cols-2 xl:grid-cols-3 gap-x-6">
          {serviceData.map((item, i) => {
            const delayTime = [
              '300',
              '600',
              '900'
            ]
            return (
              <div data-aos="fade-up" data-aos-delay={delayTime[item.id]} key={i} className={`group cursor-pointer hover:scale-105 transition-all duration-700 rounded-4xl bg-white/20 text-white backdrop-blur-md p-8 ${i === serviceData.length -2 ? "shadow-[2px_3px_37px_-21px_rgba(151,_90,_255,_1)]" : ""}`}>
                <div className="flex justify-center items-center">
                  <div className="p-4 bg-gradient-to-tr border-r-3 border-black/20 from-primary to-secondary text-white rounded-full inline-block mx-auto text-4xl group-hover:scale-x-[-1] transition-all duration-1000">
                    <item.icon weight="bold"/>  
                  </div>
                </div>
                <h1 className="text-center mt-6 text-2xl font-semibold">{item.title}</h1>
                <p className="text-center mt-4">{item.desc}</p>
                <p className="text-center mt-1">{item.subDesc}</p>
                <div className="flex items-center gap-x-1 justify-center mt-12 text-white font-semibold">
                  Get Started
                  <div>
                    <ArrowUpRightIcon/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Services