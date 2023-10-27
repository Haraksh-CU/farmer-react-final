import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./contact.css";


const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        if (name === '') {
            alert("PLEASE ENTER YOUR FULL NAME");
        }
        if (email === '') {
            alert("PLEASE ENTER YOUR EMAIL");
        }
        if (subject === '') {
            alert("PLEASE ENTER THE SUBJECT YOU WANT TO TALK ABOUT");
        }
        if (message === '') {
            alert("PLEASE ENTER YOUR MESSAGE");
        }
        if (name !== '' && message !== '' && subject !== '' && email !== '') {
            alert("YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY!!");
            navigate("/");
            window.scrollTo(0, 0);
        }
    }

    return (
        <div className='contact-form'>
            <div className="contact-container">
                <div className="contact-details">
                    <div className="details-container">
                        <h1>Let's get in touch</h1>
                        <p>We're open for any suggestion or just to have a chat</p>
                        <div className="contact-info-container">
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-location-dot fa-3x" style={{ color: "rgb(76 167 125);" }}></i>
                                </div>
                                <div className="contact-content">
                                    Address: 198 West 21th Street, Suite 721 New York NY 10016
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-phone fa-3x" style={{ color: "rgb(76 167 125);" }}></i>
                                </div>
                                <div className="contact-content">
                                    Phone: +1235 2355 98
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <i className="fa-regular fa-envelope fa-3x" style={{ color: "rgb(76 167 125);" }}></i>
                                </div>
                                <div className="contact-content">
                                    Email: info@yoursite.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <form className='w-80'>
                        <h1>Get in touch</h1>
                        <div className="user-info">
                            <div className="name">
                                <label htmlFor="name">FULL NAME</label>
                                <input type="text" placeholder='Name' id="name" ref={nameRef} />
                            </div>
                            <div className="mail">
                                <label htmlFor="mail">EMAIL ADDRESS</label>
                                <input type="email" placeholder='Email' id="mail" ref={emailRef} />
                            </div>
                        </div>
                        <div className="subject">
                            <label htmlFor="subject">SUBJECT</label>
                            <input type="text" placeholder='Subject' id="subject" ref={subjectRef} />
                        </div>
                        <div className="message">
                            <label htmlFor="message">MESSAGE</label>
                            <input type="text" placeholder='Message' id="message" ref={messageRef} />
                        </div>
                        <button type="submit" className="btn btn-success" style={{ padding: "10px", fontSize: "2rem" }} onClick={handleSubmit}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
