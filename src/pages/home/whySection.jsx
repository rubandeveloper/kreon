import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const WhySection = () => {

    const [Features, setFeatures] = useState([
        {
            title: 'Strict Compliance',
            desc: 'At Kreon, we prioritize strict adherence to regulations established by the RBI and other legal frameworks involved in both digital and traditional lending. Our commitment to compliance safeguards our operations, ensuring that all financial practices are transparent, fair, and secure for our clients.',
            banner: Images.compliance,
        },
        {
            title: 'Inclusivity',
            desc: 'Kreon champions financial inclusivity by ensuring that everyone, especially those in underserved communities, has access to our financial services. We are committed to bridging financial gaps and empowering individuals with the tools they need to succeed, fostering a more equitable financial landscape',
            banner: Images.inclusivity,
        },
        {
            title: 'Ethical Financing',
            desc: ' Our core mission is to provide ethical financial solutions. Kreon offers monetary assistance at reasonable interest rates, empowering individuals to improve their financial status without the burden of excessive costs. We believe in making a positive impact by helping our clients thrive through financially sound practices.',
            banner: Images.ethical,
        },
        {
            title: 'Innovation and Technology',
            desc: 'Driven by innovation and technology, Kreon enhances customer interactions by streamlining lending processes with advanced tools, improving efficiency and effectiveness, and delivering an exceptional customer experience.',
            banner: Images.innovation,
        },

    ])



    return (
        <div className='whysection-container-main' style={{ backgroundImage: `url(${Images.curve_ring})` }}>
            <div className="whysection-container-content">
                <div className="whysection-head">
                    <img className="whysection-logo" src={Images.logo_border} />
                    <h1 className="whysection-title">Why Choose Kreon</h1>

                </div>

                <div className="whysection-content-main">
                    <div className="whysection-content-items">
                        {Features.map((feature, index) => (
                            <div className="whysection-content-item">
                                <div className="whysection-details">
                                    <div className="title">{feature.title}</div>
                                    <div className="desc">{feature.desc}</div>
                                </div>
                                <img className='banner' src={feature.banner} />
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhySection;
