import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Masterpieces from './components/MasterPieces'
import ServiceSection from './components/ServiceSection'
import Commitment from './components/Commitment'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Hero/>
     <Masterpieces/>
     <ServiceSection/>
     <Commitment/>
     <Footer/>
    </>
  )
}

export default App
