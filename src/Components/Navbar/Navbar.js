import React from 'react';
import './Navbar.css'
import{BsFillCartFill} from "react-icons/bs";
const Navbar = ({openModal, cart}) => {
    
    return (
        <div className='navbar'>
            <h1>Gun Shop</h1>
            <div className='cart-counter' onClick={openModal}>
                <span>{cart.length}</span>
                <BsFillCartFill className='icon'></BsFillCartFill>
            </div>
            
        </div>
    );
};

export default Navbar;