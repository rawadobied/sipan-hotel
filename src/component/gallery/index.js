import React, {useContext} from 'react';
import './style.scss'
import gallery from '../../gallery'
import {GlobalContext} from "../../context/globalContext";

const Gallery = (props) => {
    const {imgOpen,changeImgState} = useContext(GlobalContext)

    return (
            <div className="gallery-container">
                <div className="gallery-wrapper">
                    {gallery && gallery.map(img => {
                            return (
                                <div className="gallery-img">
                                    <img className={'single-img'} src={img.img} onClick={()=>changeImgState(img.img)}/>
                                </div>
                            )
                        }
                    )}
                </div>

            </div>

        )
    }

;

export default Gallery;
