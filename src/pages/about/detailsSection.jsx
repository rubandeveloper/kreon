import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const DetailsSection = () => {

    const [DetailsContent, setDetailsContent] = useState({
        id: 'details-content-cards',
        title: `Kreon Financial's Guiding <br /> Principles and Core Values`,
        items: [
            {
                icon: Images.icons.customer,
                title: 'Customer-Centricity',
                desc: `
                    Our customers are at the heart of everything we do. 
                    We strive to understand their unique needs and provide 
                    personalized financial solutions that truly make a difference in their lives.
                `
            },
            {
                icon: Images.icons.integrity,
                title: 'Integrity',
                desc: `
                    Trust is our cornerstone. We uphold the highest standards of transparency, 
                    honesty, and ethical practices, ensuring that every interaction builds lasting relationships.
                `
            },
            {
                icon: Images.icons.inclusivity_icon,
                title: 'Inclusivity',
                desc: `
                    We believe everyone deserves access to financial opportunities. By bridging gaps 
                    and empowering underserved communities, we create a more equitable financial ecosystem.
                `
            },
            {
                icon: Images.icons.excellence,
                title: 'Excellence',
                desc: `
                    Excellence defines our work. From seamless user experiences to robust financial 
                    products, we go above and beyond to deliver value that exceeds expectations.
                `
            },
            {
                icon: Images.icons.customer,
                title: 'Sustainability',
                desc: `
                    Beyond profits, we’re dedicated to making a lasting impact. 
                    Through responsible lending and financial education, we aim 
                    to foster growth and resilience for individuals and communities alike.
                `
            },
            {
                icon: Images.icons.collaboration,
                title: 'Collaboration',
                desc: `
                    Together, we achieve more. By working closely with our customers, 
                    partners, and employees, we create solutions that drive shared 
                    success and mutual grow
                `
            },
        ]
    })


    
    return (
        <div className='tablesection-container-main'
            style={{ 
                minHeight: 'max-content', 
                backgroundImage:`url(${Images.bottom_curve})`,
                backgroundSize: '100%',
                backgroundPosition: 'top',
                backgroundPositionY: '-0%',
                paddingTop: '15%', 
                paddingBottom: '10%', 

            }}
        >
            <div className="tablesection-container-content">
                <div className="tablesection-head">
                    <img className="tablesection-logo" src={Images.logo_border} />
                    <h1 className="tablesection-title" dangerouslySetInnerHTML={{__html: DetailsContent.title}}></h1>

                </div>

                <div className="tablesection-details_cards-section">
                    <div className="details_cards-section-items">
                        {DetailsContent.items.map((item, idx)=>(
                            <div 
                                key={`details_cards-item-${idx}`}
                                className="details_cards-section-item"
                            >
                                <img className='item-icon' src={item.icon} />
                                <div className="item-title">{item.title}</div>
                                <div className="item-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="details_cards-actions">
                        <Button
                            key={`contact-us-btn`}
                            id='contact-us-btn'
                            label="CONTACT US"
                            callback={() => { }}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetailsSection;
