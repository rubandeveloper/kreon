import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Button = ({ id, label, icon, type = 'primary', iconAlign, callback, customStyle = {} }) => {

    return (
        <button
            id={id || 'button'}
            className={`button-main ${type == 'secondary' && 'button-secondary'}`}
            onClick={callback}
            style={customStyle}
        >
            <div className="button-wrapper">
                <div className="button-content">
                    {(icon && iconAlign != 'right') && <div className="icon" dangerouslySetInnerHTML={{ __html: icon }}></div>}
                    {label && <div className="label">{label}</div>}
                    {(icon && iconAlign == 'right') && <div className="icon" dangerouslySetInnerHTML={{ __html: icon }}></div>}
                </div>
            </div>
        </button>
    )
}

export default Button;
