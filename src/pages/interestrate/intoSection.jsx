import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const IntoSection = ({title, mockup, style={}}) => {


    return (
        <div className='hero-container interestrate-hero-container' 
            style={{
                backgroundImage: `url(${mockup})`,
                height: '100vh',
                ...style
            }}
        >
            <div className="home-head">
                <h1 className="home-title home-title-medium" dangerouslySetInnerHTML={{__html: title}}></h1>
            </div>
        </div>
    )
}

export default IntoSection;
