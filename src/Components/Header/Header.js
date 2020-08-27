import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <h1 className="header-style">Learn</h1>
            <nav class="navbar navbar-dark bg-dark navbar-style" style={{backgroundColor: '#e3f2fd'}}>
                <a class="nav-item nav-link active" href="#">Courses <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Payment</a>
                <a class="nav-item nav-link" href="#">About Us</a>
                <a class="nav-item nav-link" href="#">Login/Signup</a>
            </nav>
        </div>

    );
};

export default Header;