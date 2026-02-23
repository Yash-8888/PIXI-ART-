import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Gallary from './Components/Gallary/Gallary'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Services/>
        <Gallary/>
        <About/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
