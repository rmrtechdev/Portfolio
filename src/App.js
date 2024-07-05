import React, { useState, Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import About from './1-About/About'
import Skills from './2-Skills/Skills'
import Work from './3-Work/Work'
import Blogs from './5-Blogs/Blogs'
import Contact from './6-Contact/Contact'
import MyGlobe from './GlobeEncom/MyGlobe'
import  Modal  from './Saleor/Modal'


function App() {
 
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route exact path="/skills" element={<Skills/>} />
       
        <Route exact path="/work" element={<Work/>} />

        <Route exact path="/saleor" element={<Modal/>} />

        <Route exact path='security' element={<Blogs /> } />
        
        <Route exact path='/globe' element={<MyGlobe /> } />
       


        <Route exact path="/contact" element={<Contact/>} />

      

               </Routes>
    </Fragment>
      )
}

export default App