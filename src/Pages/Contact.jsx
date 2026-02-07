import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CntctHero from '../Components/CntctHero/CntctHero'
import Cntctoptn from '../Components/Cntctoptn/Cntctoptn'
import CntctLast from '../Components/CntctLast/CntctLast'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <CntctHero />
        <Cntctoptn />
        <CntctLast />
        <Footer />
    </div>
  )
}

export default Contact