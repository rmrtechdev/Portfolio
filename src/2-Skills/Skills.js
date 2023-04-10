import './skills.css'
import { useState, useEffect } from 'react'

import { GiClick } from "react-icons/gi"
import ReactImg from '../Media/Images/skills/react.png'
import JavascriptImg from '../Media/Images/skills/javascript.png'
import CSSImg from '../Media/Images/skills/css.png'
import HtmlLogo from '../Media/Images/skills/html-logo.png'
import ApiLogo from '../Media/Images/skills/restful-api.png'
import PythonLogo from '../Media/Images/skills/pythonlogo.png'
import DjangoLogo from '../Media/Images/skills/django-logo-negative.png'
import ThreeLogo from '../Media/Images/skills/three-js-logo.png'
import DockerLogo from '../Media/Images/skills/docker-logo.png'
import NextLogo from '../Media/Images/skills/nextjslogo.png'
import SQLImg from '../Media/Images/skills/sql.png'
import LinuxLogo from '../Media/Images/skills/linux-logo.png'
import KsuBanner from '../Media/Images/skills/ksu-banner.png'
import GitLogo from '../Media/Images/skills/git-logo.png'

import TypeWriterEffect from 'react-typewriter-effect'
import { useInView } from 'react-intersection-observer'
import CumLaude from '../Media/Images/skills/cum-laude-logo.jpeg'

import React from 'react'

