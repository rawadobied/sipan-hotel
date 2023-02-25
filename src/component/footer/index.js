import React from 'react';
import './style.scss'
import ContactHeader from "../contactHeader";

const Footer = (props) => {
        return (
            <div className="footer">
                <div className="container">
                    <div className="back-to-top">
                        <a href="#"><i className={'fas fa-chevron-up'}></i></a>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-about animate-up">
                            <h3>About Us</h3>
                            <div className="das"><i className="das">*</i></div>
                            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta ducimus eius eligendi*/}
                            {/*    fugit, necessitatibus reprehenderit rerum ullam veritatis voluptate.</p>*/}
                        </div>
                        <div className="footer-content-divider animate-bottom">
                            {/*<div className="social-media">*/}
                            {/*    <h4>Follow along</h4>*/}
                            {/*    <ul className="social-icons">*/}
                            {/*        /!*<li><a href="#" className={'fab fa-twitter'}></a></li>*!/*/}
                            {/*        <li><a href="#" className={'fab fa-facebook-square'}></a></li>*/}
                            {/*        <li><a href="#" className={'fab fa-instagram-square'}></a></li>*/}
                            {/*        /!*<li><a href="#" className={'fab fa-facebook-square'}></a></li>*!/*/}
                            {/*        /!*<li><a href="#" className={'fab fa-pinterest'}></a></li>*!/*/}
                            {/*        /!*<li><a href="#" className={'fab fa-linkedin-in'}></a></li>*!/*/}
                            {/*        /!*<li><a href="#" className={'fab fa-tripadvisor'}></a></li>*!/*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            {/*<div className="newsletter-container">*/}
                            {/*    <h4>newsletter</h4>*/}
                            {/*    <form action="" className={'newsletter-form'}>*/}
                            {/*        <input type="text" name="" id="" className={'newsletter-input'} placeholder={'your email'}/>*/}
                            {/*        <button className={'newsletter-btn'}><i className={'fas fa-envelope'}></i></button>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <ContactHeader/>
                </div>
            </div>
        )
    }

;

export default Footer;
