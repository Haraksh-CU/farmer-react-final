import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    function nav() {
        navigate("/about");
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="section3" id="about">
                <div className="section3-child1">
                    <div className="main-3">
                        <div className="sec3-title"><span className="sec3-text1">SUPPORT OUR FARMERS</span>
                            <h1 className="sec3-text2">Shop Local:<br />Our Cause</h1>
                        </div>
                        <p>At The Local Life, our mission is clear: to provide you with high-quality, locally sourced produce while promoting sustainable and regenerative farming practices. We believe in the beauty of simplicity, where food is a connection to the land and a celebration of our community.
                        </p>
                        <button className="sec3-button" onClick={nav}>OUR PROMISE</button>

                    </div>
                </div>
                <div className="section3-child2">
                    <img src="./images/sec3.png" alt="" />
                </div>
            </div>
        </>
    );
};

export default About;