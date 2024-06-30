import './modal.css'
import React from 'react'
//import './otheritem.css'
//import OtherItem from './OtherItem'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
import './modal.css'

import { ImCross } from 'react-icons/im'


// Main Logos

import M3jsx from '../Media/Gifs/3jsx.gif'
import CommerceNxt from '../Media/Gifs/CommerceNxt.gif'
import Chatroom from '../Media/Gifs/Chatroom.gif'


import M3jsxLogo from '../Media/Images/portfolio-logos/3jsxLogo.jpg'
import CommerceNxtLogo from '../Media/Images/portfolio-logos/CommerceNxtLogo.jpg'
import ChatroomLogo from '../Media/Images/portfolio-logos/ChatroomLogo.jpg'



function Storefront({open, setOpenModal, modalID}) {
    useEffect(() => 
        {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    const modalData = [
        {id: 2, 
            title: "Next.JS E-commerce Demo",
            logo: {},
            desc: "With Grocery Magix™ users can search through millions of recipes, pick their favorites and instantly generate grocery lists. It uses Edamam's Recipe API to provide over 2.3 million recipes. Easily customize your meals and aggregate them into concise grocery lists.", 
            features: ["Millions of recipes", "Over 30 recipe search filters", "Secure Register/Login system", "Fully responsive"],
            tools: [{}],
            technologies: {
                frontend: "React, Redux, Context API, Vanilla CSS",
                backend: "Firebase Auth, Firebase Firestore"
            },
            link: "www.grocerymagix.com",
            url: "https://www.grocerymagix.com/",
            github: "https://github.com/davidmvenegas/GroceryMagix",
            video: "https://www.youtube.com/embed/05RJu6q-kU0"
        },
      
    ]
    useEffect(() => {
        if (modalID !== null) {
            const currentID = modalData.findIndex(x => x.id === modalID)
            setCurrentData(modalData[currentID])
        }
        if (!open) setCurrentData({})
    // eslint-disable-next-line
    }, [modalID, open])
    const [currentData, setCurrentData] = useState({})
    return (
        <div key={currentData?.id} className='modal-container' style={open ? null : {display: "none"}}>
            <ImCross id="leave-modal" onClick={() => setOpenModal(false)}/>
            <div className="modal-wrapper">
                <div className="modal-video-wrapper">
                    <h1 className="modal-video-title">2 Minute Video Demonstration <br /><span>of</span><br /> <span>{currentData?.title}</span></h1>
                    <div className="iframe-wrapper">
                        <iframe 
                            width="560" 
                            height="315" 
                            src={currentData?.video} 
                            title={currentData?.title}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                            allowFullScreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <div className="modal-tech-wrapper">
                        <h1>Technologies Used</h1>
                        <div className="modal-techs"><span>Frontend:&nbsp;</span>{currentData?.technologies?.frontend}</div>
                        <div className="modal-techs"><span>Backend:&nbsp;</span>{currentData?.technologies?.backend}</div>
                    </div>
                </div>
                <div className="modal-text-wrapper">
                    <div className="modal-header">
                        <div className="modal-title-wrapper">
                            <img src={currentData?.logo} alt="Logo" />
                            <h1 className="modal-title">{currentData?.title}</h1>
                        </div>
                        <div className="modal-links">
                            <a className="modal-link1" href={currentData?.url} target="_blank" rel="noreferrer">{currentData?.link}</a>
                            &nbsp;&nbsp; - &nbsp;&nbsp;
                            <a className="modal-link2" href={currentData?.github} target="_blank" rel="noreferrer">
                                
                            </a>
                        </div>
                        <div className="modal-tools-wrapper">
                            {currentData?.tools?.map(Tool => 
                                <Tool className="modal-tool"/>
                            )}
                        </div>
                    </div>
                    <div className="modal-body">
                        <p className="modal-description">{currentData?.desc}</p>
                        <p className="modal-features-header">Features include:</p>
                        <ul className="modal-features">
                            {currentData?.features?.map(feature => (
                                <li className="modal-feature">{feature}</li>
                            ))}
                        </ul>
                        <div className="modal-visit-site">
                            <a className='modal-visit-btn' href={currentData?.url} target="_blank" rel="noreferrer">VISIT WEBSITE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Storefront;
