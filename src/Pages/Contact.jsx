import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CntctHero from '../Components/CntctHero/CntctHero'
import Cntctoptn from '../Components/Cntctoptn/Cntctoptn'
import Cntctend from '../Components/Cntctend/Cntctend.jsx'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <CntctHero />
        <Cntctoptn />
        <Cntctend />
        <Footer />
    </div>
  )
}

export default Contact