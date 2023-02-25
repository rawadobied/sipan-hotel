import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import './style.scss'
import {Button} from "@material-ui/core";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import  count  from '../../data.json'


const RoomTypes = ({single,roomId}) => {
        const [counter, setCounter] = useState(0)
    const[roomDetails,setRoomDetails] = useState(null)
    const getRoomDetails=()=>{
            if(roomId!=''){
            const roomDetails= count && count.filter(c=>c.id==roomId)[0]
                setRoomDetails(roomDetails)
            }
    }
    useEffect(()=>{
        window.scrollTo(0,0)
        getRoomDetails()
    },[])

        useEffect(() => {
            const interval = setInterval(() => {
                let cont = counter
                if (cont < count.length - 1) {
                    setCounter(counter => counter + 1);
                } else {
                    setCounter(0)
                }
            }, 5000);
            return () => clearInterval(interval);
        }, [counter]);
        if (
            single === true
        ){
            return (
                <div className={'roomTypes-container'}>
                    {/*<div>{counter}</div>*/}
                    {
                        count.map((c,index) => {
                            return (
                                <div className="roomTypes-wrapper slideInRight" id={c.id}
                                     style={{display: counter === index ? 'flex' : 'none'}} key={c.id}>
                                    <div className="roomImg-container">
                                        <div className="border" ><img src={"/images/png logo iconblue.png"} alt={''}/></div>
                                        <LazyLoadImage src={c.img} />
                                        {/*<img src={c.img} alt=""/>*/}
                                    </div>
                                    <div className="roomtypes-details">
                                        <h1 className="roomType-title">{c.name.toLowerCase()}</h1>
                                        <span
                                            className="details">{c.description && c.description.split('-').map((item, index) =>
                                            <span style={{display:'block',marginTop:15}}>-{item} <br/></span>)}
                                        </span>
                                        <Link to={`/room/${c.id}`}>
                                        <Button style={{
                                            float:'right',
                                            width: '50%',
                                            placeSelf: 'flex-end',
                                            margin:'2rem 1rem 2rem 0'
                                        }} variant="contained" color={'primary'}
                                        >View Room</Button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )

        }else {
            return (
                <div className={'roomTypes-container'}>
                                <div className="roomTypes-wrapper slideInRight">
                                    <div className="roomImg-container">
                                        <div className="border" ><img src={"/images/png logo iconblue.png"} alt={''}/></div>
                                        <LazyLoadImage src={'/images/single.jpg'} />
                                        {/*<img src={c.img} alt=""/>*/}
                                    </div>
                                    <div className="roomtypes-details">
                                        <h1 className="roomType-title">{roomDetails && roomDetails.name.toLowerCase()}</h1>
                                        <span
                                            className="details">{roomDetails && roomDetails.description.split('-').map((item, index) =>
                                            <span style={{display:'block',marginTop: 15}}>-{item} <br/></span>)}</span>
                                        <Button style={{
                                            width: '50%',
                                            placeSelf: 'flex-end',
                                            marginBottom:'1rem'
                                        }} variant="contained" color={'primary'} onClick={()=>window.open('https://www.booking.com/hotel/iq/sipan.html?label=gen173nr-1DCAEoggI46AdIM1gEaG6IAQGYATG4ARjIAQzYAQPoAQH4AQKIAgGoAgS4AsORkYMGwAIB0gIkOTM2ZjBiOTgtYjVhYS00NDdmLWE5ZDAtNDA5NmRmYmNlZDZl2AIE4AIB;sid=b3434b7e16e3ade057c7918d32f412a8;dest_id=-3106433;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;srepoch=1617184970;srpvid=d31746a524700143;type=total;ucfs=1&#hotelTmpl')}>Book Now</Button>
                                    </div>
                                </div>
                    <div className={'moreDetails-container'}>
                        {
                            roomDetails && roomDetails.moreDescription.split('-').map((item, index) =>
                                <span style={{display:'block',marginTop: 17}}>> {item}<br/> <span className={'border'}></span></span>)
                        }
                    </div>
                </div>

            )
        }
    }

;

export default RoomTypes;
