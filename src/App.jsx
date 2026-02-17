import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Services/>
    </>
  )
}

export default App
