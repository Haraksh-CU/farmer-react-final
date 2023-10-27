import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import { menu_item } from '../components/Shopitems';
import "./shop.css";

const Shop = () => {
    return (
        <div className='shop'>
            <div className="shop-img-container"><img src="./images/shop.jpg" alt="shop-img" /></div>
            <h1 className='menu-header-txt'>Menu-Items</h1>
            <div className="card-container">
                <div className="card-main">
                    {menu_item.map((item) => <Card product={item} key={item.id} />)}
                </div>
            </div>
            <Link to="/cart"><div className="checkout text-center my-5"><button className='btn btn-success px-5 py-4 mx-3' style={{ width: "20%", fontSize: "2.5rem" }}>Checkout</button></div></Link>
        </div>
    );
};

export default Shop;