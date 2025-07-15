import { StarIcon} from "@phosphor-icons/react"
import BtnDaftar from "../BtnDaftar"
import Title from "../Title"
import { HERO } from "../../assets/assets"

const About = () => {
  return (
    <main id="about"  className="mt-[200px] md:mt-[450px] lg:mt-[600px] xl:mt-[500px] px-8 md:px-12 lg:px-20 ">
      <div className=" grid grid-cols-1 gap-y-12 lg:grid-cols-2">
        <div data-aos="fade-right"  data-aos-easing="ease-in-sine" className="flex flex-col justify-center">
          <div className="">
            <Title title={"Our Journey,"} subTitle={"Vision, and Value"} mark={"About Us"} variant={"left"}/>
            <p className="mt-6 leading-7">
            HEI (Hospitality Education Institute) adalah Lembaga Pendidikan dan pelatihan perhotelan yang berada di kota Subang, Jawa Barat. Kami mendirikan Lembaga ini berlandaskan dari banyaknya permintaan tenaga kerja dari industry Perhotelan di luar negeri dan dari kapal Pesiar Internasional tanpa menghilangkan standar yang ada. Demikianlah latar belakang terbentuknya Lembaga Pendidikan dan Pelatihan Kerja HEI (Hospitality Education Institute). Semoga lembaga ini dapat sukses dan membantu banyak generasi muda dalam meningkatkan daya saing dan kualitas peserta didik, serta membantu mereka dalam mendapatkan Pekerjaan.</p>
          </div>
          <div className="mt-6 md:mt-12">
            <BtnDaftar/>
          </div>
        </div>
         <div data-aos="fade-left" data-aos-easing="ease-in-sine" className="flex justify-end relative group cursor-pointer">
          <div className="group-hover:scale-110 z-20 group-hover:-rotate-12 transition-all duration-1000 absolute py-2 px-4 rounded-full bg-white -left-4 lg:-left-0 xl:-left-0 top-1/4 -translate-y-1/2 flex items-center gap-x-2 shadow-[2px_3px_37px_-21px_rgba(151,_90,_255,_1)]">
            <div className="p-4 bg-primary/10 rounded-full text-lg text-primary">
              <StarIcon weight="fill"/>
            </div>
            <div>
              <h1 className="font-bold text-xl">5 Stars</h1>
              <p className="text-neutral-500">review</p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[90%] h-[500px] bg-background rounded-3xl overflow-hidden relative">
            <div className="absolute w-96 h-36 rounded-full bg-primary top-0 lg:bottom-0 left-0 blur-[100px]"/>
            <div className="absolute w-36 h-96 rounded-full bg-primary bottom-0 left-1/4 blur-[100px] rotate-45"/>
            <div className="absolute w-96 h-36 rounded-full bg-secondary bottom-0 right-0 blur-[100px] rotate-45"/>
            <img src={HERO} className="w-full h-full object-cover object-top relative" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default About