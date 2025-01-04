import React from 'react'
import './App.css'
import Banner from './components/Banner-Page/Banner'
import Navbar from './components/Navbar/Navbar'
import Testimonial from './components/Testimonial/Testimonial'
import Technologies from './components/Technologies/Technologies'
import Faq from './components/FAQs/Faq'
import Process from './components/Process/Process'
import Footer from './components/Footer/Footer'
import CallToAction from './components/CallToAction/CallToAction'
import Solutions from './components/Solutions/Solutions'
import FormPage from './components/FormPage/FormPage'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Testimonial />
      <Solutions />
      <Technologies />
      <Faq />
      <Process />
      <CallToAction />
      <FormPage />
      <Footer />
    </>
  )
}

export default App
