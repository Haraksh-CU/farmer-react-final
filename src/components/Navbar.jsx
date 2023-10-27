import React, { useEffect, useState } from 'react';
import Links from './Links';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/Context';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])
    const { len } = useContext(AppContext);
    return (
        <>
            <div className="navbar-container">
                <div className="main-1">
                    <div className="logo-menu">
                        <div className="logo">
                            <img id="logo-img" src="./images/logo.png" alt="" />
                        </div>
                        <div className="menu" id="menu-container">
                            {screenSize.width < 830 ? "" : <Links setToggle={setToggle} toggle={toggle} />}
                        </div>
                    </div>
                    <div className="nav-icons" id="icon-container">
                        <div id='icon-container-2'>{screenSize.width < 830 ? toggle ? <i className="fa-solid fa-xmark fa-5x" style={{ color: "#237262" }} onClick={() => setToggle(!toggle)}></i> : <i className="fa-solid fa-bars fa-5x" style={{ color: "#237262" }} onClick={() => setToggle(!toggle)}></i> : ""}</div>
                        <i className="fa-solid fa-magnifying-glass fa-3x i" style={{ color: "#237262" }}></i>
                        <Link to="/cart"><div className="cart"><i className="fa-solid fa-cart-shopping fa-3x i" style={{ color: "#237262" }}></i><div className="cart-dot">{len}</div></div></Link>
                    </div>
                </div>
            </div>
            <div id="mobile-view" style={toggle ? { opacity: 1 } : { opacity: 0 }}>
                {screenSize.width < 830 && toggle ? <Links setToggle={setToggle} toggle={toggle} /> : ""}
            </div>
        </>
    );
};

export default Navbar;
