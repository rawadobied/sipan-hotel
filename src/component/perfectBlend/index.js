import React, {useContext} from 'react';
import './style.scss'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {GlobalContext} from "../../context/globalContext";


const PerfectBlend = (props) => {
const{changeImgState} = useContext(GlobalContext)
        return (
            <>
                <div className="perfect-blend between">
                    <div className="container">
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline">
                                    <span className="first-letter">M</span>eeting
                                </h2>
                            </div>
                            <div className="animate-bottom">
                                <h1 className="headline">Time</h1>
                            </div>
                        </div>
                    </div>
                </div>'
                <div className="culinary-delight">
                    <div className="container">
                        <div className="restaurant-info">
                            <div className="image-group padding-right animate-left">
                                <LazyLoadImage src={"/images/conf1.jpg"} onClick={()=>{changeImgState('/images/conf1.jpg')}} />
                                <LazyLoadImage src={"/images/conf2.jpg"} onClick={()=>{changeImgState('/images/conf2.jpg')}}/>
                                <LazyLoadImage src={"/images/conf3.jpg"} onClick={()=>{changeImgState('/images/conf3.jpg')}}/>
                                <LazyLoadImage src={"/images/conf4.jpg"} onClick={()=>{changeImgState('/images/conf4.jpg')}}/>
                                {/*<img src="/images/conf1.jpg" alt=""/>*/}
                                {/*<img src="/images/conf2.jpg" alt=""/>*/}
                                {/*<img src="/images/conf3.jpg" alt=""/>*/}
                                {/*<img src="/images/conf4.jpg" alt=""/>*/}
                            </div>
                            <div className="restaurant-description">
                                <div className="global-headline">
                                    <h2 className="sub-headline">
                                        <span className="first-letter">D</span>iscover
                                    </h2>

                                    <h1 className="headline headline-dark">Conferences</h1>
                                    <div className="das"><i className="das">*</i></div>
                                </div>
                                <p>
                                    Organizing your event whether it be a conference, business luncheon, workshops, themed
                                    dinner, is made easy at Sipan Hotel, where your needs are met by our professional team
                                    who will ensure a memorable experience for up to 150 people. Our Conference and event
                                    rooms are designed for maximum flexibility with state of the art audio-visual equipment
                                    providing a calm and comfortable meeting environment
                                </p>
                                {/*<a href="#" className={'body-btn'}>Make a reservation</a>*/}
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }

;

export default PerfectBlend;
