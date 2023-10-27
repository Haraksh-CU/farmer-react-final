import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/Context';
import "./card.css";
import { cart } from './cart';
const Card = (props) => {
    const [quantity, setQuantity] = useState(props.product.quantity);
    const { setLength } = useContext(AppContext);
    function decrement() {
        console.log("decre");
        if (quantity !== 1) {
            if (quantity === 2) {
                let f = checkcart(props.product, false);
                if (f.found === true) {
                    cart.splice(f.idx, 1);
                }
            }
            console.log("prev" + quantity)
            setQuantity(quantity - 1);
            console.log("after" + quantity)
        }
    }
    function increment() {
        console.log("incre");
        setQuantity(quantity + 1);
    }
    function checkcart(product, found) {
        let idx;
        for (const [index, value] of cart.entries()) {
            if (product.id === value.id) {
                value.quantity = product.quantity;
                idx = index;
                found = true;
                break;
            }
        }
        return { found, idx };
    }
    function Addtocart() {
        let f = checkcart(props.product, false)
        if (f.found === false && props.product.quantity > 0) {
            cart.push(props.product);
            console.log(cart);
        }
        setLength(cart.length);
        alert(props.product.name + " added to cart successfully!!");
    }
    props.product.quantity = quantity;
    return (
        <>
            <div className='card-item'>
                <div className="card-item-main">
                    <div className="product-img-container"><img src={props.product.img} alt={props.product.id + "-img"} /></div>
                    <div className="product-description">
                        <div className="product-description-main">
                            <h1>{props.product.name}</h1>
                            <p className='desc'>{props.product.description}</p>
                            <p className='price-p'>RS.{props.product.price}/kg <button className='quantity-btn' onClick={decrement}>-</button><span>{props.product.quantity}</span><button className='quantity-btn' onClick={increment}>+</button><button className='btn btn-warning p-3 mx-3' onClick={Addtocart}>Add to Cart</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;