import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components

const ImageDetails = ({has_curve_bg=false}) => {

    const [Sections, setSections] = useState([
        {
            image: Images.aboutpage_pillage,
            sections: [
                {
                    head: 'Board of Directors',
                    members: [
                        `Mr. Jaijash Tatia (Managing Director)`,
                        `Mrs. Henna Jain (Joint Managing Director)`,
                        `Mr. Anand Manoharlal (Non-Executive Independent Director)`,
                        `Mrs. M Menaka( Non-Executive Independent Director)`,
                        `Mrs. Rajashree Santhanam (Non-Executive Independent Director)`,
                    ]
                },
                {
                    // head: 'Board Committees',
                    sub_head: 'Audit Committee',
                    members: [
                        `Mrs. Rajashree Santhanam <br/> (Chairperson)`,
                        `Mrs. M. Maneka (Member)`,
                        `Mr. Jaijash Tatia (Member)`,
                        `Mr. Anand Manoharlal <br/> (Member)`,
                    ]
                },
                {
                    head: 'Nomination and Remuneration Committee',
                    members: [
                        `Mrs. Rajashree Santhanam (Chairperson)`,
                        `Mrs. M. Maneka (Member)`,
                        `Mr. Anand Manoharlal (Member)`,
                    ]
                },
                {
                    head: 'Stakeholder Relationship Committee',
                    members: [
                        `Mrs. M. Maneka (Chairperson)`,
                        `Mrs. Rajashree Santhanam (Member)`,
                        `Mrs. Henna Jain (Member)`,
                    ]
                },
                {
                    head: 'Key Managerial Personnel',
                    members: [
                        `Chief Financial Officer (CFO): Mrs. Shoba Nahar`,
                        `Company Secretary and Compliance Officer: <br/> Mrs. Vidyalakshmi Rajagopalan`,
                    ]
                },
            ]
        }
    ])

    return (
        <div className='carddetails-container-main' 
            style={{ 
                minHeight: '150vh',
                paddingBottom: '5%', 
                backgroundImage:has_curve_bg ? `url(${Images.curve_ring})` : null 
            }}
        > 
            <img className='carddetails-scroll_label' src={Images.scroll_label} alt="" />
            <div className="carddetails-content" style={{height: '100%'}}>
                {Sections.map((section, idx)=>(
                    <div 
                        key={`section-${idx}`}
                        className="carddetails-content-section"
                        style={{minHeight: '100%',height: '100%'}}
                    >
                    <img className="carddetails-content-image" src={section.image} />
                    <img className="carddetails-seperator-line" src={Images.vertical_splitter} />
                    <div className="carddetails-members-main">
                        <div className="members-content">
                            {section.sections.map((section, idx)=>(
                                <div 
                                    key={`members-content-section-${idx}`}
                                    className="members-content-section"
                                >
                                    {section.head && <div className="members-section-head">{section.head}</div>}
                                    {section.sub_head && <div className="members-section-head">{section.sub_head}</div>}
                                    <div className="members-section-items">
                                        {section.members.map((member, idx)=>(
                                            <div 
                                                key={`members-section-item-${idx}`}
                                                className="members-section-item"
                                                dangerouslySetInnerHTML={{__html:member}}
                                            ></div>
                                        ))}                                        
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default ImageDetails;
