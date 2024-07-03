import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Logo from '../Media/Images/logo.png'
import React, { Fragment, useEffect, useState } from 'react'
import  Storefront  from '../Saleor/Storefront'
import Modal from '../Saleor/Modal'


import M3jsx from '../Media/Gifs/3jsx.gif'
import CommerceNxt from '../Media/Gifs/CommerceNxt.gif'
import Chatroom from '../Media/Gifs/Chatroom.gif'


import M3jsxLogo from '../Media/Images/portfolio-logos/3jsxLogo.jpg'
import CommerceNxtLogo from '../Media/Images/portfolio-logos/CommerceNxtLogo.jpg'
import ChatroomLogo from '../Media/Images/portfolio-logos/ChatroomLogo.jpg'




 


/*
<li className="nav-item" onClick={() => closeNav()}><NavLink to="/blogs" activeClassName="active" className="nav-link"><h1>Blogs</h1></NavLink></li>
*/




function Navbar() {
    const navigate = useNavigate()
    const closeNav = () => setNavActive(false)

    
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const [port1, setPort1] = useState(false)
    const [port2, setPort2] = useState(false)
    const [port3, setPort3] = useState(false)
    
 const [modalID, setModalID] = useState(null)
 const [openModal, setOpenModal] = useState(false)

 function handleOpenModal(id) {
        setModalID(id)
     
        setOpenModal(true)
    }


    const [navActive, setNavActive] = useState(false)
    useEffect(() => {navActive ?  document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [navActive])
    function handleLogoClick() {
        navigate('/contact')
        closeNav()
    }


    return (
        
        
        <Fragment>
            <div>
            <Modal open={openModal} setOpenModal={setOpenModal} modalID={modalID} />

            </div>
                    
                   
            <span className="navbar-toggle-button" onClick={() => setNavActive(!navActive)}>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
            </span>
            <div className={navActive ? "navbar-container navActive" : "navbar-container"}>
                <div className="navbar-top">
                    <img src={Logo} alt="DV" onClick={() => handleLogoClick()} />
                   
                </div>
                <ul className="nav-menu">
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/" activeClassName="active" className="nav-link"><h1 id='first-nav-link'>About</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/skills" activeClassName="active" className="nav-link"><h1>Skills</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/work" activeClassName="active" className="nav-link"><h1>Work</h1></NavLink></li>

                    <li className="nav-item" id="saleor"  onClick={() => handleOpenModal(1)}> <NavLink to="/saleor" activeClassName="active" className="nav-link" id="saleor"  ><h1>For Sale</h1></NavLink></li>
                    
                
            



                    <li className="nav-item"  onClick={() => closeNav()}><NavLink to="/globe" activeClassName="active" className="nav-link"><h1> Earthship </h1></NavLink></li>

                   


                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/security" activeClassName="active" className="nav-link"><h1> Security </h1></NavLink></li>




                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/contact" activeClassName="active" className="nav-link"><h1>Contact</h1></NavLink></li>

                    
                    
                    


                    
                </ul>
                <div className="navbar-bottom">
                    <a href="https://www.linkedin.com/in/raymond-r-972804aa/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='nav-icon'/></a>
                    <a href="https://github.com/heikojan2010" target="_blank" rel="noopener noreferrer"><FaGithub className='nav-icon'/></a>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
