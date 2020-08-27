import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const totalPrice = cart.reduce((total,course) => total + course.price,0);
    return (
        <div>
            <h1 className="header">Cart Section</h1>
            <br/>
            <div className="cart-section">
                <h3>Total Courses: {cart.length}</h3>
                <br/>
                <h3>Total Price: ${formatNumber(totalPrice)}</h3>
                <br/>
                <button className="btn btn-primary">Check out</button>
            </div>
            <div className="cart-section">
                <h2>Added Courses</h2>
                <br/>
                <ul>{cart.map(item => <li>{item.name}</li>)}</ul>
            </div>
        </div>
    );
};

export default Cart;