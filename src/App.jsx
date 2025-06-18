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

// import LatestWorks from './components/LatestWorks'



import LatestWorks from './components/LatestWorks'
import AboutUs from './components/AboutUs'
import WelcomeTici from './components/WelcomeTici'


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
            <ServiceSection />
            <AboutUs />
            <TestimonialsSection/>
            <LatestWorks />

          </>
        }
        />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactSection />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
