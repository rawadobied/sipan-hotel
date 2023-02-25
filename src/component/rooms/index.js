import React, {useEffect} from 'react';
import './style.scss'
import Aos from 'aos'
import RoomTypes from "../roomType";

const Rooms = (props) => {
    useEffect(()=>{
        Aos.init({
            duration:500
        })
    },[])
// useEffect(()=>{
//     alert(window.screen.width)
// },[])
    return(
        <>
        <div className="luxury-rooms between" data-aos={'fade-up'}>
            <div className="container">
                <div className="global-headline">
                    <div className="animate-top">
                        <h2 className="sub-headline">
                            <span className="first-letter">L</span>uxury
                        </h2>
                    </div>
                    <div className="animate-bottom">

                        <h1 className="headline">rooms</h1>
                    </div>
                </div>
            </div>
        </div>
            <div className="discover-our-menu">
                <div className="animate-left">
                    <RoomTypes single={true}/>
                </div>
            </div>

            {/*<div className="discover-our-menu">*/}
            {/*    <div className="container">*/}
            {/*        <div className="restaurant-info">*/}
            {/*            <div className="image-group padding-right animate-left" data-aos={'fade-right'}>*/}
            {/*                <img src="/images/single.jpg" alt=""/>*/}
            {/*                <img src="/images/twin.jpg" alt=""/>*/}
            {/*                <img src="/images/tripple.jpg" alt=""/>*/}
            {/*                <img src="/images/tripple.jpg" alt=""/>*/}
            {/*            </div>*/}
            {/*            <div className="restaurant-description" data-aos={'fade-left'}>*/}
            {/*                <div className="global-headline">*/}
            {/*                    <h2 className="sub-headline">*/}
            {/*                        <span className="first-letter">D</span>iscover*/}
            {/*                    </h2>*/}

            {/*                    <h1 className="headline headline-dark">Rooms</h1>*/}
            {/*                    <div className="das"><i className="das">*</i></div>*/}
            {/*                </div>*/}
            {/*                <p>*/}
            {/*                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.*/}
            {/*                </p>*/}
            {/*                <a href="#" className={'body-btn'}>View More</a>*/}
            {/*                </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            </>

    )
}

;

export default Rooms;
