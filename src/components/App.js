import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePages from "./Home/HomePages";
import "./css/header.css";
import "./css/after.css";
import "./css/featured.css";
import "./css/title.css";
import "./css/services.css";
import "./css/Detail.css";
import "./css/about.css";
import "./css/contact.css";
import "./css/footer.css"
import Navbar from "./Home/Header.js/Navbar";
import PageServices from "./pages/PageServices";
import HouseDetail from "./Home/HouseDetail";
import EstatePage from "./pages/EstatePage";
import RoomPage from "./pages/RoomPage";
import HousePage from "./pages/HousePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"

const App=()=>{
    return(
        <div className="container">
           <Router>
               <Navbar/>
               <Route path="/" exact component={HomePages}/>
               <Route path="/services" component={PageServices}/>
               <Route path="/interior" component={HouseDetail}/>
               <Route path="/estate" component={EstatePage}/>
               <Route path="/rooms" component={RoomPage}/>
               <Route path="/house" component={HousePage}/>
               <Route path="/about-us" component={AboutPage}/>
               <Route path="/contact-us" component={ContactPage}/>
           </Router>
        </div>
    )
}

export default App;