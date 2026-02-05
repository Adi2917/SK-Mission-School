import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import About2 from '../Components/About/About2'
import Message from '../Components/Message/Message'
import MsnVsn from '../Components/MsnVsn/MsnVsn'
import CoreValues from '../Components/CoreValue/CoreValues'

const About = () => {
  return (
    <div>
        <Navbar />
        <About2 />
        <Message />
        <MsnVsn />
        <CoreValues />
        <Footer/>
    </div>
  )
}

export default About