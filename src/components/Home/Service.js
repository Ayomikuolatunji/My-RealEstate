import React from 'react';
import Title from './Title';
import { ApiProvider } from '../Api/ContextApi';


export default function Service() {
    return (
        <div>
            <Title title={"Services"}/>
            <div className="row">
                <ApiProvider.Consumer>
                    {(value)=>{
                       return value.ServicesDatas.map(service=>{
                           return(
                               <div className="service" key={service.title}>
                                 <span>{service.icon}</span>
                                 <h6>{service.title}</h6>
                                 <p>{service.text}</p>
                               </div>
                           )
                       })
                    }}
                </ApiProvider.Consumer>
            </div>
        </div>
    )
}
