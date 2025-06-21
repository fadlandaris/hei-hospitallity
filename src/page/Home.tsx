import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

type Props = {}

const Home = (props: Props) => {
  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default Home