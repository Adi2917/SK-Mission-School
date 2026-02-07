import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CntctHero from '../Components/CntctHero/CntctHero'
import Cntctoptn from '../Components/Cntctoptn/Cntctoptn'
import CntctEnd from '../Components/CntctEnd/CntctEnd.jsx'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <CntctHero />
        <Cntctoptn />
        <CntctEnd />
        <Footer />
    </div>
  )
}

export default Contact