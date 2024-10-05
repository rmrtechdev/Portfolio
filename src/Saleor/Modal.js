import './modal.css'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { SiReact, SiThreedotjs, SiDjango, SiPython, SiVercel, SiGithub } from 'react-icons/si'
import Saleor from '../Media/Gifs/Saleor.gif'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Admin from '../Media/Images/adminlogo.jpg'



function Modal({open, setOpenModal, modalID}) {
    useEffect(() => {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])



    const [navActive, setNavActive] = useState(false)
    useEffect(() => {navActive ?  document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [navActive])

    const navigate = useNavigate()
    const closeNav = () => setNavActive(false)


    function handleClickCross() {
        navigate('/skills')
        setOpenModal(false)
        closeNav()
    }

    const modalData = [
        {id: 1, 
            title: "eCommerce Store",
            desc: "Powered by the Saleor eCommerce platform with an integrated Next.JS Vercel frontend app is a fully functional eCommerce storefront for your business needs. An admin panel allows for easy control of products' catalagues, warehouses & shipping logistics, customer profiles, & more. Your business will be sole proprietor of all data! Plus, no compounding marketplace service fees such as on Shopify, Wix, Squarespace, etc.", 
            features: ["Guest checkout", "Product review system", "Personal order history", "256-bit AES encryption"],
            tools: [SiReact, SiThreedotjs, SiPython, SiDjango, SiGithub, SiVercel],
            technologies: {
                frontend: "Merchandising, Promotions, Operations, Checkout & Payments",
                backend: "SEO, Future-proof U/I, Lightning-fast , App Security"
            },
            link: "saleor-storefront3.vercel.app",
            url: "https://saleor-storefront3.vercel.app/default-channel",
           
            video: "https://youtu.be/di8_dJ3Clyo?si=ABSEl9cY8YSFlJDW"
            
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
            <ImCross id="leave-modal" onClick={() => handleClickCross()
}/>
            <div className="modal-wrapper">
                <div className="modal-video-wrapper">
                <div className="modal-header">
                        <div className="modal-title-wrapper">
               
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
                    <div className="iframe-wrapper">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/di8_dJ3Clyo?si=p10KC3Oh-dFRy6QW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="modal-tech-wrapper">
                        <h1>Tech Tools</h1>
                        <div className="modal-techs"><span>Saleor:&nbsp;</span>
                        {currentData?.technologies?.frontend}
                        </div>
                        <div className="modal-techs"><span>Next.JS:&nbsp;</span>{currentData?.technologies?.backend}</div>
                    </div>
                </div>
                <div className="modal-text-wrapper">
                
                

                                
                             
                                
                            
                    


                   
                    <div className="modal-body">
                        <p className="modal-description" >{currentData?.desc}</p>
                        <br>
                        </br>
                        <img className='port-gif' id="my-gif" src={Saleor} alt="My Three.JS Demo Gif"/>
                        <br></br>
                       <img src={Admin} alt="My Admin Panel Gif" />
                       <br></br>
                    </div>
                    <div className="modal-visit-site">
                            <a className='modal-visit-btn' href={currentData?.url} target="_blank" rel="noreferrer">BUY ME <BsBoxArrowUpRight />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
