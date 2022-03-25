import React from 'react';
import './Card.css'
import{BsFillCartFill} from "react-icons/bs";

const Card = (props) => {
    // console.log(props);
    const{id, name, img, bullet, capacity, action, category, price}=props.gun
    const{handleAddToCart}=props
    
    
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='gun-info'>
                <h2>{name}</h2>
                <p>Bullet Type: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={()=>handleAddToCart(props.gun)}>
                    <BsFillCartFill className='icon'></BsFillCartFill>
                </button>
                <h3>$ {price}</h3>
            </div>
        </div>
    );
};

export default Card;