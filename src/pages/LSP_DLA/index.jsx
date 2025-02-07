import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';

// Sub-sections
import IntoSection from './intoSection';
import ScrollTableSection from './scrollTableSection';
import ScrollTableSection2 from './scrollTableSection2';

const Support = () => {



    return (
        <div className="home-container">
           <IntoSection
                title={`LSP & DLA`}
                desc={`
                    Lending Service Providers and Digital Lending App
                `}
                mockup={Images.curve_bg}
                mockupPosition={'top'}
            />
            <ScrollTableSection />
            <ScrollTableSection2 />
        </div>
    )
}

export default Support;
