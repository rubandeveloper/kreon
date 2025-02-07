import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const ScrollTableSection = () => {

    const [TableContent, setTableContent] = useState({
        id: 'matrix-table',
        title: `Active List`,
        header: [
            {
                type: 'th',
                label: `Name of the LSPs & DLA  |  Service Type`,
                static: true,
            },
            {
                type: 'th',
                label: `Nature of Service`
            },
            {
                type: 'th',
                label: `Customer support of LSP <br /> <span>(email, phone, website, address)</span>`
            },
            {
                type: 'th',
                label: `Greviance Redressal Mechanism  of LSP`
            },
            {
                type: 'th',
                label: `Privacy Policy Link`
            },
            {
                type: 'th',
                label: `Status of LSP with KFSL`
            },
            {
                type: 'th',
                label: `Date of onboarding`
            },
        ],
        items: [
            [
                {
                    type: 'label-item',
                    label: `Android application`,
                    value: `Stucred (DLA)`
                },
                {
                    type: 'label-item',
                    value: `Students can avail loan through our lending application.`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://stucred.com/`,
                        },
                        {
                            icon: Images.icons.mail,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `care@stucred.com`,
                        },
                        {
                            icon: Images.icons.call,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `044-42696634`,
                        },
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://stucred.com/`,
                        },
                        
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.link,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://stucred.com/privacy-policy/`,
                        },
                        
                    ]
                },
                {
                    type: 'label-item',
                    value: `Active`
                },
                {
                    type: 'label-item',
                    value: `NA`
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `collections agency`,
                    value: `Acenna Technology solution Private Ltd`
                },
                {
                    type: 'label-item',
                    value: `Students can avail loan through our lending application.`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://acenna.in/`,
                        },
                        {
                            icon: Images.icons.mail,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `info@acenna.in`,
                        },
                        {
                            icon: Images.icons.call,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `022-22657214`,
                        },
                        {
                            icon: Images.icons.location,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `Address: 6th Flr, Tower B, Arihant Aura,<br /> Turbhe, Navi Mumbai, Maharashtra 400703`,
                        },
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://acenna.in/grievance-redressal-mechanism`,
                        },
                        
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.link,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://acenna.in/privacy-policy`,
                        },
                        
                    ]
                },
                {
                    type: 'label-item',
                    value: `Active`
                },
                {
                    type: 'label-item',
                    value: `3/16/2024`
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `collections agency`,
                    value: `Allset Business Solutions`
                },
                {
                    type: 'label-item',
                    value: `Debt Collections`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://allset.org.in/`,
                        },
                      
                        {
                            icon: Images.icons.location,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `Address: No 108, 109, Murugesan Naikar <br /> Complex, Greams Road, Thousand lights, Chennai - 600 006.`,
                        },
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://allset.org.in/#gro`,
                        },
                        
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.link,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://allset.org.in/tc-privacy`,
                        },
                        
                    ]
                },
                {
                    type: 'label-item',
                    value: `Active`
                },
                {
                    type: 'label-item',
                    value: `10/3/2024`
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `collections agency`,
                    value: `Ariyog Analytic solutions private Limited`
                },
                {
                    type: 'label-item',
                    value: `Debt Collections`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://www.ariyog.in/`,
                        },
                      
                        {
                            icon: Images.icons.mail,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `support@ariyog.in`,
                        },
                        {
                            icon: Images.icons.call,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `+91 70451 10898`,
                        },
                      
                       
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.mail,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `compliance@ariyog.in`,
                        },
                        {
                            icon: Images.icons.user,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `Mr. Harish Sawant`,
                        },
                        {
                            icon: Images.icons.mail,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `Email: harish@ariyog.in`,
                        },
                        {
                            icon: Images.icons.call,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `+91 70451 10898`,
                        },
                        
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.link,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://www.ariyog.in/Privacy-Policy-Ariyog.pdf`,
                        },
                        
                    ]
                },
                {
                    type: 'label-item',
                    value: `Active`
                },
                {
                    type: 'label-item',
                    value: `8/6/2024`
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `collections agency`,
                    value: `Bsquare Consultants`
                },
                {
                    type: 'label-item',
                    value: `Debt Collections`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https:/bsquareconsultants.in/`,
                        },
                      
                        {
                            icon: Images.icons.mail,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `info@bsquareconsultants.in`,
                        },
                        {
                            icon: Images.icons.location,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `Address: 33, Baroda Main Street, <br /> West Mambalam, Chennai – 600 033.`,
                        },
                      
                       
                    ]
                },
                {
                    type: 'label-item',
                    value: `NA`
                },
                {
                    type: 'label-item',
                    value: `NA`
                },
                {
                    type: 'label-item',
                    value: `Active`
                },
                {
                    type: 'label-item',
                    value: `11/6/2024`
                },
            ],
        ]
    })


    const renderTableTD = (item)=>{

        const {type, label, value, items} = item

        if (type == 'label-item'){
            return `
                <div class="td-label-item">
                    ${value ? `<div class="value">${value}</div>`:''}
                    ${label ? `<div class="label">${label}</div>`:''}
                </div> 
            `
        }

        if(type == 'icon-items'){

            return `
                <div class="td-icon-items">
                    ${items.map((item, i)=>(`
                        <div class="td-icon-item ${item.classes}">
                            <img class='item-icon ${item.icon_classes || ''}' src='${item.icon}'/>
                            <div class="item-details">
                                ${item.label ? `<div class="details-label">${item.label}</div>` : ''}
                                ${item.value ? `<div class="details-value">${item.value}</div>` : ''}
                                ${item.desc ? `<div class="details-desc">${item.desc}</div>` : ''}
                            </div>
                        </div>    
                    `)).join('')}
                    
                </div> 
            `

        }

        return ''
    }   

    return (
        <div className='tablesection-container-main' >
            <div className="tablesection-container-content">
                <div className="tablesection-head">
                    <img className="tablesection-logo" src={Images.logo_border} />
                    <h1 className="tablesection-title">{TableContent.title}</h1>

                </div>

                <div className="tablesection-content-main">
                    <table className="tablesection-table">
                        <tr>
                            {TableContent.header.map((th, idx)=>(
                                <th 
                                    key={`${TableContent.id}-table-th-${idx}`} 
                                    className={`${th.static ? 'table-column-static': ''}`}
                                >
                                    <div 
                                        className="table-th"
                                        dangerouslySetInnerHTML={{__html: th.label}}
                                    ></div>
                                </th>
                            ))}
                        </tr>
                        <tbody>
                            {TableContent.items.map((tr, tr_i)=>(
                                <tr key={`${TableContent.id}-table-body-tr`}>
                                    {tr.map((td, td_i)=>(
                                        <td 
                                            key={`${TableContent.id}-table-body-tr-${tr_i}-td-${td_i}`}
                                            dangerouslySetInnerHTML={{__html: renderTableTD(td)}}
                                            className={`${TableContent.header[td_i].static ? 'table-column-static': ''}`}
                                        >
                                            
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default ScrollTableSection;
