import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

function About() {
    
    return (
        <div className="about-page">
    <div>
       <h2>About the Listers :</h2> 
    </div>

    
    <div className="about-card">
        <img src="" />
        <h2>Simona</h2>
        <p>Little speech</p>
        <button className="about-btn" href="gitub">GitHub</button>
    </div>

    <div className="about-card">
        <img src="" />
    <h2>Pauline</h2>
    <p>Little speech</p>
    <button className="about-btn" href="gitub">GitHub</button>
    </div>

    <div>
        <button className="return-btn">
        <Link to="/">Dashboard</Link>
        </button>
    </div>

    </div>
    );
}

export default About;