import React from 'react'
import { ApiProvider } from '../Api/ContextApi';
import { Link } from 'react-router-dom';
import Paragraph from './Paragraph';

export default function HouseDetail() {
    return (
        <div>
         <ApiProvider.Consumer>
            {(value)=>{
                const {title,price,img1,img2,img3,img4,info,extras,about}=value.InteriorData;
                return(
                  <div className="container">
                      <div className="jumbotron">
                            <img src={img1} alt="img"/>
                            <h1>{title}</h1>
                       </div>
                       <div className="row detail">
                           <div className="detail-img">
                              <img src={img2} alt="detail-img" />
                           </div>
                           <div className="detail-img">
                              <img src={img3} alt="detail-img" />
                           </div>
                           <div className="detail-img">
                              <img src={img4} alt="detail-img" />
                           </div>
                       </div>
                       <div className="row detail">
                           <div className="firstDetail">
                                <h2>Details</h2>
                                <Paragraph para={about}/>
    
    
                                <h2>Extral Details</h2>
                                <div className="extral">
                                    <h3><input type="checkbox" checked/>{extras.ex1}</h3>
                                    <h3><input type="checkbox" checked/>{extras.ex2}</h3>
                                    <h3><input type="checkbox" checked/>{extras.ex3}</h3>
                                </div>
                           </div>
                           <div className="secondDetail">
                                <h2>Info</h2>
                                <h3><strong>Name:</strong>{title}</h3>
                                 <h3><strong>Price:</strong>${price}</h3>
                                 <h3><strong>Land Size:</strong>{info.size}</h3>
                                 <h3><strong>Maximum Capacity:</strong>{info.Capacity}</h3>
                                 <h3><strong>Rooms:</strong>{info.Contain}</h3>
                           </div>
                       </div>

                       <div className="back-to-home-page">
                           <Link to="/">
                             <button>Back To Homepage</button>
                           </Link>
                       </div>
                       
                  </div>
                )
            }}
         </ApiProvider.Consumer>
        </div>
    )
}
