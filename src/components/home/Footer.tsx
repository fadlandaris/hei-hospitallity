import { CaretRightIcon, } from "@phosphor-icons/react"
import BtnDaftar from "../BtnDaftar"

const Footer = () => {
  return (
    <footer className="mt-32 bg-gradient-to-b bg-background text-white px-8 mx:px-12 p-20  relative overflow-hidden">
      <div className="absolute w-96 h-36 rounded-full bg-primary bottom-0 left-0 blur-[100px]"/>
      <div className="absolute w-36 h-96 rounded-full bg-primary bottom-0 left-1/4 blur-[100px] rotate-45"/>
      <div className="absolute w-96 h-36 rounded-full bg-secondary bottom-0 right-0 blur-[100px] rotate-45"/>
      <div className="relative">
        <div className="max-w-5xl mx-auto text-white">
          <div className="flex justify-center">
            <div className="text-3xl text-primary">
              <CaretRightIcon weight="fill"/>
            </div>
            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 pb-3 text-3xl md:text-4xl xl:text-5xl font-bold relative">Apply For Free Guide</h1>
          </div>
          <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 pb-3 text-3xl md:text-4xl xl:text-5xl font-bold relative">Build Yourself With This Free Guide</h1>
          <div className="mt-6 flex justify-center ">
            <BtnDaftar/>
          </div>
        </div>
          <div className="my-6 md:my-12 bg-gradient-to-r from-primary/5 via-white/50 to-primary/5 h-[1px] w-full"/>
          <p className="text-center">© 2025, Hei Hospitality All Right Reserved </p>
      </div>
    </footer>
  )
}

export default Footer