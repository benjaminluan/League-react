import React from 'react';
import logo from '../assets/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png'

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <figure className="logo">
                    <img src={logo} alt="" className='leagueImg' />
                </figure>
                <ul className="nav__links">
                    <a href="">
                        <li className="nav__link">Home</li>
                    </a>
                    <a href="">
                        <li className="nav__link">Champions</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
