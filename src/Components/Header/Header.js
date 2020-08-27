import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const cart = props.cart;
    return (
        <div className="header-style">
            <h1 style={{color: 'white'}}><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn</h1>
            <nav class="navbar navbar-dark bg-dark" style={{backgroundColor: '#e3f2fd', width:'1000px',borderRadius: '10px',marginLeft:'200px'}}>
                <a class="nav-item nav-link active" href="#">Courses <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Payment</a>
                <a class="nav-item nav-link" href="#">About Us</a>
                <a class="nav-item nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</a>
                <a class="nav-item nav-link" href="#">Login/Signup</a>
                

            </nav>
        </div>

    );
};

export default Header;