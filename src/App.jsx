import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'
import Footer from './Footer'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      {/* <SectionDivider/> */}
      <Home/>
      {/* <SectionDivider/> */}
      <Skills/>
      {/* <SectionDivider/> */}
      <Experience/>
      {/* <SectionDivider/> */}
      <Projects/>
      {/* <SectionDivider/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App