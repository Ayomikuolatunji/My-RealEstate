import React from 'react';
import Paragraph from './Paragraph';
import Title from './Title';

export default function Contactus() {
    return (
        <div className="container-contact">
            <div style={{textAlign:"center"}}>
                <Title title="Contact Us Here"/>
                <Paragraph para="
                  Found the house you love? or Give us a message:
                "/>
            </div>
            <div className="row">
                <div className="column">
                <img src="/img/map.jpg" style={{width:"100%"}} alt="map"/>
                </div>
                <div className="column">
                <form>
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    <label >Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="canada">Nigeria</option>
                        <option value="usa">South Africa</option>
                        <option value="canada">Ghana</option>
                        <option value="usa">England</option>
                    </select>
                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
                    <input type="submit" value="Submit"/>
                </form>
                </div>
            </div>
        </div>
    )
}
