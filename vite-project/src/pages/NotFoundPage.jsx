import React from 'react'
import { useState } from 'react';
import Player from '../img/player-new.png'
import { Link } from 'react-router-dom';
import Pauline from '../img/pauline-about.png';
import Simona from '../img/simona-about.png';

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
                <p>Blame who's in charge. The other one gets a free beer.</p>
                <div className="NotFoundConatiner">
                    <div className="Pauline404">
                        <img src={Pauline} alt="Pauline" onClick={handlePaulineClick} />
                        <p>Pauline owes Simona {clickCountPauline} beer(s).</p>
                        <Link to="/">Back to To-Do-List</Link>
                    </div>
                    <div className="Simona404">
                        <img src={Simona} alt="Simona" onClick={handleSimonaClick} />
                        <p>Simona owes Pauline {clickCountSimona} beer(s).</p>
                        <Link to="/">Back to To-Do-List</Link>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default NotFound;