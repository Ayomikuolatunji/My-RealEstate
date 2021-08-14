import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube,TiPhoneOutline } from 'react-icons/all';
import { Link } from 'react-router-dom';
import Paragraph from './Paragraph';


export default function Footer() {
    return (
        <div className="container">
          <div className="footer-row">
              <div className="footer-column col-footer">
                 <h1>Services</h1>
                 <ul>
                     <Link to="/">Home</Link>
                     <Link to="/estate">Estate</Link>
                     <Link to="/house">Houses</Link>
                     <Link to="rooms">Rooms</Link>
                 </ul>
               </div>
               <div className="footer-column col-footer text-center">
                   <h1>Our Social Media</h1>
                   <ul>
                       <li><Link to="#"><FaFacebook/></Link></li>
                       <li><Link to="#"><FaInstagram/></Link></li>
                       <li><Link  to="#"><FaTwitter/></Link></li>
                       <li><Link  to="#"><FaWhatsapp/></Link></li>
                       <li><Link  to="#"><FaYoutube/></Link></li>
                   </ul>
               </div>
               <div className="footer-column col-footer">
                  <h1>Information</h1>
                   <ul>
                       <Link to="/contact-us">Contact Us</Link>
                       <Link to="/about-us">About Us</Link>
                       <Link to="/">Our Gallery</Link>
                       <Link to="/services">Services</Link>
                   </ul>
               </div>
               <div className="footer-column col-footer">
                 <h1>Address</h1>
                 <Paragraph para="No. 40 Yaylink Cresent,Olodi Apaplink Lagos"/>
                 <ul>
                  <li> <strong>Tel:<TiPhoneOutline/></strong>(+234)9025252652</li>
                  <li><Link className="size" to="#">HollywayGlobal@gmail.com</Link></li>
                </ul>
               </div>
          </div>
        </div>
    )
}
