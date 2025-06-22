import React from 'react'
import { ABOUT } from '../assets/assets'
import { aboutData } from '../data/data'

type Props = {}

const About = (props: Props) => {
  return (
    <main className='px-16'>
      <div className='border border-neutral-100 shadow-sm rounded-xl grid grid-cols-3 gap-x-16 h-96 overflow-hidden'>
        <div className='p-8 flex flex-col justify-between'>
          <div>
            <h1 className='font-medium text-4xl'>The AI <span className='text-primary italic'>Workforce</span> Human can learn on.</h1>
            <p className='mt-4 text-text '>Never quit and always improve. Scale to meet any demand</p>
          </div>
          <div className='flex items-center gap-x-8'>
            {aboutData.map((item, i) => {
              return (
                <div key={i} className=''>
                  <div className='flex items-start text-primary gap-x-2'>
                    <h1 className='text-4xl font-bold'>{item.value}</h1>
                    <p className='text-xl font-semibold'>{item.subTitle}</p>
                  </div>
                  <p className='text-text mt-2 '>{item.title}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-span-2 relative  overflow-hidden border-l border-neutral-200 '>
          <div className='flex font-bold justify-between text-[200px] uppercase items-start bg-clip-text text-transparent bg-gradient-to-r from-primary/10 to-primary'>
            <p>h</p>
            <p>e</p>
            <p>i</p>
            <p>h</p>
            <p>e</p>
            <p>i</p>
          </div>
          <div className=' absolute inset-0 bg-no-repeat bg-cover' style={{ backgroundImage: `url(${ABOUT})` }}>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About