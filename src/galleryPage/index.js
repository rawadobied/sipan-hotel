import React, {useContext, useEffect} from 'react';
import './style.scss'
import Gallery from "../component/gallery";
import OpenImg from "../component/openImg";



const GalleryPage = (props) => {


        return (
            <>
            <div className="gp-Container">
                <div className="gp-wrapper">
                    <div className="gp-mainImg">
                        <div className="border"></div>
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline">
                                    <span className="first-letter">G</span>allery
                                </h2>
                            </div>
                            <div className="animate-bottom">
                                {/*<h1 className="headline"></h1>*/}
                            </div>
                        </div>
                    </div>
                    <div className="gpTitle-container">
                        <h1 className={'headline headline-dark'}>Photo Gallery</h1>
                    </div>

                    <div className="gp-galleryWrapper">
                        <Gallery/>
                    </div>
                </div>
            </div>
                </>
        )
    }

;

export default GalleryPage;
