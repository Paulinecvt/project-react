import React from 'react'
import { useState } from 'react';
import Player from '../img/player-new.png'
import { Link } from 'react-router-dom';

function NotFound() {

    const [clickCountPauline, setClickCountPauline] = useState(0)
    const [clickCountSimona, setclickCountSimona] = useState(0)

    const handlePaulineClick = (e) => {
        e.preventDefault();
        setClickCountPauline(clickCountPauline + 1);
    };

    const handleSimonaClick = (e) => {
        e.preventDefault();
        setclickCountSimona(clickCountSimona + 1);
    };


    return (
        <div className="NotFoundPage">
            <div>
                <h1>We messed up, meow!</h1>
                <h2>Blame who's in charge. The other one get's a free beer.</h2>
                <div className="NotFoundConatiner">
                    <div className="Pauline404">
                        <img src={Player} alt="Pauline" onClick={handlePaulineClick} />
                        <p>Pauline owes Simona {clickCountPauline} beers</p>
                    </div>
                    <div className="Simona404">
                        <img src={Player} alt="Simona" onClick={handleSimonaClick} />
                        <p>Simona owes Pauline {clickCountSimona} beers</p>
                    </div>
                </div>
                <div>
                <Link to="/">Back to Business aka. To-Do-List</Link>
                </div>
                
            </div>
        </div>
    );
}

export default NotFound;