import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Masterpieces from './components/MasterPieces'
import ServiceSection from './components/ServiceSection'
import Commitment from './components/Commitment'
import Footer from './components/Footer'
import Projects from './components/Projects/Projects'
import ContactSection from './components/Contact/ContactSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Masterpieces />
            <ServiceSection />
            <Commitment />
          </>
        }
        />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactSection />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
