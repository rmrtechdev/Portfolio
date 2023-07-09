import React, { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import About from './1-About/About'
import Skills from './2-Skills/Skills'
import Work from './3-Work/Work'
import Blogs from './5-Blogs/Blogs'
import Contact from './6-Contact/Contact'
import MyGlobe from './GlobeEncom/MyGlobe'

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
       
        <Route path="/work" element={<Work/>} />


        <Route path='security' element={<Blogs /> } />
        
        <Route path='/globe' element={<MyGlobe /> } />
        


        <Route path="/contact" element={<Contact/>} />

      

               </Routes>
    </Fragment>
  )
}

export default App