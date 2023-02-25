import React, {useEffect} from 'react';
import './style.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const DiscoverOurStory = (props) => {
        useEffect(() => {
            Aos.init({duration: 1000})
        }, [])

        return (
            <div className={'discover-our-story'}>
                <div className="container">
                    <div className="restaurant-info">
                        <div className="restaurant-description padding-right animate-left" data-aos-once={true}
                             data-aos={'fade-right'}>
                            <div className="global-headline">
                                <h2 className="sub-headline">
                                    <span className="first-letter">D</span>iscover
                                </h2>

                                <h1 className="headline headline-dark">Our Story</h1>
                                <div className="das"><i className="das">*</i></div>

                            </div>
                            <p>
                                Sipan Hotel is located opposite Erbil Airport. 90 rooms and suites are fully equipped with
                                the latest technology and comfort. Hotel Sipan offers free Wi-Fi, three spacious conference
                                rooms, a business center, guest parking, a health club, sports facilities, saunas, an indoor
                                pool, and a Turkish bath. You can enjoy our specialty coffees in our lobby cafe, and sample
                                a range of Turkish dishes in our Turkish restaurant. To taste the authentic turkey, come to
                                dine in our luxurious Turkish restaurant, where ancient recipes of steaks and seafood are
                                served with beautiful presentation, great taste, and fresh ingredients.
                            </p>
                            <a href="/contactus" className="btn body-btn">Contact Us</a>
                        </div>
                        <div className="restaurant-info-img animate-right" data-aos-once={true} data-aos={'fade-left'}>
                            <a href="https://www.google.com/maps/d/edit?mid=10ISY-0Od2SSaPBjNzbqtAdO6j2U6vjbe&usp=sharing">
                                <LazyLoadImage
                                    // effect={'blur'}
                                    src="/images/location.jpg"
                                    // width={'150px'}
                                    // height={'100px'}
                                />


                                {/*<img src="/images/location.jpg" alt=""/>*/}
                                {/*<iframe src={'https://www.google.com/maps/d/edit?mid=10ISY-0Od2SSaPBjNzbqtAdO6j2U6vjbe&usp=sharing'} width={'100%'}/>*/}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

;

export default DiscoverOurStory;
