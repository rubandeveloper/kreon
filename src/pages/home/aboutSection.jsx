import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const AboutSection = () => {


    const [Milestones, setMilestones] = useState([
        {
            year: '1994',
            icon: Images.kreon,
            label: 'Kreon was established as a <br /> traditional lending company'
        },
        {
            year: '1995',
            icon: Images.kreon,
            label: 'Kreon became a public <br /> limited company'
        },
        {
            year: '2017',
            icon: Images.stucred,
            label: 'Branched into digital <br /> lending with Stucred'
        },
        {
            year: '2025',
            icon: Images.mdpa,
            label: 'MDPD will be <br /> launced'
        },
        {
            year: '2024',
            icon: Images.stucred,
            label: 'Stucred hit 10 lakh <br /> users'
        },
        {
            year: '2021',
            icon: Images.stucred,
            label: 'Stucred hit 1 lakh <br /> users'
        },
    ])

    const [Visiions, setVisions] = useState([
        {
            title: 'Vision',
            desc: `
                To empower individuals, businesses, and communities by
                transforming the financial landscape with innovative, inclusive,
                and sustainable solutions. Through cutting-edge technology,
                financial literacy, and a commitment to progress, we aim to
                bridge socio-economic gaps, foster growth, and build a
                resilient, future-ready economy.
            `,
            icon: Images.vision
        },
        {
            title: 'Mission',
            desc: `
                To bridge the gap between traditional financial services
                and the fast-paced needs of today’s emerging markets.
                We make credit accessible, seamless, and customized by
                harnessing state-of-the-art technology – all while
                upholding the highest standards of compliance and governance.
            `,
            icon: Images.mission
        },
    ])



    return (
        <div className='about-container-main' style={{ backgroundImage: `url(${Images.about_bg})` }}>
            <div className="about-container-content">
                <div className="about-head">
                    <img className="about-logo" src={Images.logo_border} />
                    <h1 className="about-title">About the Company </h1>
                    <p className="about-desc">
                        Kreon Finnancial Services Limited, a Chennai-based  RBI- regulated NBFC listed on the BSE, leverages advanced technologies like <br />
                        AI and ML to deliver innovative and inclusive financial solutions, empowering underserved communities across India. With a<br />
                        customer-centric approach and nationwide presence, Kreon is a trusted leader in accessible credit services<br />
                    </p>
                </div>

                <div className="about-timeline">
                    <div className="timeline-title">Kreon timeline</div>
                    <div className="timeline-content">
                        <div className="timeline-row-line1"></div>
                        <div className="timeline-row-line2"></div>
                        <div className="timeline-row-curve" dangerouslySetInnerHTML={{ __html: Icons.side_curve }}></div>
                        <div className="timeline-row-rocket" dangerouslySetInnerHTML={{ __html: Icons.rocket }}></div>
                        <div className="timeline-content-items">
                            {Milestones.map((milestone, index) => (
                                <div
                                    key={`milestone-${index}`}
                                    className="timeline-content-item"
                                >

                                    <div className="item-year-main"><div className="item-year">{milestone.year}</div></div>
                                    <div className="item-details">
                                        <img className="item-icon" src={milestone.icon} />
                                        <span className="item-line" dangerouslySetInnerHTML={{ __html: Icons.seperator }}></span>
                                        <div className="item-label" dangerouslySetInnerHTML={{ __html: milestone.label }}></div>
                                    </div>
                                    <div className="mobile-timeline-content-item-line"></div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className="about-vision" style={{ backgroundImage: `url(${Images.india})` }}>
                    <div className="about-vision-content">
                        <div className="about-vision-content-items">
                            {Visiions.map((vision, index) => (
                                <div
                                    key={`about-vision-${index}`}
                                    className="vision-item"
                                >
                                    <div className="vision-item-details">
                                        <div className="title">{vision.title}</div>
                                        <div className="desc">{vision.desc}</div>
                                    </div>
                                    <div className="vision-item-icon"><img src={vision.icon} alt="" /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutSection;
