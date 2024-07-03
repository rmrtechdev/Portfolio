import './storefront.css'
import React from 'react'
//import './otheritem.css'
//import OtherItem from './OtherItem'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
import SaleorLogo from '../Media/Images/portfolio-logos/SaleorLogo.jpg'

import Saleor from '../Media/Gifs/Saleor.gif'




function Storefront() {
    /*useEffect(() => {window.scrollTo(0, 0)}, [])
    const navigate = useNavigate()
    const [port1, setPort1] = useState(false)

    
    const [otherSepRef, otherSepInView] = useInView({threshold: 0, triggerOnce: true})
    
    
    
    return (
        <div className='work-container'>
            <div className="port-wrapper">
                <h1 className="port-header">
                        <span>  </span>
                        <span>  </span>&nbsp;
                        <span>  </span>
                        <span>   </span>
                        <span>   </span>
                        <span>  </span>
                        <span>   </span>
                        <span>   </span>
                        <span>    </span>
                        <span>   </span>
                        <span>   </span>
                </h1>
               


                <div className="port-items">

                    <div className="port-item" id='portItem1' onMouseEnter={() => setPort1(true)} onMouseLeave={() => setPort1(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">

                                
                                <img className='port-gif' src={Saleor} alt="My Three.JS Demo Gif" style={port1 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif port-gif-logo' src={ SaleorLogo} style={port1 ? {opacity: "0"} : {opacity: "1"}}/>
                            </div>

                            <a href='http://heikojan2010.github.io/jsx3/' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
                        </div>

                        <div className="port-text-box">
                            <h1 className="port-title"> Full Stack eCommerce Store</h1>
                           
                    
                            <p className="port-headline"> Powered by the Saleor eCommerce platform  &amp; integrated with a Next.JS Vercel frontend app.</p>

                            <div className="port-btn-box">

                                <div className="modal-tech-wrapper">
                                    <h1>Technologies Used</h1>
                                    <div className="modal-techs">
                                        HTML &amp; Three.JS
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>



                   
                            
                                   
                                
                     


                    
                       
                </div>

              


            </div>
             </div>
    )
             */
    }

export default Storefront
