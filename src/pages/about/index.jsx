import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';

// Sub-sections
import IntoSection from './intoSection';
import ImageDetails from './imageDetails'
import ServicesSection from './servicesSection';
import DetailsSection from './detailsSection';

const About = () => {

   
       
    return (
        <div className="home-container">
           <IntoSection
                title={`About the Company`}
                mockup={Images.curve_bg}
                mockupPosition={'top'}
            />
            <ImageDetails  has_curve_bg={true}/>
            <ServicesSection />
            <DetailsSection />
        </div>
    )
}

export default About;
