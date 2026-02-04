import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeHero from '../Components/HomeHero/HomeHero'
import About from '../Components/About/About'
import Who from '../Components/Who/Who'
import Why from '../Components/Why/Why'
import ContactForm from '../Components/Contact/ContactForm'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeHero />
        <About />
        <Who />
        <Why />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Home