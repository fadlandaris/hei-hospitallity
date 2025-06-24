import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Testimony from '../components/Testimony'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Programs/>
      <Testimony/>
    </main>
  )
}

export default Home