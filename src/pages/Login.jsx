import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./contact.css";

const Login = () => {
    const [inputs, setInputs] = useState({
        name: '',
        password: '',
    });
    const [show, setShow] = useState(false);
    const [home, setHome] = useState(true);
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    function handleChange(event) {
        // console.log(event.target.name + " " + event.target.value)
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (inputs.name === '') {
            alert("PLEASE ENTER YOUR USER NAME");
        }
        if (inputs.password === '') {
            alert("PLEASE ENTER YOUR PASSWORD");
        }
        if (inputs.name !== '' && inputs.password !== '') {
            setShow(true);
            // navigate("/");
            // window.scrollTo(0, 0);
        }
    }
    function final() {
        setHome(false);
        setNav(true);
        setTimeout(() => {
            navigate("/");
            window.scrollTo(0, 0);
        }, 1200);
        console.log("clicked");
    }
    return (
        <div className='contact-form login-form'>
            <div className={show ? "user-data show" : "user-data hide"}>{home ? <div className='user-details'><p>userame:{inputs.name}</p><p>password: {inputs.password}</p><button className='crossbtn' onClick={final}>OK</button></div> : <> <p className='home-msg'>TAKING YOU TO HOME PAGE!!</p><p className='load'><img src="./images/load.gif" alt="" /></p></>}</div>
            <h1 className='login-logo'>The Local Life</h1>
            <div className="form-login">
                <form className='w-80' style={{ border: "3px solid white" }}>
                    <h1 className='login-txt'>Login</h1>
                    <div className="login-info">
                        <div className="login-name">
                            <label htmlFor="name">USER NAME</label>
                            <input type="text" placeholder='Name' id="name" name="name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <div className="login-password">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" placeholder='Password' id="password" name="password" value={inputs.password} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="login-btn">
                        <button type="submit" className="btn btn-light" style={{ padding: "10px", fontSize: "2rem" }} onClick={handleSubmit}>Login</button> <h1 style={{ color: "white", marginTop: "10px" }}>Don't have an account?<Link to="/sign" style={{ color: "white" }}><h2>Signup</h2></Link><Link to="/" style={{ color: "white" }}><h2>Home</h2></Link></h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;