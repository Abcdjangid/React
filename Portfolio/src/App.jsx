import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Services from './Components/Servicess/Services'
import Work from "./Components/Work/Work"
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
      <>
        <Navbar/>
        <Home/>
        <Services/>
        <Work/>
        <Resume/>
        <Contact/>
        <Footer/>
      </>
    
  )
}

export default App