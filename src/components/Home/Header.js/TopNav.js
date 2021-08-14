import React from 'react'
import {FcGallery,TiPhoneOutline}  from "react-icons/all"
export default function TopNav() {
    const phoneStyle={
        fontSize:"25px",
    }
    return (
        <div className="container">
             <div className="top-nav">
                <ul className="top-nav-items">
                  <li> <strong>Tel:<TiPhoneOutline/></strong>(+234)9025252652</li>
                  <li><strong>Email:</strong>HollywayGlobal@gmail.com</li>
                </ul>
                <ul className="top-nav-items2">
                    <li>Check our Estate Gallery <strong style={phoneStyle}><FcGallery/></strong></li>
                </ul>
            </div>
        </div>
    )
}
