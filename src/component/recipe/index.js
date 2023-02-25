import React, {useEffect,useContext} from 'react';
import './style.scss'
import Aos from 'aos'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {GlobalContext} from "../../context/globalContext";


const Recipe = (props) => {
    const{changeImgState} = useContext(GlobalContext);
    useEffect(() => {
            Aos.init({
                duration: 500
            })
        }, [])

        return (
            <>
                <div className="tasteful-recipes between" data-aos={'fade-up'}>
                    <div className="container">
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline">
                                    <span className="first-letter">T</span>astful
                                </h2>
                            </div>
                            <div className="animate-bottom">
                                <h1 className="headline">recipes</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="discover-our-menu">
                    <div className="container">
                        <div className="restaurant-info">
                            <div className="image-group padding-right animate-left" data-aos={'fade-right'}>
                                <LazyLoadImage src={"/images/DSC04167.png"} onClick={()=>changeImgState('/images/DSC04167.png')}/>
                                <LazyLoadImage src={"/images/DSC03850.png"} onClick={()=>changeImgState('/images/DSC03850.png')}/>
                                <LazyLoadImage src={"/images/DSC03887.png"} onClick={()=>changeImgState('/images/DSC03887.png')}/>
                                <LazyLoadImage src={"/images/DSC04171.png"} onClick={()=>changeImgState('/images/DSC04171.png')}/>
                                {/*<img src="/images/DSC04167.png" alt=""/>*/}
                                {/*<img src="/images/DSC03850.png" alt=""/>*/}
                                {/*<img src="/images/DSC03887.png" alt=""/>*/}
                                {/*<img src="/images/DSC04171.png" alt=""/>*/}
                            </div>
                            <div className="restaurant-description" data-aos={'fade-left'}>
                                <div className="global-headline">
                                    <h2 className="sub-headline">
                                        <span className="first-letter">D</span>iscover
                                    </h2>

                                    <h1 className="headline headline-dark">Our Turkish <br/>Restaurant</h1>
                                    <div className="das"><i className="das">*</i></div>
                                </div>
                                <p>
                                    We wanted to introduce "The Art of Turkish Food" to display seasonal produce cooked with
                                    a Turkish touch. We are committed to providing an excellent Turkish dining experience to
                                    all our guests and we will continue to develop, explore, taste, and develop new Turkish
                                    dishes that all our guests can enjoy.
                                </p>
                                <a href="http://rest.sipanhotels.com" className={'body-btn'}>View Full Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }

;

export default Recipe;
