import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/Context';
import "./card.css";
import { cart } from './cart';
const Cardcart = (props) => {
    const [quantity, setQuantity] = useState(props.product.quantity);
    const { setLength } = useContext(AppContext);
    function decrement() {
        console.log("decre");
        if (quantity !== 1) {
            console.log("prev" + quantity)
            setQuantity(quantity - 1);
            console.log("after" + quantity)
        }
    }
    function increment() {
        console.log("incre");
        setQuantity(quantity + 1);
    }
    const handleRemove = () => {
        let f = checkcart(props.product, false);
        if (f.found === true) {
            cart.splice(f.idx, 1);
        }
        props.setTotal(props.calculate());
        props.setCart(cart);
        setLength(cart.length);

    };
    props.setTotal(props.calculate());
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
                            <p className='price-p' style={{ position: "relative" }}>RS.{props.product.price}/kg <button className='quantity-btn' onClick={decrement}>-</button><span>{props.product.quantity}</span><button className='quantity-btn' onClick={increment}>+</button><p className='mx-5' style={{ textAlign: "center", fontSize: "2rem" }}>Total:{props.product.quantity * props.product.price}</p><button className='btn btn-danger p-3 mx-3 remove' onClick={handleRemove}>remove</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cardcart;