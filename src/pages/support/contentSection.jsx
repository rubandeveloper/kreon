import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';
import ReverseProxy from '../../config/reverseproxy'
const ContentSection = ({}) => {

    const [SalientFeatures, setSalientFeatures] = useState([
        {
            value: `
                It will no longer be necessary for a complainant to identify under which scheme he/she should file a complaint with the Ombudsman
            `
        },
        {
            value: `
                The Scheme defines ‘deficiency in service’ as the ground for filing a complaint, with a specified list of exclusions. 
                Therefore, the complaints would no longer be rejected simply on account of “not covered under the grounds listed in the scheme”.
            `
        },
        {
            value: `
                The Scheme has done away with the jurisdiction of each ombudsman office.
            `
        },
        {
            value: `
                A Centralised Receipt and Processing Centre has been set up at RBI, Chandigarh for 
                receipt and initial processing of physical and email complaints in any language.
            `
        },
        {
            value: `
                The responsibility of representing the Regulated Entity and furnishing information 
                in respect of complaints filed by customers against the Regulated Entity would be 
                that of the Principal Nodal Officer in the rank of a General Manager in a Public Sector Bank or equivalent.
            `
        },
        {
            value: `
                The Regulated Entity will not have the right to appeal in cases where an Award is issued by the 
                ombudsman against it for not furnishing satisfactory and timely information/documents.
            `
        },
        {
            value: `
                Reserve Bank of India has established the Centralised Receipt and Processing Centre (CRPC) 
                at Chandigarh for receipt of the complaints Pan India.While complaints can continue to be 
                filed online on <a href='https://cms.rbi.org.in'>https://cms.rbi.org.in</a> , complaints can also be filed through the dedicated 
                e-mail (CRPC@rbi.org.in) or sent in physical mode to the ‘Centralised Receipt and Processing Centre’ 
                set up at <span>Reserve Bank of India, 4th Floor, Sector 17, Chandigarh - 160017</span> in the format 
                provided. Additionally, a Contact Centre with a toll-free number – <span>14448</span> (9:30 am to 5:15 pm) – 
                is also being operationalized in Hindi, English and in eight regional languages to begin with 
                and will be expanded to cover other Indian languages in due course. The Contact Centre will 
                provide information/clarifications regarding the alternate grievance redress mechanism 
                of RBI and to guide complainants in filing of a complaint. 
            `
        },
        {
            value: `
               A copy of the Scheme is available on the RBI website and on the CMS portal (<span>https://cms.rbi.org.in</span>). 
               Please attach the RBI Integrated Ombudsman Scheme here.
            `
        },
    ])

    const[PortalLinks, setPortalLinks] = useState([
        {
            label: 'https://smartodr.in/login',
            link: 'https://smartodr.in/login',
        },
        {
            label: `
                https://paytm.com/document/ir/online-dispute-resolution/fy1969-70/jan/<br />
                SEBI_Master_Circular_On_Online_Dispute_Resloution_December_28_2023.pdf
            `,
            link: 'https://paytm.com/document/ir/online-dispute-resolution/fy1969-70/jan/SEBI_Master_Circular_On_Online_Dispute_Resloution_December_28_2023.pdf'
        },
    ])

    return (
        <div className="content-container-main">
            <div className="content-row-sections">
                <div className="content-section">
                    <div className="title">Nodal Grievance Redressal Officer (NGRO)</div>
                    <div className="desc">
                        The same shall also be considered as Principal Nodal Officer, 
                        Grievance Redressal Officer, Nodal Officer, Investor Grievance 
                        Officer and Nodal Officer for Law Enforcement Agencies.
                    </div>
                    <div className="label-item">
                        <span className="label">Name</span>-Mrs. Vidyalakshmi Rajagopala
                    </div>
                    <div className="label-item">
                        <span className="label">Designation</span>- Company Secretary and Compliance Office
                    </div>
                    <div className="icon-items">
                        <div className="icon-item">
                            <img className='item-icon' src={Images.icons.mail} alt="" />
                            <div className="item-details">
                                <div className="details-label">Email at</div>
                                <div className="details-value">
                                    nodalgrievanceofficer@stucred.com /<br /> 
                                    investor.relations@kreon.in / <br />
                                    lea@kreon.in
                                </div>
                            </div>
                        </div>
                        <div className="icon-item">
                            <img className='item-icon' src={Images.icons.call} alt="" />
                            <div className="item-details">
                                <div className="details-value">(044)-426-966-34</div>
                            </div>
                        </div>
                    </div>
                    <div className="label-item">
                        Disclaimer<span className="label">- The NGRO shall also deal with issues 
                        relating to services provided by outsourced agencies.
                        </span>
                    </div>
                </div>
                <div className="content-section">
                    <div className="title">Registrar and Share Transfer Agent</div>
                    <div className="desc">For any complaints related to shares of KFSL, please contact:</div>
                  
                    <div className="icon-items">
                        <div className="icon-item">
                            <img className='item-icon' src={Images.icons.mail} alt="" />
                            <div className="item-details">
                                <div className="details-desc">
                                   <span> Purva Sharegistry (India) Private Limited</span> <br />
                                    Unit No-9, Shiv Shakti Industrial Estate, J. R. Boricha Marg, Near Lodha Excelus, Lower Parel (East), Mumbai – 400 011 
                                </div>
                            </div>
                        </div>
                        <div className="icon-item">
                            <img className='item-icon' src={Images.icons.call} alt="" />
                            <div className="item-details">
                                <div className="details-value">022-23018261/ 022-23010771</div>
                            </div>
                        </div>
                        <div className="icon-item">
                            <img className='item-icon' src={Images.icons.fax} alt="" />
                            <div className="item-details">
                                <div className="details-value">022-2301-2517 <span>(Fax No)</span></div>
                            </div>
                        </div>
                        <div className="icon-item">
                            <img className='item-icon' src={Images.icons.mail} alt="" />
                            <div className="item-details">
                                <div className="details-label">Email at</div>
                                <div className="details-value">support@purvashare.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="label-item">
                        <span className='label'>In case the investor is not satisfied with the response/reply <br />
                        given by the RTA, they may address their complaints/grievances <br />
                        at </span>investor.relations@kreon.in
                    </div>
                </div>
            </div>
            <div className="content-column-sections">
                <div className="content-section">
                    <div className="title">RBI Integrated Ombudsman Scheme, 2021</div>
                    <div className="desc">
                        RBI has integrated the three Ombudsman schemes of RBI namely, 
                        (i) the Banking Ombudsman Scheme, 2006; (ii) the Ombudsman Scheme 
                        for Non-Banking Financial Companies, 2018; and (iii) the Ombudsman 
                        Scheme for Digital Transactions, 2019; into one “The Reserve Bank - 
                        Integrated Ombudsman Scheme, 2021”. The Scheme adopts ‘One Nation One 
                        Ombudsman’ approach by making the RBI Ombudsman mechanism jurisdiction 
                        neutral. The Integrated Ombudsman Scheme, 2021 is effective from November 12, 2021.
                    </div>
                    <div className="section-list-main">
                        <div className="list-title">Salient Features of the Scheme</div>
                        <div className="list-items">
                            {SalientFeatures.map((feature, idx)=>(
                                <div 
                                    key={`list-item-${idx}`}
                                    className="list-item"
                                >
                                    <img className='item-icon' src={Images.list_dot} />
                                    <div className="item-value" dangerouslySetInnerHTML={{__html: feature.value}}></div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                    <div className="section-links-main">
                        <div className="link-title">SEBI ODR Portal</div>
                        <div className="link-items">
                            {PortalLinks.map((item, idx)=>(
                                <div 
                                    key={`link-item-${idx}`}
                                    className="link-item"
                                >
                                    <img className='item-icon' src={Images.icons.website} />
                                    <a 
                                        target={'_blank'}
                                        className="item-link" 
                                        dangerouslySetInnerHTML={{__html: item.label}}
                                        href={ReverseProxy['proxyUrl'] +item.link}
                                    ></a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection;
