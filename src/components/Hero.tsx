
import { ArrowRight, Star, ArrowUpRight, FramerLogo, Student, Trophy } from 'phosphor-react'
import { HERO } from '../assets/assets'
import { sideLinks } from '../data/data'


const Hero = () => {
  // const [Default, setDefault] = useState("Home")

  return (
    <div className='mt-8 h-screen px-16'>
      <div className='grid grid-cols-2 h-full'>
        <div className='flex flex-col justify-center '>
          <div className=''>
          <div className='px-4 py-2 border inline-block rounded-full text-primary shadow font-medium '>
            <div className='flex items-center gap-x-2'>
              <div className='text-yellow-300'>
                <Trophy weight='fill'/>
              </div>
              #1 Hospitallity School at Subang
            </div>
          </div>
          <h1 className='text-6xl mt-8 font-medium leading-16'>Smarter Marketing <br /> bigger <span className='text-primary italic'>Impacts</span></h1>
          <p className='mt-8 text-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis <br /> doloremque aut ullam fuga vero, vel sint eos, reiciendis </p>
          <div className='flex items-center mt-8 gap-x-4'>
            <button className='px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary/80 to-primary text-white text-sm shadow-sm'>
              Daftar Sekarang
            </button>
             <button className='px-8 py-4 border border-neutral-100 shadow-sm rounded-xl text-sm flex items-center gap-x-2 font-semibold hover:gap-x-4 transition-all duration-700 cursor-pointer'>
              Download Brosur
              <div className='text-sm'>
                <ArrowRight weight='regular'/>
              </div>
            </button>
          </div>
          <div className='mt-12 flex items-center gap-x-4'>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-neutral-300 rounded-full border-2 border-white'/>
              <div className='w-10 h-10 bg-neutral-300 rounded-full border-2 border-white -ml-2'/>
              <div className='w-10 h-10 bg-neutral-300 rounded-full border-2 border-white -ml-2'/>
            </div>
            <div className='flex items-center '>
              <div className='text-xl text-yellow-300'>
                <Star weight='fill'/>
              </div>
              <div className='text-xl text-yellow-300'>
                <Star weight='fill'/>
              </div>
              <div className='text-xl text-yellow-300'>
                <Star weight='fill'/>
              </div>
              <div className='text-xl text-yellow-300'>
                <Star weight='fill'/>
              </div>
            </div>
            <h1 className='font-bold'>4.8 <span className='text-text font-normal'>(150K)</span></h1>
          </div>
        </div>
        </div>
        <div className='grid grid-cols-4 gap-x-8 relative '>
         <div className='absolute w-36 h-36 top-1/2 -translate-y-1/2 -left-16 blur-[150px] bg-primary  rounded-full z-10'>
         </div>
          <div className='flex flex-col justify-center'>
            <div className='p-4 border border-neutral-200 shadow-sm rounded-xl bg-white z-20'>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold'>Students</h1>
                <div className='text-primary'>
                  <Student weight='regular'/>
                </div>
              </div>
              <h1 className='text-4xl mt-4 font-bold text-primary mb-2'>56 +</h1>
              <p className='text-sm text-text'>since last week</p>
            </div>
          </div>
          <div className='col-span-2 flex flex-col justify-center gap-y-8'>
            <div className='w-full h-64 relative rounded-tl-lg rounded-br-xl bg-center bg-cover' style={{ backgroundImage: `url(${HERO})` }}>
              <div className='w-12 h-10 bg-white absolute -bottom-[17px] -left-[22px] rotate-45 '/>
              <div className='w-12 h-10 bg-white absolute -top-[17px] -right-[22px] rotate-45 '/>
              <div className='p-4 absolute -left-8 -top-8 bg-white border border-neutral-200 shadow-sm rounded-xl'>
                <div className='text-3xl text-primary '>
                  <FramerLogo weight='fill'/>
                </div>
              </div>
               <div className='py-2 px-4 absolute -bottom-4 -right-4 bg-white border border-neutral-200 shadow-sm rounded-b-full rounded-tr-full font-semibold'>
                <p>مرحباً ! 👳🏽‍♂️</p>
              </div>
            </div>
            <div className='w-[75%] border p-4 border-neutral-200 shadow-sm rounded-xl bg-white z-10'>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold'>Performance</h1>
                <div className='flex items-center gap-x-2 text-green-500 font-medium'>
                  <div className='text-lg'>
                    <ArrowUpRight weight='bold'/>
                  </div>
                  <p className='text-sm'>+ 18.5 %</p>
                </div>
              </div>
              <div className='mt-4 grid grid-cols-2 gap-x-2 '>
              <div className='border-t-4 border-b-4 border-primary h-24 rounded-full flex justify-center items-center w-24'>
                <p className='font-medium text-2xl'>100%</p>
              </div>
               <div className='border-t-4 border-b-4  border-green-500 h-24 rounded-full flex justify-center items-center w-24'>
                <p className='font-medium text-2xl'>100%</p>
              </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-8 items-center justify-center '>
            <div className='p-2 bg-white flex flex-col gap-y-4 border border-neutral-200 shadow-sm rounded-xl'>
             {sideLinks.map((item, i) => {
              return (
                <div key={i} className='p-2 rounded-lg bg-primary/5'>
                  <div className='text-primary text-xl'>
                    <item.icon weight="bold"/>
                  </div>
                </div>
              )
             })}
            </div>
            <div className='w-16 h-16 rounded-full flex justify-center items-center bg-gradient-to-r from-primary/70 to-primary'>
              <div className='text-white text-3xl'>
                <FramerLogo weight='fill'/>
              </div>
            </div>
             {/* <div className='border-t-2 border-b-2 border-r-2 border-l-2 border-l-text/20 border-r-primary w-20 h-20 rounded-full p-1 flex justify-center items-center border-b-primary border-t-text/20 shadow-sm'>
              <div className='w-16 h-16 rounded-full  flex justify-center items-center'>
                <div className='text-4xl text-primary'>
                  <FramerLogo weight='fill'/>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero