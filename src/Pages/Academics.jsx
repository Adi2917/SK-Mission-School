import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import AcdHero from '../Components/AcdHero/AcdHero'
import Class from '../Components/Class/Class'
import Development from '../Components/Development/Development'

const Academics = () => {
  return (
    <div>
        <Navbar />
        <AcdHero />
        <Class />
        <Development />
        <Footer />
    </div>
  )
}

export default Academics