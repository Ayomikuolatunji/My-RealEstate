import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';

export default function AboutUs() {

    return (
        <div className="container">
           <Title title="About Company"/>
    
            <div className="about">

                <div className="about-content">
                    <h1 className="">About Real Estate</h1>
                    <h5 className="">Tradition since 1889</h5>
                    <Paragraph para={`
                    The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
                    `} anchor="Read More About Us"/> 
                </div>
            </div>
        </div>
    )
}
