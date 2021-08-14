// import react
import React from  "react";
// import reactdom
import ReactDom from "react-dom";
// importing apps
import App from "./components"
// useContext
import ContextApi from "./components/Api/ContextApi"
// css files imported
import "./components/css/Index.css"



ReactDom.render(
   <ContextApi>
        <App/>
   </ContextApi>,
    document.querySelector("#root")
)