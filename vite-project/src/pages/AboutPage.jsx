import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import paulineabout from '../img/pauline-about.png';
import simonaabout from '../img/simona-about.png';

function About() {
    
    return (
        <div className="about-container">
        <div className="about-title">
        <h2>About the Listers</h2> 
     </div>
     <div className="about-btn">
        <Link to="/">Dashboard</Link>
     </div>

    <div className="about-page">
    

    <div className="about-card">
        <img src={paulineabout}/>
    <h2>Pauline</h2>
    <p>The one who breaks the code</p>
    <button className="about-btn" href="https://github.com/Paulinecvt">GitHub</button>
    </div>
    <div>

    <div className="about-card">
        <img src={simonaabout} />
        <h2>Simona</h2>
        <p>The one who fix it</p>
        <button className="about-btn" href="https://github.com/sicawu">GitHub</button>
    </div>

<br/>
    
        

    </div>

    </div>
    </div>
    );
}

export default About;