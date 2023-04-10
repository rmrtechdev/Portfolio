import './algorithms.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'



function MyWork() {
    const navigate = useNavigate()
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <div className='algo-container'>
            <h1 className="algo-header">
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

            <div className="algo-wrapper">
                <div id='algoJavascript' className="algo-item algo-item1">
                    <div className="algo-title-box">
                        <p>Three.JS Demo Fan Site</p>
                       
                    </div>
                    <div className="algo-iframe-wrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/yPWwH6_83Uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>


                <div id='algoRuby' className="algo-item algo-item2">
                    <div className="algo-title-box">
                        <p>Chatroom Server | Django Channels </p>
                      
                    </div>
                    <div className="algo-iframe-wrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YBCrI1OOENc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div id='algoRuby' className="algo-item algo-item2">
                    <div className="algo-title-box">
                        <p>Next.JS eCommerce Demo</p>

                    </div>
                    <div className="algo-iframe-wrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/H9nRxeRBAjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div id='algoRuby' className="algo-item algo-item2">
                    <div className="algo-title-box">
                        <p>Python eCommerce Backend Demo</p>

                    </div>
                    
                    <div className="algo-iframe-wrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6hH_RwDqG24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
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
    )
}

export default MyWork
