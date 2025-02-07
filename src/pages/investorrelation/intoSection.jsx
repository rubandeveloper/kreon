import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const IntoSection = ({title, desc, mockup, mockupPosition, style={}}) => {

   

    return (
        <div className='hero-container' 
            style={{
                backgroundImage: `url(${mockup})`,
                backgroundPositionY: '80%',
                height: '30vh',
                ...style
            }}
        >
            <div className="home-head">
                <h1 className="home-title home-title-medium" dangerouslySetInnerHTML={{__html: title}}></h1>
                {desc &&<div className="home-desc" dangerouslySetInnerHTML={{__html: desc}}></div>}
            </div>

           
        </div>
    )
}

export default IntoSection;
