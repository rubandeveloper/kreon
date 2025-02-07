import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';

// Sub-sections
import IntoSection from './intoSection';
import LibrarySection from './librarySection'
const Support = () => {

   
       
    return (
        <div className="home-container">
           <IntoSection
                title={`Investor Relations`}
                mockup={Images.curve_bg}
                mockupPosition={'top'}
            />
            <LibrarySection />
        </div>
    )
}

export default Support;
