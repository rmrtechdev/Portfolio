import './contact.css'
import { useEffect, useRef, useState } from 'react'
import { VscCopy } from 'react-icons/vsc'
import React from 'react'
import emailjs from '@emailjs/browser';




export default function Contact() {

    const form = useRef()
        useEffect(() => {window.scrollTo(0, 0)}, [])

    const [copied, setCopied] = useState(false)


    const formRef = useRef()

    function sendEmail(e) {
        emailjs.sendForm('service_tyxx1cv', 'contact_form', form.current, 'user_6nSZeKtgq6XdR3AX8fsxk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }, alert("Message sent!"));
            //.then(e.target.reset()));
    }


    function handleCopy() {
        let clearPopup = setTimeout(() => setCopied(false), 1500)
        copied && clearTimeout(clearPopup)
        setCopied(true)
        navigator.clipboard.writeText("raymondmichael92@gmail.com")
    }

    return (
        <div className='contact-container'>
            <div className="contact-left-box">
                <h1 className="contact-title">
                    <span id='cLetter_c1'>C</span>
                    <span id='cLetter_o'>o</span>
                    <span id='cLetter_n'>n</span>
                    <span id='cLetter_t1'>t</span>
                    <span id='cLetter_a'>a</span>
                    <span id='cLetter_c2'>c</span>
                    <span id='cLetter_t2'>t</span>&nbsp;
                    <span id='cLetter_m'>M</span>
                    <span id='cLetter_e'>e</span>
                </h1>
                <p className="contact-message contactForm1">
                    I'm available for collaboration and work opportunities. I reside in New York City and can work locally or remotely. 
                </p>


                <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                    <ul>
                        <li className='contact-item contactForm2' id='contact-half-left'>
                            <input type="text" placeholder='Name' name="user_name"/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item contactForm3' id='contact-half-right'>
                            <input type="email" placeholder='Email*' name="user_email" required/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item contactForm4' id='contact-subject'>
                            <input id='contact-third-child' type="text" placeholder='Subject' name="subject"/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item contactForm5'>
                            <textarea placeholder='Message*' name="message" required/>
                            <span className="contact-after"></span>
                        </li>
                    </ul>
                    <button className='contactForm6' type="submit">Send message!</button>
                </form>





                <div className="contact-aside contactForm7">
                    <p id='contact-copy-top'>Or email me directly at:</p>
                    <div className="contact-copy-wrap">
                        <div className='contact-copy-box'><VscCopy onClick={() => handleCopy()} id='contact-copy-icon'/><p id='contact-copy-email'>raymondmichael92@gmail.com</p></div>
                        <div className='contact-popup' id={copied ? "contact-popup-show" : undefined}>Copied!</div>
                    </div>
                </div>
            </div>
            <div className="contact-right-box">
            <div className="contact-right-cover"></div>
                <div className="map-popup">
                    <p>Raymond M. Roman</p>
                    <p>raymondmichael92@gmail.com</p>
                   
                    <p>New York, New York</p>
                </div>
                <div className="map-wrapper">
                    <iframe title='Contact Map' src="https://snazzymaps.com/embed/432692" width="100%" height="100%" style={{border: "none"}}/>
                </div>
            </div>
        </div>
    )
}


