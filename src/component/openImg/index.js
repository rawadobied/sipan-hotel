import React, {useContext, useEffect} from 'react';
import {GlobalContext} from "../../context/globalContext";
import './style.scss'

const OpenImg = (props) => {
    const {imgOpen,changeImgState} = useContext(GlobalContext)

    useEffect(()=>{

    },[imgOpen.state])
    if(imgOpen.state===true){
        return(
            <div className="openImg-container fadeIn" onClick={()=>{changeImgState('')}}>
                <img src={imgOpen.path} alt=""/>
            </div>
        )

    }else return null
    }

;

export default OpenImg;
