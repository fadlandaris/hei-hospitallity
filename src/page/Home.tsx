import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Programs from '../components/home/Programs'
import Testimony from '../components/home/Testimony'
import Gallery from '../components/home/Gallery'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Programs/>
      <Testimony/>
      <Gallery/>
      <Footer/>
    </main>
  )
}

export default Home