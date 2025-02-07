import React, { useEffect, useState } from 'react'

// Assets
import './style.css';

// Sub-sections
import IntoSection from './intoSection';
import AboutSection from './aboutSection';
import ServicesSection from './servicesSection';
import WhySection from './whySection';
import TestimonialsSection from './testimonialsSection';

const Home = () => {


    return (
        <div className="home-container">
            <IntoSection />
            <AboutSection />
            <ServicesSection />
            <WhySection />
            <TestimonialsSection />
        </div>
    )
}

export default Home;
