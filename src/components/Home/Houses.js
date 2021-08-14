import React from 'react';
import Title from './Title';
import FeaturedItem from './FeaturedItem';

import { ApiProvider } from '../Api/ContextApi';

export default function Houses() {
    return (
        <div className="container">
            <Title title={"Featured Houses"}/>
            <div className="row mt-2">
                <ApiProvider.Consumer>
                    {value=>{
                        return value.GeneralDatas.map(singlehouse=>{
                            if(singlehouse.category==="house"){
                             return <FeaturedItem singlehouse={singlehouse} key={singlehouse.id}/>
                            }
                            return value.singlehouse
                           })
                    }}
                </ApiProvider.Consumer>
            </div>
        </div>
    )
}
