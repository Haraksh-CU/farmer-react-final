import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cart } from '../components/cart';
import Cardcart from '../components/cartcard';
import "./shop.css";

const Cart = () => {
    const [cart1, setCart] = useState(cart);
    const [Total, setTotal] = useState(calculate());
    const navigate = useNavigate();
    function nav() {
        navigate("/shop");
        window.scrollTo(0, 0);
    }
    function calculate() {
        let t = 0;
        for (const [index, value] of cart1.entries()) {
            t += value.quantity * value.price;
        }
        return t;
    }

    console.log("total" + Total);
    return (
        <div className='shop'>
            <div className="shop-img-container"><img src="./images/shop.jpg" alt="shop-img" /></div>
            <h1 className='menu-header-txt'>Cart-Items</h1>
            <div className="card-container">
                <div className="card-main">
                    {cart1.length > 0 ? cart1.map((item) => <Cardcart product={item} key={item.id} setCart={setCart} setTotal={setTotal} calculate={calculate} />) : <div style={{ textAlign: "center", fontSize: "4rem", color: "#4a7163" }}>CART IS EMPTY!!</div>}
                </div>
                <div className="total">{cart1.length === 0 ? "" : "Total Bill: RS." + Total}</div>
            </div>
            <div className="checkout text-center my-5">{cart1.length > 0 ? <button className='btn btn-success px-5 py-4 mx-3' style={{ width: "20%", fontSize: "2.5rem" }} onClick={() => alert("YOUR ORDER HAS BEEN PLACED SUCCESSFULLY!!")}>Order Now</button> : <button className='btn btn-success px-5 py-4 mx-3' style={{ width: "20%", fontSize: "2.5rem" }} onClick={nav}>Shop Now</button>}</div>
        </div>
    );
};

export default Cart;