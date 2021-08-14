import React from 'react';
import { Link } from 'react-router-dom';

export default function Paragraph({para,anchor}) {
    return (
        <div className="para-text">
           <p className="p">{para} <Link to="#" className="anchor">{anchor}</Link></p>
        </div>
    )
}
