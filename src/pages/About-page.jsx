import React from 'react';
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Aboutus = () => {
    return (
        <div className="about-us">
            <div className="about-container">
                <div className="about-title">
                    <h1>Local Bounty at Your Fingertips</h1>
                </div>
                <div className="about-main">
                    <div className="about-img">
                        <img src="./images/about.jpeg" alt="" className='w-100' />
                    </div>
                    <div className="about-content">
                        <div className="about-content-container">
                            <p>Imagine a world where every click on our website leads you to a treasure trove of local farm products. From vibrant veggies to artisanal cheeses, each item carries the essence of our community's passion for farming.</p>
                            <p>Unbox a world of freshness when your package arrives. Then, gather your loved ones around a table filled with these local delights, celebrating the goodness of our land.</p>
                            <p>At The Local Life, we're here to connect you with the heart of local agriculture. Join us in savoring the flavors of our community and building a sustainable future, one bite at a time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Aboutus;