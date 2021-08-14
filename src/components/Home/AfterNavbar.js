import React from 'react'
import {FcGallery}  from "react-icons/all"

export default function AfterNavbar() {
    const phoneStyle={
        fontSize:"16px",
    }
    return (
        <div className="container ">
           <div className="row after-container">
               {/* text content */}
                <div className="first-content">
                    <h1>The best online platform to buy/rent yourself a home </h1>
                    <h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, obcaecati numquam! Sunt, 
                        totam obcaecati aliquam accusamus fuga inventore, culpa voluptate cupiditate quia doloribus nam laudantium?
                    </h5>
                    <button className="firstbutton">Check Our Gallery <strong style={phoneStyle}><FcGallery/></strong></button>
                    <button className="secondbutton">Direct Contact</button>
                </div>
                {/* img */}
                <div className="second-content">
                    <img src="/img/e3.jpg" alt="img" />
                </div>
           </div>
        </div>
    )
}
