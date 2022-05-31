import React from 'react';
import { Link } from 'react-router-dom';

const LandingBackground = () => {
    return (
        <div className="landing__background">
             <Link to="/Renata">
            <button className="champion__info--btn cursor">View Champion</button>
            </Link>
        </div>
    );
}

export default LandingBackground;
