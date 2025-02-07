import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';

// Sub-sections
import IntoSection from './intoSection';
import ImageDetails from './imageDetails';
import TableSection from './tableSection';
import TableSection2 from './tableSection2';
import ContentSection from './contentSection'
const Support = () => {



    return (
        <div className="home-container">
           <IntoSection
                title={`Customer Grievance Redressal <br /> Procedure`}
                desc={`
                    Kreon Finnancial Services Limited, strives to ensure that 
                    our customers receive<br/> exemplary service across different touch points.
                `}
                mockup={Images.curve_bg}
                mockupPosition={'top'}
            />
            <ImageDetails 
                has_curve_bg={true}
                curve_bg={Images.bottom_curve}
            />
            <TableSection />
            <TableSection2 />
            <ContentSection />

        </div>
    )
}

export default Support;
