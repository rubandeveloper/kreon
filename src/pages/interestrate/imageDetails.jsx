import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components

const ImageDetails = ({has_curve_bg=false}) => {

    const [Sections, setSections] = useState([
        {
            image: Images.mydayicon,
            details_title: 'Traditional Lending',
            details: [
                `<span>Loan Tenure:</span>  No specific period, based on the terms agreed`,
                `<span>Interest Rate:</span> 12%-24% Based on the risk.`,
                `<span>Processing fees:</span> No processing fee.`,
                `<span>Default Service Charge:</span> No default charges`,
            ]
        }
    ])

    return (
        <div className='carddetails-container-main' style={{ minHeight: 'max-content', paddingBottom: '5%', backgroundImage:has_curve_bg ? `url(${Images.curve_ring})` : null }}>
            <div className="carddetails-content">
                {Sections.map((section, idx)=>(
                    <div 
                        key={`section-${idx}`}
                        className="carddetails-content-section"
                    >
                    <img className="carddetails-content-image" src={section.image} />
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

export default ImageDetails;
