import React from 'react'
import { FramerLogo} from 'phosphor-react'
import { navLinks } from '../data/data'
import { Link } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
   <nav className='py-4 px-16 fixed top-0 left-0 right-0 flex justify-between items-center '>
    <div className='w-64 flex items-center gap-x-2'>
      <div className='text-2xl text-primary'>
        <FramerLogo weight='fill'/>
      </div>
      <p className='font-semibold uppercase'>Hei Hospitallity</p>
    </div>
    <div className='flex items-center gap-x-8 font-light'>
      {navLinks.map((item, i) => {
        return (
          <Link to={""} key={i}>
            {item.nav}
          </Link>
        )
      })}
    </div>
    <div className='flex justify-end items-center w-64'>
      <button className='border px-4 py-2 text-sm bg-primary text-white rounded-lg font-light'>
        Daftar
      </button>
    </div>
   </nav>
  )
}

export default Navbar