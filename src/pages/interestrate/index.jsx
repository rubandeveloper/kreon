import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';

// Sub-sections
import IntoSection from './intoSection';
import CardDetails from './cardDetails';
import ImageDetails from './imageDetails';

const Interestrate = () => {


    return (
        <div className="home-container">
           <IntoSection
                title={`Our Interest Rate and Service Charges <br /> for Digital Lending`}
                mockup={Images.mockups.interestrate}
            />
           <CardDetails />
           <IntoSection
                title={`MYDAYPAYDAY`}
                mockup={Images.mockups.mydaypayday}
                style={{marginTop: '5%'}}
            />
            <ImageDetails 
                has_curve_bg={false}
            />

        </div>
    )
}

export default Interestrate;
