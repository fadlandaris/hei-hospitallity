import { CaretRightIcon } from "@phosphor-icons/react"
import Marquee from "react-fast-marquee";
import { logoData } from "../../data/data";
import BtnDaftar from "../BtnDaftar";
import { LOCAL_VIDEO } from "../../assets/assets";
import { SpeakerSimpleSlashIcon, SpeakerSimpleHighIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";


const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <main id="home" className="b">
      <div className="relative bg-background ">
        <div className="absolute w-72 h-96 bg-primary rounded-full top-40 left-20 blur-[150px]"/>
        <div className="absolute w-72 h-96 bg-secondary rounded-full bottom-40 right-20 blur-[150px]"/>
        <div className="h-[120vh] w-full"></div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,100 1080,100 1440,0 L1440,100 L0,100 Z"/>
        </svg>
        <div className="absolute left-4 right-4 top-30 md:left-12 md:right-12 lg:left-20 lg:right-20 lg:top-40 text-white z-10">
          <div className="">
            <div className="flex justify-center items-center gap-x-1 text-4xl md:text-6xl lg:text-7xl font-black md:font-bold" data-aos="fade-up" >
              <div className="lg:text-6xl text-primary" >
                <CaretRightIcon weight="fill"/>
              </div>
              <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 pb-3">Innovating Your</h1>
            </div>
            <h1 className="text-center text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 pb-3 font-black md:font-bold" data-aos="fade-up" data-aos-delay="300">Hospitality With Us</h1>
            <p className="text-center mt-4 text-sm lg:text-base" data-aos="fade-up" data-aos-delay="600" >HEI (Hospitality Education Institute) menawarkan pendidikan hospitality singkat, terjangkau, <br /> dan menjanjikan karier di dunia perhotelan & pariwisata</p>
            <div className="flex items-center justify-center gap-x-2 md:gap-x-8 mt-6 md:mt-8">
              <BtnDaftar/>
               <a data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" target="_blank" href="/brosur/hei-hospitality-brosur.pdf" className="rounded-full text-sm md:text-base py-2 px-4 md:py-4 md:px-8 border-r-2 border-t-2 border-neutral-400 font-medium relative overflow-hidden group hover:scale-105 transition-all duration-1000 cursor-pointer">
                <p className="z-10 relative">Download Brosur</p>
                <div className="absolute w-[1px] h-full group-hover:w-full group-hover:opacity-100 transition-all duration-1000 opacity-0 gr bg-gradient-to-tr from-secondary to-primary text-primary inset-0 z-0 rounded-full"/>
              </a>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="mt-12 text-black h-[400px] md:h-[600px]">
            <div className="max-w-2xl lg:max-w-5xl h-full mx-auto relative overflow-hidden">
              <div className="absolute left-16 right-16 top-1/2 bottom-0 bg-secondary/50 backdrop-blur-2xl z-0 rounded-3xl"/>
              <div className="absolute left-8 right-8 top-1/2 bottom-4 bg-secondary/50 backdrop-blur-2xl z-0 rounded-3xl"/>
              <div className="absolute left-0 right-0 top-0 bottom-8 bg-primary/20 backdrop-blur-2xl rounded-3xl p-4">
                <div className="bg-neutral-300 w-full h-full rounded-3xl relative overflow-hidden">
                  <video ref={videoRef} src={LOCAL_VIDEO} autoPlay loop playsInline muted className="w-full h-full object-cover object-top" />
                    <button onClick={() => { setIsMuted(!isMuted); if (videoRef.current) videoRef.current.muted = !videoRef.current.muted; }} className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 p-4 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-40 hover:opacity-100 text-white hover:scale-110 transition-all duration-700 cursor-pointer">
                    {!isMuted ? <SpeakerSimpleHighIcon weight="fill"/> : <SpeakerSimpleSlashIcon weight="fill"/>}
                  </button>
                </div>
              </div>
            </div>
          </div>   
          <div data-aos="zoom-in-down" className="mt-12 lg:mt-24 text-black cursor-pointer">
            <Marquee autoFill={true} pauseOnHover={true}>
              {logoData.map((item, i) => {
                return (
                  <img key={i} className="mx-8 w-24 h-12" src={item.img} alt="" />
                )
              })}
            </Marquee>
          </div>    
        </div>
      </div>
    </main>
    
  )
}

export default Hero