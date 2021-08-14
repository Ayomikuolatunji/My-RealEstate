import React, { Component } from 'react';
import {Navdatas} from './HomeDatas';
import { ServicesDatas } from './HomeDatas';
import { GeneralDatas } from './GeneralDatas';
import { InteriorData } from './GeneralDatas';

export const ApiProvider=React.createContext()
export default class ContextApi extends Component {
    state={
      Navdatas:Navdatas,
      ServicesDatas:ServicesDatas,
      GeneralDatas:GeneralDatas,
      InteriorData:InteriorData
    }
    // get detail items by id///////////////////////////////////////////
    getItem=id=>{
        const detail=this.state.GeneralDatas.find(item=>{
            return item.id===id
        });
            return detail
    }
        //   handle Prodcut details /////////////////////////////////////////
    handleDetail=id=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {
                InteriorData:product
            } 
        })
    }
    render() {
        return (
           <React.Fragment>
               <ApiProvider.Provider value={{
                   ...this.state,
                   handleDetail:this.handleDetail
               }}>
                   {this.props.children}
               </ApiProvider.Provider>
           </React.Fragment>
        )
    }
}
