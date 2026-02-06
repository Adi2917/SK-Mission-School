import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import FcltHero from '../Components/FcltHero/FcltHero'
import FcltItems from '../Components/FcltItems/FcltItems'

const Facilities = () => {
  return (
    <div>
        <Navbar />
        <FcltHero />
        <FcltItems />
        <Footer />
    </div>
  )
}

export default Facilities