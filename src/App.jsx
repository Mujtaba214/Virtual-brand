// import { Camera } from 'lucide-react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className=' max-w-full mx-auto pt-10 px-20 '>
        <HeroSection />
        <Features />
        <Workflow />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
