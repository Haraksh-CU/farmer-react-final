import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer" id="contact">
                <div className="main-footer">
                    <div className="footer-child-container">
                        <div className="footer-child">
                            <h1 className="footer-logo">LOCAL<br />LIFE</h1>
                            <div className="icons">
                                <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><i className="fa-brands fa-square-facebook fa-4x icon" style={{ color: "#f5d1d0" }}></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-4x" style={{ color: "#f5d1d0" }}></i></a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-twitter fa-4x icon" style={{ color: "#f5d1d0" }}></i></a>
                            </div>
                        </div>
                        <div className="footer-child">
                            <h1 className="links-header">OUR SERVICES</h1><span className="links">What's New</span><span
                                className="links">How
                                to Order</span><span className="links">Payment Method</span><span className="links">Order
                                    Status</span><span className="links">Subscription</span>
                        </div>
                        <div className="footer-child">
                            <h1 className="links-header">OUR TEAM</h1><span className="links">Our Local Farms</span><span
                                className="links">Craftsmanhip</span><span className="links">Our Sources</span><span
                                    className="links">Sustainability</span>
                        </div>
                        <div className="footer-child">
                            <h1 className="links-header">LEGAL</h1><span className="links">Privacy Policy</span><span className="links">Our
                                Promise</span><span className="links">More Information</span>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright 2023 Haraksh Singh. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;