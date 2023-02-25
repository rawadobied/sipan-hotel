import React, {useEffect, useState} from 'react';
import './style.scss'
import ContactHeader from '../component/contactHeader'
import Booking from "../component/booking";

const Header = ({hero}) => {
         const [page,setPage] = useState('')
        const [scroll, setScroll] = useState(0)
        const [toggleOpen, setToggleOpen] = useState('close')
    useEffect(()=>{
        window.addEventListener('scroll',()=>setScroll(window.scrollY))
        setPage(window.location.pathname)
        console.log(window.location.pathname)
    },[])
        return (

            <>
                <div className={`header ${toggleOpen} ${scroll > 10?'scrolled':''}`}>
                    {
                        scroll < 10 &&   <ContactHeader/>

                    }
                    <div className="container">
                        <div className="nav">
                            <div className="menu-toggle">
                                <i className="fas fa-bars" onClick={() => setToggleOpen('open')}></i>
                                <i className="fas fa-times" onClick={() => setToggleOpen('close')}></i>
                            </div>
                            <a href="/home" className="logo"><img src={'/images/1.png'}/></a>
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <a href="/home" className={`nav-link ${page && page==='/home'?'active':''}`}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/gallery" className={`nav-link ${page && page==='/gallery'?'active':''}`}>Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/rooms" className={`nav-link ${page && page==='/rooms'?'active':''}`}>Rooms & Suites</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contactus" className={`nav-link ${page && page==='/contactus'?'active':''}`}>Contact Us</a>
                                </li>

                                {/*<li className="nav-item">*/}
                                {/*    <a href="/gallery" className="nav-link">Special Offer</a>*/}
                                {/*    </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    hero && hero === true ?
                        <>
                            <div className="hero">
                                <div className="container">
                                    <h2 className="sub-headline animate-fadeUp">
                                        <span className="first-letter">W</span>elcome
                                    </h2>
                                    <div className="headline-description">
                                        <div className="separator">
                                            <div className="line line-left"></div>
                                            <div className=""><i className="das">*</i></div>
                                            <div className="line line-right"></div>
                                        </div>
                                        {/*<div className="single-animation">*/}
                                        {/*    <h5>Ready to be Open</h5>*/}
                                        {/*    <a href="#" className="btn cta-btn">Explore</a>*/}
                                        {/*</div>*/}
                                    </div>
                                    {/*<h1 className="headline">Sipan Hotel Luxury</h1>*/}
                                </div>
                            </div>
                            <div className="booking-wrapper">
                                <Booking/>
                            </div>
                        </> : null


                }
            </>
        )
    }

;

export default Header;
