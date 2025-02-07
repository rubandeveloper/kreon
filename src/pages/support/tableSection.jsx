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
        title: `Escalation Matrix`,
        header: [
            {
                type: 'th',
                label: `Level of Complaint <br /> Lodgement/ Escalation and <br /> Official`
            },
            {
                type: 'th',
                label: `Contact details`
            },
            {
                type: 'th',
                label: `Days Available for <br /> Redressal (TAT)`
            },
        ],
        items: [
            [
                {
                    type: 'label-item',
                    label: `LEVEL 1`,
                    value: `Customer care executive`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.call,
                            classes: '',
                            label: `Call to`,
                            value: `044-46271122`,
                            desc: `(10.00 A.M to 7.00 P.M on <br /> weekdays except public <br /> holidays)`,
                        }
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.working_days,
                            classes: 'td-align-center',
                            value: `7 working days`,
                        }
                    ]
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `LEVEL 2`,
                    value: `Customer care Head`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.mail,
                            classes: '',
                            label: `Email at`,
                            value: `compliancelead@stucred.com`,
                        }
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.working_days,
                            classes: 'td-align-center',
                            value: `7-14 working days`,
                        }
                    ]
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `LEVEL 3`,
                    value: `Nodal Grievance Redressal Officer`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.mail,
                            classes: '',
                            label: `Email at`,
                            value: `nodalgreivanceoffcier@stucred.com`,
                        }
                    ]
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.working_days,
                            classes: 'td-align-center',
                            value: `14 -30 working days`,
                        }
                    ]
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `LEVEL 4`,
                    value: `Reserve Bank Integrated Ombudsman`
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            classes: '',
                            label: `Online complaint on`,
                            value: ` https://cms.rbi.org.in`,
                        },
                        {
                            icon: Images.icons.location,
                            classes: '',
                            label: `email or send physical written Complaint to`,
                            value: `CRPC, Chandigarh as below: Reserve Bank of India, 4th floor, Sector 17, Chandigarh, 160017`,
                        },
                        {
                            icon: Images.icons.call,
                            classes: '',
                            value: `14448`,
                            desc: `(09:30 AM to 05:15 PM )`,
                        },
                    ]
                },
                {
                    type: '',
                    items: []
                },
            ],
        ]
    })


    const renderTableTD = (item)=>{

        const {type, label, value, items} = item

        if (type == 'label-item'){
            return `
                <div class="td-label-item">
                    <div class="label">${label}</div>
                    <div class="label">${value}</div>
                </div> 
            `
        }

        if(type == 'icon-items'){

            return `
                <div class="td-icon-items">
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
