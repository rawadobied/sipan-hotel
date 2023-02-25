import React, {useEffect} from 'react';
// import './style.scss'
import FormContact from "../form";

const ContactUs = (props) => {
        // const Id = props.match.params.id
        return (
            <div className="ContactUs-Container">
                <div className="SingleRoom-wrapper">
                    <div className="SingleRoom-mainImg">
                        <div className="border"></div>
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline">
                                    <span className="first-letter">C</span>ontact
                                    <span className="first-letter">U</span>s
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="contactUs-wrapper">
                        <div className="contactUs-note">
                            <h1 className="contact-title">Sipan Hotel</h1>
                            <span className={'details'}>
                                 If you require more information about Sipan Hotel, would like to book accommodation for an upcoming stay or have a comment
                                or suggestion about a recent visit, please contact us and we will be happy to assist you</span>
                        </div>
                        <div className="contactUs-form">
                            <FormContact/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

;

export default ContactUs;
