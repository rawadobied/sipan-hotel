import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { SvgIcon } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './style.scss'

const ContactHeader = (props) => {
        return (
            <div className="contact-header">
                <div className="contact-details">
                    <ul>
                        <li>
                            <PhoneIcon/> <span>(+964) 750 388 4441</span>
                        </li>
                        <li>
                            <LocationOnIcon/><span>Erbil / NazNaz Str. 100m far from airport</span>
                        </li>
                        <li>
                            <EmailIcon/><span>reservations@sipanhotels.com</span>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/sipan.hotel.erbil"><FacebookIcon fontSize={"inherit"}/></a>
                    <a href="https://www.instagram.com/sipan.hotel/"><InstagramIcon fontSize={"inherit"}/></a>
                </div>
            </div>
        )
    }

;

export default ContactHeader;
