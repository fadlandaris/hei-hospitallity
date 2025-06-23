import { programData } from "../data/data"
import {  Play } from "phosphor-react"
import { HERO } from "../assets/assets"

const Programs = () => {
  return (
    <main className="mt-20 px-16">
      <div className="">
        <div className="flex items-start justify-between group">
          <div>
            <h1 className="text-5xl leading-14 flex items-center gap-x-4">
              Stay Happy 
              <div className="w-20 h-12 bg-gradient-to-b from-red-500/50 to-red-500/80 rounded-2xl relative group-hover:scale-x-[-1] transition-all duration-500">
                <img src={HERO} className="absolute bottom-0 right-1/2 translate-x-1/2 w-16 h-20" />
              </div>
              With
            </h1>
            <h1 className="text-5xl leading-14">Our Selected Programs</h1>
          </div>
          <p className="text-text w-1/3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus a? Molestias autem soluta aperiam neque sit corrupti quaerat temporibus?</p>
        </div>
        <div className="mt-24 grid grid-cols-1">
          {programData.map((item, i) => {
            return (
              <div key={i} className={`${i === programData.length - 1  ? "border-b" : ""} group hover:py-24 transition-all duration-500 cursor-pointer border-t py-20 border-text/20 grid grid-cols-2 `}>
                <div className="group-hover:scale-105 transition-all duration-500">
                  <p className="mb-4 text-xl font-semibold italic text-text">0{item.id}</p>
                  <h1 className="text-3xl font-medium w-1/2">{item.title}</h1>
                </div>
                <div className="flex justify-between group-hover:scale-105 transition-all duration-500">
                  <p className="w-[50%] text-text">{item.desc}</p>
                 <button className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-b from-red-500/50 to-red-500/80 text-white text-sm group-hover:scale-x-[-1] transition-all duration-500">
                   <Play weight="fill"/>
                 </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Programs