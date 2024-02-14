import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import paulineabout from '../img/pauline-about.png';
import simonaabout from '../img/simona-about.png';

function About() {
    
    return (
        <div className="about-page">
    <div>
       <h2>About the Listers</h2> 
    </div>

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

        <button className="return-btn">
        <Link to="/">Dashboard</Link>
        </button>
    </div>

    </div>
    );
}

export default About;