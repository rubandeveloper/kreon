import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Assets
import './style.css'
import Images from '../../assets/Images'
import Icons from '../../assets/Icons'

// Components
import Button from '../Button'
import ReverseProxy from '../../config/reverseproxy'

const Header = ({ options, actions }) => {

    const navigator = useNavigate()

    const [HeaderOptions, setHeaderOptions] = useState([...options])
    const [ActiveOption, setActiveOption] = useState(options[0]?.id || 'home')

    const[MobileHeaderStatus, setMobileHeaderStatus] = useState(false)

    // create function to get active option from url
    const getActiveOption = () => {
        let url = window.location.pathname
        url = String(url).split('/')[1]

        if (!url) return 'home'

        let option = HeaderOptions.find(option => option.id == url)
        return option?.id || 'home'
    }

    useEffect(() => {
        const activeOption = getActiveOption()
        setActiveOption(activeOption || 'home')
    }, [window.location.pathname])

    
    return (
        <div className="header-main">
            <div className="header-content">
                <a href={ReverseProxy['proxyUrl'] + '/'} className="header-logo">
                    <img src={Images.logo} alt="Kreon Logo" />
                </a>
                <div className="header-nav-items">
                    {HeaderOptions.map((option, index) => (
                        <a
                            key={`header-option-${option.id}`}
                            className={`nav-item ${ActiveOption == option.id ? 'active-nav-item' : ''}`}
                            href={ReverseProxy['proxyUrl'] +option.url}
                        >
                            {option.label}
                            {ActiveOption == option.id && <span className="nav-item-underline"></span>}
                        </a>
                    ))}
                </div>
                <div className="header-actions">
                    {actions.map((action, index) => (
                        <Button
                            key={`header-action-${action.id}`}
                            id={action.id}
                            label={action.label}
                            icon={action.icon}
                            callback={action.callback}
                        />
                    ))}
                </div>
                <div 
                    className="header-mobile-menu" 
                    onClick={()=>setMobileHeaderStatus(!MobileHeaderStatus)}
                    dangerouslySetInnerHTML={{__html: !MobileHeaderStatus ? Icons.mobile_menu : Icons.header_close}}
                >
                </div>
                {MobileHeaderStatus && <>
                    <div className="bg-blocker"></div>
                    <div className="header-mobile-dropdown-main">

                        <div className="mobile-dropdown-menus">
                        {HeaderOptions.map((option, index) => (
                        <a
                            key={`header-option-${option.id}`}
                            className={`mobile-dropdown-menu ${ActiveOption == option.id ? 'mobile-dropdown-menu-active' : ''}`}
                            href={ReverseProxy['proxyUrl'] +option.url}
                        >
                            {option.label}
                        </a>
                    ))}
                        </div>

                        <div className="mobile-actions">
                            {actions.map((action, index) => (
                                <Button
                                    key={`header-action-${action.id}`}
                                    id={action.id}
                                    label={action.label}
                                    icon={action.icon}
                                    callback={action.callback}
                                />
                            ))}
                        </div>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header;
