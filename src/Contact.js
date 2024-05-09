import React, { useState } from 'react';
import "./Contact.css";
import Header from "./header";
import Footer from "./footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to handle the form submission, like sending data to a server
        console.log('Form data:', formData);
        alert('Your message has been sent!');
    };

    return (
        <div className="Contact-background">
            <Header />
            <div className="App">
                <h2>How can you contact us?</h2>
                <p>We will be happy to provide a service for you, in the way you choose. <br />
                    You can send us an email: help@move.co.il<br />
                    You can call us: 03-7461940<br />
                    You can send us a message on our social networks accounts: Instagram, Facebook and Twitter - "Move" <br />
                    Or alternatively, fill in your details in the following form and we will contact you:<br />
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>
                        Full name:
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
