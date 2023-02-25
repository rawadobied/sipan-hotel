import React, {useEffect} from 'react';
import Gallery from "../gallery";
import './style.scss'
import Rooms from "../rooms";
import RoomTypes from "../roomType";
import {useParams} from 'react-router-dom'

const SingleRoom = (props) => {
    const {Id} = useParams()
    // const Id = props.match.params.id
    return(
        <div className="SingleRoom-Container">
            <div className="SingleRoom-wrapper">
                <div className="SingleRoom-mainImg">
                    <div className="border"></div>
                    <div className="global-headline">
                        <div className="animate-top">
                            <h2 className="sub-headline">
                                <span className="first-letter">R</span>ooms
                            </h2>
                        </div>
                        <div className="animate-bottom">
                            {/*<h1 className="headline"></h1>*/}
                        </div>
                    </div>
                </div>
                {/*<div className="SingleRoomTitle-container">*/}
                {/*    <h1 className={'headline headline-dark'}>Photo Gallery</h1>*/}
                {/*</div>*/}
            </div>
            <RoomTypes single={false} roomId={Id}/>
        </div>
    )
    }

;

export default SingleRoom;
