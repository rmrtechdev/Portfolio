import './blogs.css'
import React, { useEffect, useState } from 'react'
import Crapi from '../Media/Images/crapi.png'
import Hackthebox from '../Media/Images/hackthebox.png'
import Tryhackme from '../Media/Images/tryhackme.png'
import MediumClap from '../Media/Images/medium-clap.png'

function Blogs() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const [blog1, setBlog1] = useState(true)
    const [blog2, setBlog2] = useState(false)
    const [blog3, setBlog3] = useState(false)

    function handleBlog1() {
        setBlog1(true)
        setBlog2(false)
        setBlog3(false)

    }
    function handleBlog2() {
        setBlog1(false)
        setBlog2(true)
        setBlog3(false)

    }
    function handleBlog3() {
        setBlog1(false)
        setBlog2(false)
        setBlog3(true)

    }

    return (
        <div className='blogs-container'>
            <h1 className="blog-header">
                <span>S</span>
                <span>e</span>
                <span>c</span>
                <span>u</span>
                <span>r</span>
                <span>i</span>
                <span>t</span>
                <span>y</span>
                &nbsp;
                <span>T</span>
                <span>r</span>
                <span>a</span>
                <span>i</span>
                <span>n</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
               

            </h1>
            <p className="blog-description">I enjoy learning about ethical penetration testing and network security. These are just a few environments I use to practice.</p>
            <div className="blog-wrapper">
                <input type="radio" name="slider" id="blog-item-1" defaultChecked/>
                <input type="radio" name="slider" id="blog-item-2"/>
                <input type="radio" name="slider" id="blog-item-3"/>
                <input type="radio" name="slider" id="blog-item-4" />
                <div className="blog-cards">
                    <label style={blog1 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-1" id="blog-slide-1" onClick={() => handleBlog1()}>
                        <div className="blog-content">
                            
                            <img className='blog-image' src={ Crapi } 
                            alt="React Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog1 ? null : {pointerEvents: "none"}} href='https://owasp.org/crAPI' target="_blank" rel="noreferrer">crAPI</a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'>
                                        "At a high level, the crAPI application is modeled as a B2C application that allows any user to get their car servicing done by a car mechanic. As a microservice architecture, it deliberately exposes security vulnerabilities that can be exploited by any security enthusiast who is playing with the application..."

                                         
                                        <a style={blog1 ? null : { pointerEvents: "none" }} href='https://owasp.org/crAPI/' target="_blank" rel="noreferrer">
                                            &nbsp;
                                            Learn More</a></p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </label>
                    <label style={blog2 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-2" id="blog-slide-2" onClick={() => handleBlog2()}>
                        <div className="blog-content">
                            <img className='blog-image' src={Hackthebox} alt="Javascript Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog2 ? null : { pointerEvents: "none" }} href='https://www.hackthebox.com' target="_blank" rel="noreferrer">
                                   Hack The Box 
                                   </a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'>
                                        
                                        The #1 cybersecurity & hacking training platform for the best certified new hires at the top companies.
                                        
                                        <a style={blog2 ? null : { pointerEvents: "none" }} href='https://www.hackthebox.com' target="_blank" rel="noreferrer">
                                            &nbsp;
                                        Learn More</a></p>
                                </div>
                            </div>
                           
                        </div>
                    </label>
                    <label style={blog3 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-3" id="blog-slide-3" onClick={() => handleBlog3()}>
                        <div className="blog-content">
                            <img className='blog-image' src={
                                Tryhackme
                            } alt="Ruby Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog3 ? null : {pointerEvents: "none"}} href='https://tryhackme.com' target="_blank" rel="noreferrer">
                                     Try Hack Me
                                     </a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'>
                                        
                                        "A gamified, hands-on cyber security training platform that you can access through your browser, with blue, red and purple team content for all skill levels."
                                        <a style={blog3 ? null : {pointerEvents: "none"}} href='https://tryhackme.com' target="_blank" rel="noreferrer">
                                            &nbsp;
                                            Learn More</a></p>
                                </div>
                            </div>
                            
                        </div>
                    </label>


                   

                </div>
            </div>
        </div>
    )
}

export default Blogs
