import './modal.css'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { FaGithub } from "react-icons/fa"
import { SiReact, SiThreedotjs, SiDjango, SiPython, SiVercel, SiGithub, SiRubyonrails, SiPostgresql } from 'react-icons/si'


function Modal({open, setOpenModal, modalID}) {
    useEffect(() => {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    const modalData = [
        {id: 1, 
            title: "My Simple Wardrobe.",
            desc: "Powered by the Saleor eCommerce platform with an integrated Next.JS Vercel frontend app is a fully functional eCommerce storefront for your business needs. An admin panel allows for easy control of products catalagues, warehouses & shipping logistics, customer profiles, & more. Your business will be sole proprietor of all data! Plus, no compounding marketplace service fees such as on Shopify, Wix, Squarespace, etc.", 
            features: ["Guest checkout", "Product review system", "Personal order history", "256-bit AES encryption"],
            tools: [SiReact, SiThreedotjs, SiPython, SiDjango, SiGithub, SiVercel],
            technologies: {
                frontend: "Merchandising, Promotions, Operations, Checkout & Payments",
                backend: "SEO, Future-proof U/I, Lightning-fast speeds, App Security"
            },
            link: "saleor-storefront3.vercel.app",
            url: "https://saleor-storefront3.vercel.app/default-channel",
           
            video: "https://www.youtube.com/embed/ZwveyK1Ag60"
        }
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
                        <div className="modal-techs"><span>Saleor:&nbsp;</span>{currentData?.technologies?.frontend}</div>
                        <div className="modal-techs"><span>Next.JS:&nbsp;</span>{currentData?.technologies?.backend}</div>
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
                            
                            <a className="modal-link2" href={currentData?.github} target="_blank" rel="noreferrer"></a>
                        </div>
                        <div className="modal-tools-wrapper">
                            {currentData?.tools?.map(Tool => 
                                <Tool className="modal-tool"/>
                            )}
                        </div>
                    </div>
                    <div className="modal-body">
                        <p className="modal-description">{currentData?.desc}</p>
                       
                       
                    </div>
                    <div className="modal-visit-site">
                            <a className='modal-visit-btn' href={currentData?.url} target="_blank" rel="noreferrer">VISIT WEBSITE</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;