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
        title: `Terminated list`,
        header: [
            {
                type: 'th',
                label: `Name of the LSPs & DLA  | Category`,
                static: true,
            },
            {
                type: 'th',
                label: `Nature of Service`
            },
            {
                type: 'th',
                label: `Website`
            },
            {
                type: 'th',
                label: `Date of termination/<br/>inactivation`
            },
            
        ],
        items: [
            [
                {
                    type: 'label-item',
                    label: `Affiliate partner`,
                    value: `Gromo`
                },
                {
                    type: 'label-item',
                    value: `Customer acquisition `
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://gromo.in/`,
                        },
                    ]
                },
                {
                    type: 'label-item',
                    value: `31/07/24`
                },
            ],
           
            [
                {
                    type: 'label-item',
                    label: `Affiliate partner`,
                    value: `Pick My Work`
                },
                {
                    type: 'label-item',
                    value: `Customer acquisition `
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://www.pickmywork.com/`,
                        },
                    ]
                },
                {
                    type: 'label-item',
                    value: `10/09/24`
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `Affiliate partner`,
                    value: `Finshell`
                },
                {
                    type: 'label-item',
                    value: `Customer acquisition `
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://play.google.com/store/apps/details/FinShell_Pay?id=com.finshell.fin&gl=IN`,
                        },
                    ]
                },
                {
                    type: 'label-item',
                    value: `03/05/24`
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `Affiliate partner`,
                    value: `Ypay`
                },
                {
                    type: 'label-item',
                    value: `Customer acquisition `
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://ypaycard.com/`,
                        },
                    ]
                },
                {
                    type: 'label-item',
                    value: `03/05/24`
                },
            ],
            [
                {
                    type: 'label-item',
                    label: `Affiliate partner`,
                    value: `Kickcash`
                },
                {
                    type: 'label-item',
                    value: `Customer acquisition `
                },
                {
                    type: 'icon-items',
                    items: [
                        {
                            icon: Images.icons.website,
                            icon_classes: 'icon-small',
                            classes: '',
                            value: `https://play.google.com/store/apps/details?id=in.cashback.shopping.kickcash`,
                        },
                    ]
                },
                {
                    type: 'label-item',
                    value: `12/06/24`
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
