import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';


// Components
import Button from '../../components/Button';

const TableSection = () => {

    const [TableContent, setTableContent] = useState({
        id: 'matrix-table',
        title: `Categorization of complaints`,
        header: [
            {
                type: 'th',
                label: `Nature of complaints`
            },
            {
                type: 'th',
                label: `Escalation level`
            }
        ],
        items: [
            [
              
                {
                    type: 'icon-items',
                    items_title: 'Queries, Service Requests and Complaints on',
                    items: [
                        {
                            icon: Images.icons.app,
                            classes: 'td-align-center',
                            desc: `
                                App related (technical issues, like problem in login, transaction <br />
                                failures, information not being updated)
                            `,
                        },
                        {
                            icon: Images.icons.data,
                            classes: 'td-align-center',
                            desc: `
                                Data (breach, sharing with third parties without permission, consent issue)
                            `,
                        },
                        {
                            icon: Images.icons.disclosures,
                            classes: 'td-align-center',
                            desc: `
                                Disclosures (not receiving sanction/agreement letter, repayments/
                                <br /> closure reciepts, privacy policy, etc)
                            `,
                        },
                        {
                            icon: Images.icons.kyc,
                            classes: 'td-align-center',
                            desc: `
                               KYC updation (Mobile number change, etc)
                            `,
                        },
                        {
                            icon: Images.icons.interest,
                            classes: 'td-align-center',
                            desc: `
                                Interest rate/charges/Request for waiver of penal charges
                            `,
                        },
                        {
                            icon: Images.icons.closure,
                            classes: 'td-align-center',
                            desc: `
                                Closure request
                            `,
                        },
                        {
                            icon: Images.icons.issue,
                            classes: 'td-align-center',
                            desc: `
                                Any issue related to the KFSL’s product
                            `,
                        },
                    ]
                },
                {
                    type: 'group-items',
                    items: [
                        {
                            type: 'chip-label',
                            label: 'Level 1/Level 2'
                        },
                        {
                            type: 'icon-items',
                            items_title: 'Customer care Executives/Head',
                            items: [
                                {
                                    icon: Images.icons.mail,
                                    classes: 'td-align-center',
                                    label: `Email at`,
                                    value: `compliancelead@stucred.com`,
                                },
                                {
                                    icon: Images.icons.call,
                                    classes: 'td-align-center',
                                    value: `044-46271122`,
                                },
                            ]
                        },
                    ]
                },
            ],
            [
              
                {
                    type: 'icon-items',
                    items_title: 'Queries or Complaints on',
                    items: [
                        {
                            icon: Images.icons.credit_limit,
                            classes: 'td-align-center',
                            desc: `
                                Credit limit related issues (Limit enhancement/unavailable limits)
                            `,
                        },
                        {
                            icon: Images.icons.credit_bureau,
                            classes: 'td-align-center',
                            desc: `
                                Credit bureau (Credit report not updated/Disputes in credit report)
                            `,
                        },
                      
                    ]
                },
                {
                    type: 'group-items',
                    items: [
                        {
                            type: 'icon-items',
                            items_title: 'Email to respective Credit Bureaus',
                            items: [
                                {
                                    icon: Images.icons.mail,
                                    classes: 'td-align-center',
                                    label: `Email at`,
                                    value: `creditreports@kreon.in`,
                                }
                            ]
                        },
                    ]
                },
            ],
            [
              
                {
                    type: 'icon-items',
                    items_title: 'Queries or Complaints on',
                    items: [
                        {
                            icon: Images.icons.employee_fraud,
                            classes: 'td-align-center',
                            desc: `
                               Fraud by Employees
                            `,
                        },
                        {
                            icon: Images.icons.agencies_fraud,
                            classes: 'td-align-center',
                            desc: `
                                Fraud by External Agencies
                            `,
                        },
                        {
                            icon: Images.icons.kyc_breach,
                            classes: 'td-align-center',
                            desc: `
                               KYC breach/fraud
                            `,
                        },
                        {
                            icon: Images.icons.recovery,
                            classes: 'td-align-center',
                            desc: `
                               Recovery practices
                            `,
                        },
                      
                    ]
                },
                {
                    type: 'group-items',
                    items: [
                        {
                            type: 'chip-label',
                            label: 'Level 3'
                        },
                        {
                            type: 'icon-items',
                            items_title: 'Nodal Grievance Redressal Officer',
                            items: [
                                {
                                    icon: Images.icons.mail,
                                    classes: 'td-align-center',
                                    label: `Email at`,
                                    value: `nodalgreivanceofficer@stucred.com`,
                                }
                            ]
                        },
                    ]
                },
            ],
            [
              
                {
                    type: 'icon-items',
                    items_title: 'In case of no response from Company within 30 days',
                    items: []
                },
                {
                    type: 'group-items',
                    items: [
                        {
                            type: 'chip-label',
                            label: 'Level 4'
                        },
                        {
                            type: 'icon-items',
                            items_title: 'RBI Integrated Ombudsman',
                            items: [
                                {
                                    icon: Images.icons.website,
                                    classes: 'td-align-center',
                                    value: `https://cms.rbi.org.in`,
                                },
                                {
                                    icon: Images.icons.call,
                                    classes: 'td-align-center',
                                    label: `(or call us at)`,
                                    value: `14448`,
                                },
                            ]
                        },
                    ]
                },
            ],
        ]
    })


    const renderTableTD = (item)=>{

        const {type, label, value, items_title, items} = item

        if (type == 'label-item'){
            return `
                <div class="td-label-item">
                    <div class="label">${label}</div>
                    <div class="label">${value}</div>
                </div> 
            `
        }
        if (type == 'chip-label'){
            return `
                <div class="td-chip-label">
                    <div class="label">${label}</div>
                </div> 
            `
        }

        if(type == 'icon-items'){

            return `
                <div class="td-icon-items">
                    ${items_title ? `<div class="td-icon-items-title">${items_title}</div>` : ''}
                    ${items.map((item, i)=>(`
                        <div class="td-icon-item ${item.classes}">
                            <img class='item-icon' src='${item.icon}'/>
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
        if(type == 'group-items'){
            return  `
                <div class="td-group-items">
                    ${items.map((item, i)=>(renderTableTD(item))).join('')}
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

export default TableSection;
