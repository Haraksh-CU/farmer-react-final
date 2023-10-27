import React from 'react';

const Farm = () => {
    return (
        <>
            <div className="section6">
                <div className="main-6">
                    <h1 className="text6">Our Local Farms</h1>
                    <div className="farms">
                        <div className="top sub6">
                            <div className="farm"><img className="sec6-img" src="./images/sec6-1.png" alt="" /><span className="title6">SAN
                                ISIDRO, HAMPTON,
                                COUNTRY</span>
                                <p className="sec6-para">Nestled in Sonoma, Green Valley Farms offers exquisite wines and organic produce, a true taste of California's wine country.</p>
                            </div>
                            <div className="farm"><img className="sec6-img" src="./images/sec6-2.png" alt="" /><span
                                className="title6">CREEKSIDE, LOUVE,
                                COUNTRY</span>
                                <p className="sec6-para">Sunshine Acres in Austin is dedicated to sustainable farming, bringing you the freshest peaches and pasture-raised meats from Texas's vibrant heartland.</p>
                            </div>
                        </div>
                        <div className="bottom sub6">
                            <div className="farm"><img className="sec6-img" src="./images/sec6-3.png" alt="" /><span
                                className="title6">SEBAST, FRAUGH,
                                COUNTRY</span>
                                <p className="sec6-para">Nestled in Asheville's mountains, Mountain View Orchards is your destination for crisp, mountain-fresh apples that capture the essence of North Carolina.</p>
                            </div>
                            <div className="farm"><img className="sec6-img" src="./images/sec6-4.png" alt="" /><span
                                className="title6">ZEPHYR, HAMPTON,
                                COUNTRY</span>
                                <p className="sec6-para">Rolling Hills Dairy in Lancaster, Pennsylvania, combines tradition with sustainability to bring you the creamiest dairy products, a true taste of Lancaster County.</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn6"><button>SEE MORE</button></div>
                </div>
            </div>
        </>
    );
};

export default Farm;