import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Logo from '../Media/Images/logo.png'
import { Fragment } from 'react/cjs/react.production.min'
import { useEffect, useState } from 'react'
import React from 'react'

/*
<li className="nav-item" onClick={() => closeNav()}><NavLink to="/blogs" activeClassName="active" className="nav-link"><h1>Blogs</h1></NavLink></li>
*/
function Navbar() {
    const navigate = useNavigate()
    const closeNav = () => setNavActive(false)
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

                    <li className="nav-item">
                        <a className="nav-link" href="http://www.django.rmrtech.tech/react-admin/" target="_blank" rel="noopener noreferrer">
                            <h1>
                                Demo Dashboard
                            </h1>
                        </a>
                    </li>

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
