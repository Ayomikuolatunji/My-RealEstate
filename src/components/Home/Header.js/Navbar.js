import React,{useState, useEffect} from 'react'
import { Header } from '../../Styled'
import {AiOutlineClose, FaBars}  from "react-icons/all"
import { Hambuger,NavbarMenu,CloseHambuger} from '../../Styled'
import { Link } from 'react-router-dom'
import { ApiProvider } from '../../Api/ContextApi'
import NavbarItems from './NavbarItems'
import TopNav from './TopNav'



export default function Navbar() {
    const [toggler, setToggler]=useState(false)
    const ShowToggler=()=>{
        setToggler(!toggler)
    }
    const style={
      Width: "80px",
      height: "80px",
    }
    useEffect(() => {
      const header=document.querySelector(".header");
      const sticky=header.offsetTop;
     const scrollcallback= window.addEventListener("scroll",()=>{
      if(window.pageYOffset>sticky){
        header.classList.add("fixed-navbar")
      }else{
        header.classList.remove("fixed-navbar")
      }
     }) 
      return () => {
        window.removeEventListener("scroll", scrollcallback)
      }
    }, [])
    return (
        <div className="container">
            {/* </TopNav> */}
               <TopNav/>
                {/* Header */}
            <div className="header">
              <Header>
                <div className="brand"><Link to="/"><img src="/img/logo.png" alt="logo" style={style}/></Link></div>
                {/* Hamburger open */}
                <Hambuger onClick={ShowToggler}>
                  <FaBars/>
                </Hambuger>
                <NavbarMenu toggler={toggler}>
                  {/* Hamburger close */}
                    <CloseHambuger>
                      <AiOutlineClose onClick={ShowToggler}/>
                    </CloseHambuger>
                    <ApiProvider.Consumer>
                    {(value)=>{
                        return value.Navdatas.map(navProps=>{
                          return(
                              <NavbarItems  navProps={navProps} key={navProps.title} ShowToggler={ShowToggler}/>
                          )
                        })
                    }}
                    </ApiProvider.Consumer>
                </NavbarMenu>
              </Header>
            </div>
        </div>
    )
}
