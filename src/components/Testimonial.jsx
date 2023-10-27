import React from 'react';

const Testimonial = () => {
    return (
        <>
            <div className="section5">
                <div className="main-5">
                    <div className="title5">
                        <h1>Testimonials</h1>
                        <h6>WHY CUSTOMERS LOVE US</h6>
                    </div>
                    <div className="testimonies-container">
                        <div className="top">
                            <div className="test-child-5">
                                <img src="./images/Ellipse 1.png" className="sec5-img" alt="" />
                                <span>SYBIL</span>
                                <p>I can't say enough about the convenience and taste of The Local Life's products. From the moment I open the package, the aroma is incredible, and the freshness is unbeatable. It's like a little piece of the farm delivered to my door. I look forward to each order!</p>
                            </div>
                            <div className="test-child-5"><img src="./images/Ellipse 11.png" className="sec5-img" alt="" />
                                <span>VICTORIA</span>
                                <p>I'm blown away by the quality of the products from The Local Life. Every bite is a burst of freshness, and I can truly taste the difference. Knowing that I'm supporting local farmers while enjoying such amazing flavors is a win-win. My family and I are hooked!</p>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="test-child-5"><img src="./images/Ellipse 12.png" className="sec5-img" alt="" />
                                <span>EVA ELFIE</span>
                                <p>Wow! I ordered a variety of items, from vegetables to artisanal cheeses, and they all exceeded my expectations. The produce is so vibrant and full of flavor, and the cheeses are a real treat. It's like having a farmer's market at my doorstep. Highly recommended!</p>
                            </div>
                            <div className="test-child-5"><img src="./images/Ellipse 13.png" className="sec5-img" alt="" />
                                <span>JOHN DOE</span>
                                <p>As a chef, I'm extremely picky about the ingredients I use. The Local Life has become my go-to source for fresh, high-quality products. Their seasonal offerings inspire my menus, and the farm-to-table concept aligns perfectly with my values. Exceptional products and outstanding service!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;