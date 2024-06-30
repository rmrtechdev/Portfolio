import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Logo from '../Media/Images/logo.png'
import React, { Fragment, useEffect, useState } from 'react'
/*
<li className="nav-item" onClick={() => closeNav()}><NavLink to="/blogs" activeClassName="active" className="nav-link"><h1>Blogs</h1></NavLink></li>
*/



function Navbar() {
    const navigate = useNavigate()
    const closeNav = () => setNavActive(false)



const [openModal, setOpenModal] = useState(false)



function handleOpenModal() {
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
            <p className="navbar-toggle-button" onClick={() => setNavActive(!navActive)}>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
            </p>
            <div className={navActive ? "navbar-container navActive" : "navbar-container"}>
                <div className="navbar-top">
                    <img src={Logo} alt="DV" onClick={() => handleLogoClick()} />
                   
                </div>
                <ul className="nav-menu">
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/" activeClassName="active" className="nav-link"><h1 id='first-nav-link'>About</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/skills" activeClassName="active" className="nav-link"><h1>Skills</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/work" activeClassName="active" className="nav-link"><h1>Work</h1></NavLink></li>

                    <li className="nav-item" id="saleor" onClick={() => closeNav()}><NavLink to="/saleor" activeClassName="active" className="nav-link" id="saleor"  ><h1>For Sale</h1></NavLink></li>
                    


                    <li className="nav-item" onClick={() => closeNav()} ≥/÷÷≥  ≤./</ul>><NavLink to="/globe" activeClassName="active" className="nav-link"><h1> Earthship </h1></NavLink></li>

                   


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
