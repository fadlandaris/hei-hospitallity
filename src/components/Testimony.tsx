import { ArrowUpRight } from "phosphor-react"
import { testimonyData } from "../data/data"

const Testimony = () => {
  return (
    <main className="px-16 mt-24 ">
      <div className="overflow-hidden rounded-4xl bg-gradient-to-b from-primary to-blue-400 h-[90vh] text-white p-16 relative">
        <div className=" text-5xl leading-16">
          <h1>We Empower Companies to find Purpose</h1>
          <h1>and Delivers goals, Explore Our Clients </h1>
          <h1>Success Stories</h1>
        </div>
          {testimonyData.map((item, i) => {
             const cardClasses = [
                "right-[50%] -bottom-8 bg-white/20 backdrop-blur-md -rotate-6 cursor-pointer hover:-rotate-12 hover:right-[55%] hover:bg-white/90 hover:text-lightblack hover:z-20 hover:bottom-16 transition-all duration-700",
                "left-1/2 -translate-x-1/2 bottom-16 bg-white/90 backdrop-blur-xl text-lightblack z-10 cursor-pointer", 
                "left-[50%] -bottom-8 bg-white/20 backdrop-blur-md rotate-6 cursor-pointer hover:rotate-12 hover:left-[55%] hover:bg-white/90 hover:text-lightblack hover:z-20 hover:bottom-16 transition-all duration-700", 
              ];
            return (
              <div key={i} className={`absolute p-8 rounded-2xl w-[500px] group shadow ${cardClasses[i]}`}>
                <div className="flex justify-between items-start">
                  <p className="w-[80%]">{item.desc}</p>
                  <div className="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center group-hover:scale-x-[-1] transition-all duration-700">
                    <ArrowUpRight/>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div className="flex gap-x-4">
                    <div className="w-12 h-12 rounded-full bg-black group-hover:scale-x-[-1] transition-all duration-700 bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}/>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className=" text-sm ">{item.subTitle}</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 group-hover:scale-x-[-1] transition-all duration-700">
                    <item.icon size={30} weight="fill"/>
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