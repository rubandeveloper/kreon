import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const IntoSection = ({title, desc, mockup, mockupPosition, style={}}) => {

    const [Awards, setAwards] = useState([
        Images.awards.iso,
        Images.awards.duns,
        Images.awards.nbfc,
        Images.awards.face,
        Images.awards.bse,
        Images.awards.iso_27001,
    ])
   

    return (
        <div className='hero-container' 
            style={{
                backgroundImage: `url(${mockup})`,
                backgroundPosition: 'top',
                backgroundPositionY: '-35%',
                height: '100vh',
                ...style
            }}
        >
            <div className="home-head">
                <h1 className="home-title home-title-medium" dangerouslySetInnerHTML={{__html: title}}></h1>
                {desc &&<div className="home-desc" dangerouslySetInnerHTML={{__html: desc}}></div>}
            </div>

            <div className="about-head-content">
                <div className="about-head-desc">
                    Kreon Finnancial Services Limited is a proactive and 
                    forward-looking RBI-regulated Non-Banking Financial Company 
                    (NBFC) at the forefront of India’s rapidly evolving financial 
                    inclusion landscape. With a strong commitment to financial 
                    inclusion, we leverage advanced technology to provide tailored 
                    financial solutions that serve underserved and remote communities 
                    nationwide. Headquartered in Chennai, Tamil Nadu, and listed on 
                    the Bombay Stock Exchange Limited, Kreon is strategically expanding 
                    its footprint across India. By integrating advanced technologies like 
                    AI and ML, Kreon continuously enhances its offerings to meet evolving 
                    financial needs. Through a robust growth strategy and customer-centric 
                    approach, we have built a diverse and loyal clientele, positioning ourselves 
                    as a trusted provider of accessible and reliable credit solutions.
                </div>
                <div className="about-head-awards-main">
                    <div className="awards-head">
                        <div className="awards-head-title">Accreditations & Honors</div>
                        <div className="awards-splitter-line"></div>
                    </div>
                    <div className="awards-items">
                        {Awards.map((award, idx)=>(
                            <img 
                                key={`awards-item-${idx}`}
                                className="awards-item" 
                                src={award} 
                            />
                        ))}
                        
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default IntoSection;
