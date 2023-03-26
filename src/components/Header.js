import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-container">
            {/* <h1>huu</h1> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <button className="header-button" >
                <Link to="/appointments">Book an Appointment</Link></button>
            {/* Book an Appointment</button> */}
        </header>
    );
}

export default Header;
