import React from 'react'
import { ArrowRight, Star, ArrowUpRight, Student, FramerLogo } from 'phosphor-react'
import { sideLinks } from '../data/data'
import Marquee from 'react-fast-marquee'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' pt-32 pb-12 h-screen px-16'>
      <div className='grid grid-cols-2 h-full'>
        <div className=''>
          <div className='px-4 py-2 border inline-block text-sm rounded-full text-primary border-neutral-200 shadow-sm font-medium'>
            #1 Hospitallity School at Subang
          </div>
          <h1 className='text-6xl mt-8 font-semibold leading-16'>Smarter Marketing <br /> bigger <span className='text-primary italic'>Impacts</span></h1>
          <p className='mt-8 text-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis <br /> doloremque aut ullam fuga vero, vel sint eos, reiciendis </p>
          <div className='flex items-center mt-8 gap-x-4'>
            <button className='px-8 py-4 rounded-lg bg-primary text-white text-sm'>
              Daftar Sekarang
            </button>
             <button className='px-8 py-4 border border-neutral-100 shadow-sm rounded-lg text-sm flex items-center gap-x-2 font-semibold hover:gap-x-4 transition-all duration-700 cursor-pointer'>
              Download Brosur
              <div className='text-sm'>
                <ArrowRight weight='regular'/>
              </div>
            </button>
          </div>
          <div className='mt-8 flex items-center gap-x-2'>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-neutral-300 rounded-full border-2 border-white'/>
              <div className='w-10 h-10 bg-neutral-300 rounded-full border-2 border-white -ml-2'/>
              <div className='w-10 h-10 bg-neutral-300 rounded-full border-2 border-white -ml-2'/>
            </div>
            <div className='text-xl text-yellow-300'>
              <Star weight='fill'/>
            </div>
            <h1 className='font-bold'>4.8 <span className='text-text font-normal'>(150K)</span></h1>
          </div>
          <div className='mt-16 '>
            <Marquee autoFill={true} gradient={true}>
              <div className='flex items-center gap-x-2 mx-4'>
                <div className='text-xl text-primary/70'>
                  <FramerLogo weight='fill'/>
                </div>
                <p className='font-medium italic capitalize text-text/70'>PT timura jaya lestari</p>
              </div>
            </Marquee>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-x-8 relative z-10 '>
         <div className='absolute w-32 h-32 top-32 -left-16 bg-primary blur-[150px] rounded-full z-0'>
         </div>
          <div className=' flex flex-col justify-center z-10'>
            <div className='p-4 border border-neutral-200 shadow-sm rounded-xl bg-white'>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold'>Total Murid</h1>
                <div className='text-primary'>
                  <Student weight='regular'/>
                </div>
              </div>
              <h1 className='text-5xl mt-4 font-bold text-primary mb-2'>56 +</h1>
              <p className='text-sm text-text'>since last week</p>
            </div>
          </div>
          <div className='col-span-2 flex flex-col justify-center gap-y-8'>
            <div className='w-full border-4 border-primary/30 h-64 relative rounded-tl-lg rounded-br-xl '>
              <div className='w-12 h-10 bg-white absolute -bottom-[17px] -left-[22px] rotate-45 border-t-4 border-primary/30'/>
              <div className='w-12 h-10 bg-white absolute -top-[17px] -right-[22px] rotate-45 border-b-4 border-primary/30'/>
              <div className='p-4 absolute -left-8 -top-8 bg-white border border-neutral-200 shadow-sm rounded-xl'>
                <div className='text-3xl text-primary '>
                  <FramerLogo weight='fill'/>
                </div>
              </div>
               <div className='py-2 px-4 absolute -bottom-4 -right-4 bg-white border border-neutral-200 shadow-sm rounded-b-full rounded-tr-full font-semibold'>
                <p>مرحباً ! 👳🏽‍♂️</p>
              </div>
            </div>
            <div className='w-[75%] border p-4 border-neutral-200 shadow-sm rounded-xl bg-white'>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold'>Performance</h1>
                <div className='flex items-center gap-x-2 text-green-500 font-medium'>
                  <div className='text-lg'>
                    <ArrowUpRight weight='bold'/>
                  </div>
                  <p className='text-sm'>+ 18.5 %</p>
                </div>
              </div>
              <div className='mt-4 grid grid-cols-2 '>
              <div className='border-t-4 border-b-4 border-primary h-24 rounded-full flex justify-center items-center w-24'>
                <p className='font-medium text-2xl'>100%</p>
              </div>
               <div className='border-t-4 border-b-4  border-green-500 h-24 rounded-full flex justify-center items-center w-24'>
                <p className='font-medium text-2xl'>100%</p>
              </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-8 items-center '>
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
             <div className='border-t-4 border-b-4 border-r-4 border-l-4 border-l-text/20 border-r-primary w-20 h-20 rounded-full p-1 flex justify-center items-center border-b-primary border-t-text/20'>
              <div className='w-16 h-16 rounded-full bg-primary/40 flex justify-center items-center'>
                <div className='text-4xl text-white'>
                  <FramerLogo weight='bold'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero