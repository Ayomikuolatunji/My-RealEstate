import React from 'react'
import { ApiProvider } from '../Api/ContextApi';
import { Link } from 'react-router-dom';

export default function FeaturedItem({singlehouse}) {
    return (
        <div>
            <ApiProvider.Consumer>
                {value=>{
                    return(
                    <div className="featured">
                        <div className="hover-content">
                            <img src={singlehouse.img1} alt="house" />
                             <span>{singlehouse.price}</span>
                             <div className="featured-btn">
                               <Link to="/interior">
                                  <button onClick={()=>value.handleDetail(singlehouse.id)}>Check Interior</button>
                               </Link>
                              </div>
                         </div>
                         <div className="featuredtitle">
                            <h6>{singlehouse.title}</h6>
                         </div>
                     </div>
                    )
                }}
            </ApiProvider.Consumer>
        </div>
    )
}
