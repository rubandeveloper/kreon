import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Assets
import './style.css'
import Images from '../../assets/Images'
import Icons from '../../assets/Icons'

// Components
import Button from '../Button'

import ReverseProxy from '../../config/reverseproxy'

const Footer = () => {

    const [SubLinks, setSubLinks] = useState([
        {
            label: 'sachet portal',
            url: 'https://sachet.rbi.org.in/'
        },
        {
            label: 'RBI ombudsman scheme',
            url: 'https://rbi.org.in/Scripts/Complaints.aspx'
        },
        {
            label: 'Fair Practice Code of KFSL',
            url: ''
        },
        {
            label: 'Privacy policy',
            url: ''
        },
        {
            label: 'Loan agreement',
            url: ''
        },
        {
            label: 'FACE Code of Conduct',
            url: ''
        },
     
        {
            label: 'Quality Policies',
            url: ''
        },
        {
            label: 'Careers',
            url: ''
        },
        {
            label: 'LSPs & DLA',
            url: '/lsp-dla'
        },
        {
            label: 'our interest rates and service charges',
            url: '/interestrate-servicecharges'
        },
    ])

    const [Connects, setConnects] = useState([
        {
            img: Images.social.twitter,
            url: ''
        },
        {
            img: Images.social.youtube,
            url: ''
        },
        {
            img: Images.social.linkedin,
            url: ''
        },
        {
            img: Images.social.meta,
            url: ''
        },
        {
            img: Images.social.instagram,
            url: ''
        }
    ])

    const [BottomLinks, setBottomLinks] = useState([
        {
            label: 'TERMS',
            url: ''
        },
        {
            label: 'PRIVACY',
            url: ''
        },
        {
            label: 'COOKIES',
            url: ''
        }
    ])

    const [DeveloperData, setDeveloperData] = useState({
        name: 'Graphisum',
        url: ''
    })

    return (
        <div className="footer-main" style={{ backgroundImage: `url(${Images.footer_bg})` }}>
            <div className="footer-content">
                <div className="footer-content-details">
                    <img className='details-logo' src={Images.logo} />
                    <div className="details-desc">
                        Kreon Finnancial drives financial inclusion through innovative, tech-enabled solutions, fostering trust, accessibility, and growth for underserved communities nationwide.
                    </div>
                    <div className="details-cards">
                        <div className="details-card">
                            <div className="label">CIN Number</div>
                            <div className="value">CIN - L65921TN1994PLC029317</div>
                        </div>
                        <div className="details-card">
                            <div className="label">Type of registration with RBI</div>
                            <div className="value">Non-Banking Financial Company</div>
                        </div>
                    </div>
                </div>
                <div className="footer-content-links">
                    <div className="links-items">
                        {SubLinks.map((item, index) => (
                            <a
                                key={`footer-link-${index}`}
                                className="links-item"
                                href={ReverseProxy['proxyUrl'] + item.url}
                            >{item.label}</a>
                        ))}
                    </div>
                </div>
                <div className="footer-content-contact">
                    <div className="contact-title">Contact us</div>
                    <div className="contact-items">
                        <div className="contact-item">Call: 9952894000</div>
                        <div className="contact-item">Contact@ Kreon FinNancial</div>
                    </div>
                </div>
                <div className="footer-content-connect">
                    <div className="connect-title">Connect with us</div>
                    <div className="connect-items">
                        {Connects.map((item, index) => (
                            <a
                                key={`footer-connect-${index}`}
                                href={ReverseProxy['proxyUrl'] +item.url}
                            ><img className='connect-item' src={item.img} alt="" /></a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-content-bottom">
                <div className="bottom-border-span"></div>
                <div className="bottom-copyright">© Kreon FinNancial  All rights reserved</div>
                <div className="bottom-links">
                    {BottomLinks.map((item, index) => (
                        <a
                            key={`footer-bottom-link-${index}`}
                            className="bottom-links-item"
                            href={ReverseProxy['proxyUrl'] +item.url}
                        >{item.label}</a>
                    ))}
                </div>
                <Link to={DeveloperData.url} target={'_blank'} className="bottom-developer">Designed and Developed by {DeveloperData.name}</Link>
            </div>
        </div>
    )
}

export default Footer;
