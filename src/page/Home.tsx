import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Whyus from '../components/Whyus'

type Props = {}

const Home = (props: Props) => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Whyus/>
    </main>
  )
}

export default Home