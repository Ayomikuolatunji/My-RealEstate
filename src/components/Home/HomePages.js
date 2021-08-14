import React from 'react';
import AfterNavbar from './AfterNavbar';
import Houses from './Houses';
import Rooms from './Rooms';
import Estate from './Estate';
import AboutUs from './AboutUs';
import Contactus from './Contactus';
import Footer from './Footer';
import Service from './Service';


export default function HomePages() {
    return (
      <React.Fragment>
          <AfterNavbar/>
          <Houses/>
          <Rooms/>
          <Estate/>
          <Service/>
          <AboutUs/>
          <Contactus/>
          <Footer/>
      </React.Fragment>
    )
}
