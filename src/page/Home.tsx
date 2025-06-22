import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'

type Props = {}

const Home = (props: Props) => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Programs/>
    </main>
  )
}

export default Home