function Skills() {
    useEffect(() => window.scrollTo(0, 0), [])
    const [mouse1, setMouse1] = useState(false)
    
    const [cert, setCert] = useState(false)
    const [edSepRef, edSepInView] = useInView({ threshold: 0, triggerOnce: true })
    const [edTitleRef, edTitleInView] = useInView({ threshold: 0, triggerOnce: true })
    const [ed1Ref, ed1InView] = useInView({ threshold: 0, triggerOnce: true })
    
    return (
        <div className='skills-container'>
            <div className="skills-wrapper">
                <h1 className="skills-header">
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>f</span>
                    <span>i</span>
                    <span>c</span>
                    <span>i</span>
                    <span>e</span>
                    <span>n</span>
                    <span>c</span>
                    <span>i</span>
                    <span>e</span>
                    <span>s</span>
                </h1>
                <p className="skills-description">
                    <TypeWriterEffect startDelay={1000} cursorColor="white" text="I love to learn and am always teaching myself new things." typeSpeed={35} hideCursorAfterText={true} />&nbsp;&nbsp;
                    <span id="skillsMobileSecond"><TypeWriterEffect startDelay={4000} cursorColor="white" text="These are my strongest skillsets and technologies." typeSpeed={35} hideCursorAfterText={true} /></span>
                </p>

                <div className="skills-box">
                    <div className="skills-content">
                        <h1 className="skills-title">Frontend</h1>

                        <div id="ReactSkill" className="skills-item">
                            <img src={ReactImg} alt="React" />
                            <h2>React JS</h2>
                            <p>I use React on most every interactive, client-facing project.</p>
                        </div>
                        <div id="ReactSkill" className="skillSeparator">
                        </div>

                        <div id="ReduxSkill" className="skills-item">
                            <img src={ThreeLogo} alt="ThreeJS" />
                            <h2>Three JS</h2>
                            <p>A lightweight, cross-browser, general purpose 3D javascript library.</p>
                        </div>
                        <div id="ReduxSkill" className="skillSeparator"></div>

                        <div id="JavascriptSkill" className="skills-item">
                            <img src={JavascriptImg} alt="Javascript" />
                            <h2>Javascript</h2>
                            <p>The muscle of the modern web that does all the heavy lifting.</p>
                        </div>
                        <div id="JavascriptSkill" className="skillSeparator hiddenSkillSeparator"></div>

                        <div id="RubySkill" className="skills-item responsiveSkillsItem1">
                            <img src={HtmlLogo} alt="Html Logo" />
                            <h2>Html</h2>
                            <p>Hypertext Markup Language: the backbone of the WorldWideWeb.</p>
                        </div>
                        <div id="RubySkill" className="skillSeparator responsiveSkillsItem2"></div>
                        <div id="CSSSkill" className="skills-item responsiveSkillsItem3">
                            <img src={CSSImg} alt="CSS" />
                            <h2>CSS</h2>
                            <p>I use CSS to style look and feel to my work</p>
                        </div>
                    </div>

                </div>
                
                <div className="skills-box">
                    <div className="skills-content">
                        <h1 className="skills-title">"Other-End" </h1>

                        <div id="ReactSkill" className="skills-item">
                            <img src={NextLogo} alt="Next Logo" />
                            <h2> Next JS </h2>
                            <p>I use the Next JS framework for fully interactive, <em>highly dynamic</em>, and scalable web applications.</p>
                        </div>
                        <div id="ReactSkill" className="skillSeparator"></div>


                        <div id="ReduxSkill" className="skills-item">
                            <img src={DockerLogo} alt="Docker Logo" />
                            <h2> Docker </h2>
                            <p>Docker is my primary containerization tool to 'get it right the first time.'</p>

                        </div>
                        <div id="ReduxSkill" className="skillSeparator"></div>




                        <div id="SQLSkill" className="skills-item">
                            <img src={LinuxLogo} alt="Linux Logo" />
                            <h2>Linux </h2>
                            <p>I've deployed multiple distros including Kali, Ubuntu, & other Debian-based configurations.</p>

                        </div>
                        <div id="JavascriptSkiill" className="skillSeparator"></div>




                        <div id="RubySkill" className="skills-item">
                            <img src={GitLogo} alt="Git Logo" />
                            <h2>Git </h2>
                            <p>I use Git & Github as my distributed version control tools. </p>
                        </div>


                    </div>
                </div>


                <div className="skills-box">
                    <div className="skills-content">

                        <h1 className="skills-title">Backend</h1>
                        <div id="NodeSkill" className="skills-item">
                            <img src={PythonLogo} alt="Node JS" />
                            <h2>Python</h2>
                            <p>I use Python as my go-to object-oriented programming language.</p>
                        </div>
                        <div id="NodeSkill" className="skillSeparator"></div>
                        <div id="MongoDBSkill" className="skills-item">
                            <img src={DjangoLogo} alt="MongoDB" />
                            <h2>Django</h2>
                            <p>The web app framework behind some of the most well-known websites. </p>
                        </div>
                        <div id="MongoDBSkill" className="skillSeparator"></div>
                        <div id="SQLSkill" className="skills-item">
                            <img src={SQLImg} alt="SQL" />
                            <h2>SQL</h2>
                            <p>I am experienced in SQL development, including Object-Relational Mapping databases.</p>
                        </div>
                        <div id="SQLSkill" className="skillSeparator hiddenSkillSeparator"></div>
                        <div id="RubyonRailsSkill" className="skills-item responsiveSkillsItem1">
                            <img src={ApiLogo} alt="Restful API Logo" />
                            <h2>RESTful API's</h2>
                            <p>I build Representational State Transfer protocols for Application Programming Interfaces.</p>
                        </div>



                    </div>
                </div>


            </div>



            <div className="education-separator" ref={edSepRef} id={edSepInView ? "education-separator-active" : undefined}></div>
            <div className="education-wrapper">
                <h1 className="education-header" ref={edTitleRef} id={edTitleInView ? "certTitle-active" : undefined}>
                    <span>E</span>
                    <span>d</span>
                    <span>u</span>
                    <span>c</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>&nbsp;
                    <span>a</span>
                    <span>n</span>
                    <span>d</span>&nbsp;
                    <span>C</span>
                    <span>e</span>
                    <span>r</span>
                    <span>t</span>
                    <span>i</span>
                    <span>f</span>
                    <span>i</span>
                    <span>c</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>
                    <span>s</span>
                </h1>
                <div className="cert-items">
                    <div className="flatiron-item" ref={ed1Ref} id={ed1InView ? "cert1-active" : undefined} onMouseEnter={() => setMouse1(true)} onMouseLeave={() => setMouse1(false)}>
                        <div className="flatiron-img-wrapper" onMouseEnter={() => setMouse1(false)} onMouseLeave={() => setMouse1(true)} onClick={() => setCert(!cert)}>
                            <div className="flatiron-images">
                                <img className="flatiron-img" src={KsuBanner} alt="Flatiron" style={cert ? { opacity: "0" } : { opacity: "1" }} />
                                <img className="flatiron-img" src={CumLaude} alt="Flatiron" style={cert ? { opacity: "1" } : { opacity: "0" }} />
                            </div>
                            <GiClick id={mouse1 ? "flatiron-pointer" : "flatiron-pointer-gone"} />
                            <div className="flatiron-img-hover-box">
                                <h1 style={cert ? { opacity: "1" } : { opacity: "0" }}>Click to hide distinction</h1>
                                <h1 style={cert ? { opacity: "0" } : { opacity: "1" }}>Click to view distinction</h1>
                            </div>
                        </div>
                        <div className="flatiron-text-box">
                            <h3>Kennesaw, GA</h3>
                            <h1>B.S. in Communication</h1>
                            <h4>Minor in Sociology</h4>
                            <p>I chose to base my undergraduate education in the humanities, with a formal concentration in Organizational & Professional Communication. My understandings of Anthropology, Psychology, & even Sociology, give insights to 'the individual' in any context. Having integrated extensive knowledge of organizational structure, communication theory, & social stratification, I am adaptable and open-minded when working towards any goal - personal or team-driven, big or small.</p>
                            <div className="flatiron-description-box">
                                <p>KSU School of Communication & Media Learning Outcomes:</p>
                                <ul>
                                    <li>Creative thinking, problem-solving, decision-making</li>
                                    <li>Critical thinking</li>
                                    <li>Message design: visual, oral, written, theoretical, applied</li>
                                    <li>Understanding social science research design</li>
                                    <li>Ethical sensitivity</li>
                                    <li>Diversity, knowledge and appreciation of multiple perspectives</li>
                                </ul>
                            </div>
                            <p> I am an ambitious, driven person. Not only did I receive multiple scholarships to attend university, I worked full-time employment throughout all four years as a full-time scholar; while also maintaining a social life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
