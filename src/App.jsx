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
import TrainingSection from './components/TrainingSection'
import TrainingProgram from './components/Training/TrainingProgram'
import ProductSection from './components/ProductSection'
import ProductsPage from './components/Products/ProductsPage'
import HomeProjects from './components/HomeProjects'
import BlogList from './components/Blogs/Blogs'
import BlogDetail from './components/Blogs/BlogDetail'
import VerticalGarden from './components/Products/VerticalGarden'
import VerticalGardenDetails from './components/Products/VerticalGardenDetails'
import NatureAquarium from './components/Products/NatureAquarium'
import NaturalPond from './components/Products/NaturalPond'
import Terrarium from './components/Products/Terrarium'
import TissueCulturedAquaticPlants from './components/Products/TissueCulturedAquaticPlants'
import TissueCulturedAquaticPlantsDetails from './components/Products/TissueCulturedAquaticPlantsDetails'
import TerrestrialPlants from './components/Products/TerrestrialPlants'
import NutrientBooster from './components/Products/NutrientBooster'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <WelcomeTici/>
            <HomeProjects/>
            <ProductSection/>
            <TrainingSection/>
            <ScrollingSection/>
            <ServiceSection />
            <Crafting/>
            {/* <CommitmentSection/> */}
            
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
        <Route path='/training-program' element={<TrainingProgram/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/products/vertical-garden' element={<VerticalGarden />} />
         <Route path="/products/vertical-garden/:id" element={<VerticalGardenDetails />} />
        <Route path='/products/nature-aquarium' element={<NatureAquarium />} />
        <Route path='/products/natural-pond' element={<NaturalPond />} />
        <Route path='/products/terrarium' element={<Terrarium />} />
        <Route path='/products/tissue-cultured-aquatic-plants' element={<TissueCulturedAquaticPlants />} />
        <Route path='/products/tissue-cultured-aquatic-plants/:id' element={<TissueCulturedAquaticPlantsDetails />} />
        <Route path='/products/terrestrialplants' element={<TerrestrialPlants/>} />
        
        <Route path='/products/nutrient-booster' element={<NutrientBooster/>}/>
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
