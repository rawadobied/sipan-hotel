import React, {useEffect} from 'react';
// import './style.scss'
import data from '../../data'

const AllRooms = (props) => {
        // const Id = props.match.params.id
        return (
            <div className="AllRooms-Container">
                <div className="AllRooms-wrapper">
                    <div className="AllRooms-mainImg">
                        <div className="border"></div>
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline">
                                    <span className="first-letter">R</span>ooms
                                    <span> & </span>
                                    <span className="first-letter">S</span>uites
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className={'grid-rooms'}>
                        {data && data.map(d=>{return(
                            <div className="grid-singleRoom">
                                <div className="img-container">
                                    <img src={d.img} alt=""/>
                                </div>
                                <div style={{ overflow: 'hidden'}} className="details-container">
                                    <h4 className={'mainFont'}>{d.name.toLowerCase()}</h4>
                                    <span style={{fontSize:'20px',padding:'1rem'}}>Max Occupancy : {d.maxPerson} Person</span>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        )
    }

;

export default AllRooms;
