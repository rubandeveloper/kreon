import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components

const CardDetails = () => {

    const [Sections, setSections] = useState([
        {
            logo: Images.stucred,
            label: 'StuCred™',
            title: 'Extension Options',
            desc: `
                Borrowers can avail <span>4 extensions of 30 days each</span> 
                if unable to repay on or before the due date by 
                paying the following upfront charges:
            `,
            details: [
                `<span>Extension 1:</span> 7% + GST on the loan amount.`,
                `<span>Extension 2:</span> 7.5% + GST on the loan amount.`,
                `<span>Extension 3:</span> 8% + GST on the loan amount.`,
                `<span>Extension 4:</span> 8.5% + GST on the loan amount.`,
            ]
        },
        {
            logo: Images.stucred,
            label: 'StuCred™',
            title: 'Extension Options',
            desc: `
                <span>Processing Fee:</span>  One-time upfront deduction of <span>7% + GST</span> from the loan amount.
                <br />
                <br />
                APR: 99.12%
                <br />
                <br />
                <span>Penal Charges:</span> Penal Charges consist of default service charges and daily late fees.
                <br />
                <br />
                <span>Default Service Charge: 7% + GST</span> on loan amount added to the loan amount on DPD 1 and added every 31st DPD thereafter. 
            `,
            details_title: 'Daily Late Fees',
            details: [
                `Rs.5 <span>on loan amount</span> ₹500-₹2500`,
                `Rs.10 <span>on loan amount</span> ₹3000-₹5000`,
                `Rs.15 <span>on loan amount</span> ₹5500-₹7500`,
                `Rs.20 <span>on loan amount</span> ₹8000-₹10000`,
                `Rs.25 <span>on loan amount</span> ₹10500-₹12500`,
                `Rs.30 <span>on loan amount</span> ₹13000-₹15000`    
            ]
        },
    ])

    return (
        <div className='carddetails-container-main' style={{ backgroundImage: `url(${Images.curve_ring})` }}>
            <div className="carddetails-content">
                {Sections.map((section, idx)=>(
                    <div 
                        key={`section-${idx}`}
                        className="carddetails-content-section"
                    >
                    <div className="carddetails-content-card">
                        {section.logo && <img className='card-logo' src={section.logo}  /> }
                        {section.label && <div className='card-label'>{section.label}</div>}
                        <div className="card-title">{section.title}</div>
                        <div className="card-desc" dangerouslySetInnerHTML={{__html: section.desc}}></div>
                    </div>
                    <img className="carddetails-seperator-line" src={Images.vertical_splitter} />
                    <div className="carddetails-content-details">
                        {section.details_title && <div className="details-title">{section.details_title}</div>}
                        {section.details.map((detail, d_idx)=>(
                            <div
                                key={`section-details-${d_idx}`} 
                                className="details-item"
                            >
                                <div className="value" dangerouslySetInnerHTML={{__html: detail}}></div>
                            </div>
                        ))}
                    </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default CardDetails;
