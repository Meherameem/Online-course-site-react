import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    const totalPrice = cart.reduce((total,course) => total + course.price,0);
    return (
        <div>
            <h1 className="header">Cart Section</h1>
            <div className="cart-section">
                <h3>Total Courses: {cart.length}</h3>
                <h3>Total Price: ${totalPrice}</h3>
            </div>
        </div>
    );
};

export default Cart;