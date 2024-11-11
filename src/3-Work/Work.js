import './work.css'
import '../4-Algorithms/algorithms.css'
import React from 'react'
//import './otheritem.css'
//import OtherItem from './OtherItem'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
import LazyLoad from 'react-lazyload'


import Saleor from'../Media/Gifs/Saleor.gif'
import SaleorLogo from '../Media/Images/portfolio-logos/SaleorLogo.jpg'

import Hologram from '../Media/Gifs/neural.gif'
import HologramLogo from '../Media/Images/neural.jpg'
// Main Logos

import M3jsx from '../Media/Gifs/3jsx.gif'
import CommerceNxt from '../Media/Gifs/CommerceNxt.gif'
import Chatroom from '../Media/Gifs/Chatroom.gif'


import M3jsxLogo from '../Media/Images/portfolio-logos/3jsxLogo.jpg'
import CommerceNxtLogo from '../Media/Images/portfolio-logos/CommerceNxtLogo.jpg'
import ChatroomLogo from '../Media/Images/portfolio-logos/ChatroomLogo.jpg'



function Work() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const navigate = useNavigate()
    const [port1, setPort1] = useState(false)
    const [port2, setPort2] = useState(false)
    const [port3, setPort3] = useState(false)
    const [port4, setPort4] = useState(false)
    const [port5, setPort5] = useState(false)
    
    
   


    const [otherSepRef, otherSepInView] = useInView({threshold: 0, triggerOnce: true})
    
    
    
    return (
        <div className='work-container'>
            <div className="port-wrapper">
                <h1 className="port-header">
                        <span>M</span>
                        <span>y</span>&nbsp;
                        <span>P</span>
                        <span>o</span>
                        <span>r</span>
                        <span>t</span>
                        <span>f</span>
                        <span>o</span>
                        <span>l</span>
                        <span>i</span>
                        <span>o</span>
                </h1>
                <p className="port-description">
                    <span>A&nbsp;</span>
                    <span>gallery&nbsp;</span>
                    <span>of&nbsp;</span>
                    <span>recent&nbsp;</span>
                    <span>projects&nbsp;</span>
                    <span>I've&nbsp;</span>
                    <span>built.&nbsp;</span>
                    <span onClick={() => navigate('/contact')}>Contact me</span>
                    <span>&nbsp;for&nbsp;</span>
                    <span>a&nbsp;</span>
                    <span>complete&nbsp;</span>
                    <span>code&nbsp;</span>
                    <span>walkthrough.&nbsp;</span>
                </p>


                <div className="port-items">

                    <div className="port-item" id='portItem1' onMouseEnter={() => setPort1(true)} onMouseLeave={() => setPort1(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">

                                
                                <img className='port-gif' src={M3jsx} style={port1 ? {opacity: "1"} : {opacity: "0"}}/>

                                <LazyLoad>
                                <img className='port-gif port-gif-logo' src={M3jsxLogo} drobe  style={port1 ? {opacity: "0"} : {opacity: "1"}}/>
                                </LazyLoad>
                            </div>

                            <a href='http://heikojan2010.github.io/jsx3/' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
                        </div>

                        <div className="port-text-box">
                            <h1 className="port-title">3D Immersive U/I Site</h1>
                           
                           
                    
                            <p className="port-headline">A demo fan page utilizing Three.js as a cross-browser JavaScript library used to create and display animated 3D computer graphics.</p>


                                <div className="modal-tech-wrapper">
                                    <h1>Technologies Used</h1>
                                    <div className="modal-techs">
                                        HTML &amp; Three.JS
                                    </div>
                                </div>
                           
                        </div>
                    </div>



                    <div className="port-item" id='portItem2' onMouseEnter={() => setPort2(true)} onMouseLeave={() => setPort2(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={Saleor}   style={port2 ? {opacity: "1"} : {opacity: "0"}}/>
                                <LazyLoad>
                                <img className='port-gif port-gif-logo' src={ SaleorLogo  }   style={port2 ? {opacity: "0"} : {opacity: "1"}}/>
                                </LazyLoad>
                            </div>
                            <a href='https://saleor-storefront3.vercel.app/default-channel' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
                        </div>

                        <div className="port-text-box">
                            <h1 className="port-title"> Saleor Full-Stack Commerce  </h1>
                           
                            <p className="port-headline"> Privatize and safeguard proprietary business data with Saleor's eCommerce evolution engine. |operational logistics| |warehouses| |customers| 
                            |checkout payments| |gift-cards| |promotions| |B2B| |D2C|
                             |product catalagues| |permissions| |taxes| |order processing| |stocked availability| |market channels| |internationalization|
 </p>

                                <div className="modal-tech-wrapper">
                                    <h1>Technologies Used</h1>
                                    <div className="modal-techs">
                                        Saleor, Next.JS, React.JS, Three.JS, Docker, Linux, Tailwind-CSS, GraphQL

                                    </div>
                                </div>
                            
                        </div>
                    </div>





                    <div className="port-item" id='portItem3' onMouseEnter={() => setPort3(true)} onMouseLeave={() => setPort3(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={CommerceNxt} style={port3 ? {opacity: "1"} : {opacity: "0"}}/>
                                <LazyLoad>

                                <img className='port-gif port-gif-logo' src={CommerceNxtLogo}  style={port3 ? {opacity: "0"} : {opacity: "1"}}/>
                                </LazyLoad>
                            </div>
                            <a href='https://nextjs-commerce-two-omega.vercel.app' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
                        </div>

                        <div className="port-text-box">
                            <h1 className="port-title"> Next.JS E-commerce Demo</h1>
                           
                            <p className="port-headline">Market and sell any of your online products in a custom digital store integrated seamlessly with the most common e-commerce 'backend' platforms. </p>

                                <div className="modal-tech-wrapper">
                                    <h1>Technologies Used</h1>
                                    <div className="modal-techs">
                                        HTML, Next.JS, React.JS

                                    </div>
                            </div>
                            
                        </div>
                    </div>


                    <div className="port-item" id='portItem4' onMouseEnter={() => setPort4(true)} onMouseLeave={() => setPort4(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={Chatroom}  Tracker style={port4 ? {opacity: "1"} : {opacity: "0"}}/>
                                <LazyLoad>

                                <img className='port-gif port-gif-logo' src={ChatroomLogo}  Tracker style={port4 ? {opacity: "0"} : {opacity: "1"}}/>
                                </LazyLoad>
                            </div>
                            <a href='http://www.django.rmrtech.tech' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
                        </div>

                        <div className="port-text-box">
                            <h1 className="port-title"> Django Chatroom Server</h1>
                           
                            <p className="port-headline">A user-authenticated, asynchronous public chat server built on Django Channels to handle bilateral web socket communications.  </p>

                                <div className="modal-tech-wrapper">
                                    <h1>Technologies Used</h1>
                                    <div className="modal-techs"><span>Frontend:&nbsp;</span> 
                                   Three.JS, HTML, Tailwind-CSS
                                    </div>
                                    <div className="modal-techs"><span>Backend:&nbsp;</span> 
                                    Django Channels, Nginx, Gunicorn
                                    </div>
                            </div>
                            
                                   
                                
                     
                    </div>


                    
                       
                </div>






                <div className="other-separator" ref={otherSepRef} id={otherSepInView ? "education-separator-active" : undefined}></div>




                <div className="port-contribute">

                   <div className='contr-span' onClick={() => navigate('/contact')}>Open Source Contributions:</div>
                    <br/>
                </div>
                   
                   <div className="port-item" id='portItem5' onMouseEnter={() => setPort5(true)} onMouseLeave={() => setPort5(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={Hologram}  style={port5 ? {opacity: "1"} : {opacity: "0"}}/>
                                <LazyLoad>

                                <img className='port-gif port-gif-logo' src={HologramLogo} style={port5 ? {opacity: "0"} : {opacity: "1"}}/>
                                </LazyLoad>
                            </div>
                           
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                        </div>

                        

                        <div className="port-text-box">
                            <h1 className="port-title"> Django &nbsp; <em> Local A.I.</em> AssistaBot </h1>
                            
                            <p className="port-headline">LLM 'Tool Calling' enables AI models to execute function methods from Django's side ~ essentially anything a Django view can do such as: DB queries, file management, external API calls, etc.</p>

                                <div className="modal-tech-wrapper">
                                    <h1>Technologies Used</h1>
                                    <div className="modal-techs"><span>Frontend:&nbsp;</span> 
                                    Three.JS, React.JS, Mantine.JS
                                    </div>
                                    <div className="modal-techs"><span>Backend:&nbsp;</span> 
                                    Django, Ollama, LLama3.2
                                    </div>
                                </div>
                            </div>
                            
                                   
                                
                     
                        </div>
                    



                </div>



                <div className="other-separator" ref={otherSepRef} id={otherSepInView ? "education-separator-active" : undefined}></div>


                <div className="algo-wrapper">

                    
                    <div id='algoJavascriptRuby' className="algo-item algo-item3">
                        <div className="algo-title-box">
                            <p>Demo Shopperbot | Browser Automation</p>

                        </div>
                        <div className="algo-iframe-wrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/XoTLyJUBQmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div id='algoJavascript' className="algo-item algo-item4">
                        <div className="algo-title-box">
                            <p>Py-Invaders Demo Game</p>

                        </div>
                        <div className="algo-iframe-wrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/cFZGhK8BzUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div id='algoJavascript' className="algo-item algo-item4">
                        <div className="algo-title-box">
                            <p>Demo RESTful API </p>

                        </div>
                        <div className="algo-iframe-wrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/aOga6Q5upZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div id='algoJavascript' className="algo-item algo-item4">
                        <div className="algo-title-box">
                            <p> Earthquake Interactive Visualization</p>

                        </div>
                        <div className="algo-iframe-wrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Vn3rWF6JLYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>


            </div>
             </div>
    )
    }

export default Work
