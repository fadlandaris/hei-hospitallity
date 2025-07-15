import { testimonyData } from "../../data/data"
import { SparkleIcon, GraduationCapIcon,  } from "@phosphor-icons/react"
import Title from "../Title"

const Testimony = () => {
  return (
    <main id="testimony" className="px-8 pt-20 pb-20  mt-24 text-white bg-background overflow-hidden relative">
      <div className="absolute w-96 h-36 rounded-full bg-primary bottom-0 left-0 blur-[100px]"/>
      <div className="absolute w-36 h-96 rounded-full bg-primary bottom-0 left-1/4 blur-[100px] rotate-45"/>
      <div className="absolute w-96 h-36 rounded-full bg-secondary bottom-0 right-0 blur-[100px] rotate-45"/>
      <Title title={"We Empower students "} subTitle={"and delivers goals"} mark={"testimony"} variant={""}/>
      <div className="md:mt-12 lg:mt-16 h-[300px]">
        {testimonyData.map((item, i) => {
          const cardClass = [
            "right-[50%] -bottom-8 bg-white/20 backdrop-blur-md -rotate-6 cursor-pointer hover:-rotate-12 hover:right-[55%] hover:bg-white/90 hover:text-lightblack hover:z-20 hover:bottom-16 transition-all duration-700",
            "left-1/2 -translate-x-1/2 bottom-16 bg-white/90 backdrop-blur-xl text-lightblack z-10 cursor-pointer shadow-[2px_3px_37px_-21px_rgba(151,_90,_255,_1)]", 
            "left-[50%] -bottom-8 bg-white/20 backdrop-blur-md rotate-6 cursor-pointer hover:rotate-12 hover:left-[55%] hover:bg-white/90 hover:text-lightblack hover:z-20 hover:bottom-16 transition-all duration-700", 
          ]
           const delayTime = [
              '300',
              '600',
              '900'
            ]
          return (
            <div data-aos="fade-up" data-aos-delay={delayTime[item.id]} key={i} className={`absolute p-12 rounded-4xl scale-70 md:scale-90 xl:scale-100 w-[550px] group shadow ${cardClass[i]}`}>
              <div className="flex justify-between items-start">
                <p className="w-[80%] leading-7">{item.desc}</p>
                <div className="p-4 bg-gradient-to-tr border-r-3 text-2xl border-black/20 from-primary to-secondary text-white rounded-full group-hover:scale-x-[-1] transition-all duration-700">
                  <GraduationCapIcon weight="bold"/>
                </div>
              </div>
              <div className="mt-12 flex justify-between items-start">
                <div className="flex gap-x-4">
                  <div className="w-12 h-12 rounded-full bg-black group-hover:scale-x-[-1] transition-all duration-700 bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}/>
                  <div className="">
                    <h1 className="font-bold">{item.name}</h1>
                    <p className="">{item.subTitle}</p>
                  </div>
                </div>
                <div className="text-primary group-hover:scale-x-[-1] transition-all duration-700">
                  <SparkleIcon size={30} weight="fill"/>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Testimony