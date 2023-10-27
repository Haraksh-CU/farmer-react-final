import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();
    function nav() {
        navigate("/shop");
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="section4">
                <div className="sec4-child">
                    <div className="sec4-child1"><img src="./images/sec4-1.png" className="sec4-img" alt="" /></div>
                    <div className="sec4-child2 content">
                        <div className="sec4-main">
                            <h1 className="sec4-heading">Newly<br />Harvest</h1>
                            <p className="sec4-para">Explore the freshness of our newly harvested products. From crisp veggies to succulent meats, each item is handpicked and bursting with flavor.</p>
                            <button className="sec4-btn" onClick={nav}>OUR PRODUCTS</button>
                        </div>
                    </div>
                </div>
                <div className="sec4-child" id="shop">
                    <div className="sec4-child1 content">
                        <div className="sec4-main">
                            <h1 className="sec4-heading">Fresh Daily<br />Products</h1>
                            <p className="sec4-para">Experience the delight of daily freshness with our products. From farm to your table, we deliver a daily dose of vibrant flavors and wholesome goodness.</p>
                            <button className="sec4-btn" onClick={nav}>SHOP TODAY</button>
                        </div>
                    </div>
                    <div className="sec4-child2"><img src="./images/sec4-2.png" className="sec4-img" alt="" /></div>
                </div>
            </div>
        </>
    );
};

export default Shop;