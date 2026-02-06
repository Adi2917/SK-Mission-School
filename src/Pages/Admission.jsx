import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import AdmsnHero from '../Components/AdmsnHero/AdmsnHero'
import AdmsnMiddle from '../Components/AdmsnMiddle/AdmsnMiddle'
import AdmsnFee from '../Components/AdmsnFee/AdmsnFee'
import AdmsnEnd from '../Components/AdmsnEnd/AdmissionEnd'

const Admission = () => {
  return (
    <div>
        <Navbar />
        <AdmsnHero />
        <AdmsnMiddle />
        <AdmsnFee />
        <AdmsnEnd />
        <Footer />
    </div>
  )
}

export default Admission