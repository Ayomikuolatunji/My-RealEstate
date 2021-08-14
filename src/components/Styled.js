import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header=styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    background:#fff;
    color:#fff;
    z-index:999;
    font-family:"poppins", san-serif;
    padding:5px 20px;
    border-bottom:2px solid lightgray;
`
export const Hambuger=styled.span`
    color:#000;
    margin:20px;
    position:absolute;
    right:0;
    font-size:30px;
    display:none;
    @media (max-width:880px){
        display:block;
    }
`
export const CloseHambuger=styled.span`
    position:absolute;
    left:0;
    color:#fff;
    top:0;
    font-size:50px;
    margin-top:40px;
    display:none;
    transition:all 2s ease;
    @media (max-width:880px){
        display:block;
    }
`
export const NavbarMenu=styled.div`
   display:flex;
   z-index:999;
   @media (max-width:880px){
    flex-direction:column;
    position:fixed;
    right:${({toggler})=>toggler?"0":"-100%"};
    height:100vh;
    top:0;
    justify-content: center;
    width:200px;
    background:rebeccapurple;
    transition:all 1s ease;
    text-align:end;
    color:#000;
    border-radius:8px;
    border-left: 2px solid #fff;
 }

`
export const NavListStyle=styled(Link)`
    margin-left:35px;
    list-style:none;
    color: rgb(128, 123, 123);
    text-decoration:none;
    font-weight:bolder;
    font-size:18px;
    position:relative;
    display:block;
    padding:5px;
    ::after{
        content:"";
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        height:4px;
        transform:scale(0);
        background-color:tomato;
        z-index:1;
        max-width:100%;
        transition:all .7s ease;
    }
    :hover{
        ::after{
            transition:all .7s ease;
            transform:scale(1);
        }
    }

    @media (max-width:990px){
        margin-left:25px;
    }
    @media (max-width:880px){
        margin-left:20px;
        font-size:16px;
    }
    @media (max-width:770px){
        margin:40px 20px 0 20px;
        font-size:18px;
        color:#fff;
     }
    
`