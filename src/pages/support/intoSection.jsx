import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const IntoSection = ({title, desc, mockup, mockupPosition, style={}}) => {

    const [SupportItems, setSupportItems] = useState([
        {
            image: Images.support_purpose,
            title: 'Purpose',
            desc: `
                Customer complaints constitute an important voice of customer, 
                and this page details complaint handling through a structured 
                grievance redressal framework. Complaint redressal is supported 
                by a review mechanism, to minimize the recurrence of similar issues in future.
            `
        },
        {
            image: Images.support_record,
            title: 'Record Keeping',
            desc: `
                We maintain records of all customer complaints and their resolution. 
                These records will be used to identify patterns or trends and improve 
                our products and services. Records shall be maintained for a maximum 
                period of eight years from the date of initiating the complaint.
            `
        },
        {
            image: Images.support_confident,
            title: 'Confidentiality',
            desc: `
                All customer complaints shall be handled confidentially, 
                and any information shared will be limited to those 
                involved in the investigation and resolution of the complaint.
            `
        },
    ])

    return (
        <div className='hero-container' 
            style={{
                backgroundImage: `url(${mockup})`,
                backgroundPosition: mockupPosition||'bottom',
                height: '100vh',
                ...style
            }}
        >
            <div className="home-head">
                <h1 className="home-title home-title-medium" dangerouslySetInnerHTML={{__html: title}}></h1>
                <h1 className="home-desc" dangerouslySetInnerHTML={{__html: desc}}></h1>
            </div>

            <div className="introsection-support-main">
                <div className="introsection-support-items">
                    {SupportItems.map((item, idx)=>(
                        <div
                            key={`intro-support-item-${idx}`} 
                            className="introsection-support-item"
                        >
                            <img className="support-item-icon" src={item.image} />
                            <div className="support-item-details">
                                <div className="details-title">{item.title}</div>
                                <div className="details-desc">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IntoSection;
