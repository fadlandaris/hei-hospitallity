import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Testimony from '../components/Testimony'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Programs/>
      <Testimony/>
      <Footer/>
    </main>
  )
}

export default Home