import './about.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'


var ReactRotatingText = require('react-rotating-text');

function About() {
    const navigate = useNavigate()
    useEffect(() => {window.scrollTo(0, 0)}, [])
    return (
        <div className='about-container'>
            <div className="about-left-box">
                <h1 className="about-left-title">
                    <span id='letter_H'>R</span>
                    <span id='letter_I'>a</span>
                    <span id='letter_hyphen'>y</span>
                    <span id='letter_m'>m</span>
                    <span id='letter_D_one'>o</span>
                    <span id='letter_a'>n</span>
                    <span id='letter_v_one'>d</span>
                    <br />
                    <span id='letter_i_two'>M.</span>&nbsp;
                    <span id='letter_d'></span>
                    <span id='letter_d'></span>
                   
            
                    <span id='letter_comma_one'>R</span>
                    <span id='letter_I'>o</span>
                    <span id='letter_hyphen'>m</span>
                    <span id='letter_m'>a</span>
                    <span id='letter_D_one'>n</span>
                    <span id='letter_a'></span>
                    <span id='letter_v_one'></span>
                    <span id='letter_i_two'></span>
                    <span id='letter_d'></span>
                    <span id='letter_comma_two'></span>
                    <br />
               
                    <span id='letter_W'>W</span>
                    <span id='letter_e_one'>e</span>
                    <span id='letter_b'>b</span>&nbsp;
                    <span id='letter_D_two'>D</span>
                    <span id='letter_e_two'>e</span>
                    <span id='letter_v_two'>v</span>
                    <span id='letter_e_three'>e</span>
                    <span id='letter_l'>l</span>
                    <span id='letter_o'>o</span>
                    <span id='letter_p'>p</span>
                    <span id='letter_e_four'>e</span>
                    <span id='letter_r'>r</span>
                </h1>
                <br />
                <p className='about-left-description'> I'm a writer at heart ~ now I write code...</p>
                <br />
                <div className="about-left-button-box">
                    <button onClick={() => navigate('/contact')} className="about-contact-button">Contact me!</button>
                    
                </div>
            </div>
            <div className="about-right-box">
                <div className="about-right-title">About me</div>
                <ReactRotatingText items={['Python, Django Specialist', 'Data Analyst', 'UX Designer', 'Problem-Solver', 'Tech Guru']}  style={{ fontSize: '2.25rem'
                }} />
                <br />
                <br />
                <p className='about-right-description'>
                I am an ambitious, charismatic software engineer with a passion for programming and solving difficult problems.
                    <br /><br />Digital tech has always been a personal wonder that tantalizes and inspires me to create. 
                    <br />
                    I have high aspirations and am constantly striving to improve myself with every <span onClick={() => navigate('/work')}>challenge</span> I undertake.
                    My goal is to work with teams that help create technologies that make the world a better, even more fulfilling place. 
                    <br/> |. Technology for Sustainability .|
                </p>
            </div>
        </div>
    )
}

export default About
