import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSection from './components/ServiceSection'
import Footer from './components/Footer'
import Projects from './components/Projects/Projects'
import ContactSection from './components/Contact/ContactSection'
import Services from './components/Services/Services'
import TestimonialsSection from './components/TestimonialsSection'
import AboutUsPage from './components/AboutUs/AboutUs'

// import LatestWorks from './components/LatestWorks'



import LatestWorks from './components/LatestWorks'

import WelcomeTici from './components/WelcomeTici'
import Crafting from './components/Crafting'
import AboutUsSection from './components/AboutUsSection'
import CommitmentSection from './components/AboutUs/CommitmentSection'
import ScrollingSection from './components/ScrollingSection'


function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <WelcomeTici/>
            <ScrollingSection/>
            <ServiceSection />
            <Crafting/>
            <CommitmentSection/>
            
            {/* <AboutUsSection /> */}
            <TestimonialsSection/>
            <LatestWorks />

          </>
        }
        />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactSection />} />
        <Route path='/services' element={<Services />} />
        <Route path='/aboutus' element={<AboutUsPage/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
