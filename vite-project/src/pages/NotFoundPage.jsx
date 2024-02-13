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
                        <span>Pauline owes Simona {clickCountPauline} beers</span>
                    </div>
                    <div className="Simona404">
                        <img src={Player} alt="Simona" onClick={handleSimonaClick} />
                        <span>Simona owes Pauline {clickCountSimona} beers</span>
                    </div>
                </div>
                <hr></hr>
                <Link to="/">Back to Business aka. To-Do-List</Link>
            </div>
        </div>
    );
}

export default NotFound;