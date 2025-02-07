import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components

const ImageDetails = ({has_curve_bg=false, curve_bg=null}) => {

    const [Sections, setSections] = useState([
        {
            image: Images.internalicon,
            details_title: 'Internal Machinery to handle customer <br /> complaints',
            details_desc: `
                The Company has installed a <span>best-in-class CRM system</span> to ensure timely resolution of 
                the customer grievances. The system captures the complaints; follows TATs based on the 
                nature of the query and escalates issues on the basis of predefined TATs and as per 
                the escalation matrix. The customer service department will be responsible for resolution of 
                complaints/grievances to the customer’s satisfaction within a period of <span>seven (7) working 
                days</span> from the date of receipt of complaint. Every attempt will be made to offer the 
                customer suitable and appropriate alternate solutions wherever possible. However, if the 
                customer continues to remain dissatisfied with the resolution, (s)he can escalate the issue 
                through the grievance redressal mechanism as per the escalation matrix mentioned below.
            `,
        }
    ])

    return (
        <div className='carddetails-container-main'
            style={{ 
                minHeight: 'max-content', 
                paddingBottom: '10%', 
                backgroundImage:has_curve_bg ? `url(${curve_bg || Images.curve_ring})` : null,
                backgroundSize: '100%',
            }}
        >
            <div className="carddetails-content">
                {Sections.map((section, idx)=>(
                    <div 
                        key={`section-${idx}`}
                        className="carddetails-content-section"
                    >
                    <img className="carddetails-content-image" src={section.image} />
                    <div className="carddetails-content-details">
                        {section.details_title && <div className="details-title" dangerouslySetInnerHTML={{__html: section.details_title}}></div>}
                        {section.details_desc && <div className="details-desc" dangerouslySetInnerHTML={{__html:section.details_desc}}></div>}
                        
                    </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default ImageDetails;
