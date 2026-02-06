import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import FcltHero from '../Components/FcltHero/FcltHero'
import FcltItems from '../Components/FcltItems/FcltItems'
import FcltEnd from '../Components/FcltEnd/FcltEnd'

const Facilities = () => {
  return (
    <div>
        <Navbar />
        <FcltHero />
        <FcltItems />
        <FcltEnd />
        <Footer />
    </div>
  )
}

export default Facilities