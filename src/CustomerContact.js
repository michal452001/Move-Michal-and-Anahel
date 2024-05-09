import React, { useState } from 'react';
import './CustomerContact.css';
import Header from "./header";  // Ensure this matches the actual file name
import Footer from "./footer";  // Ensure this matches the actual file name
import CustomerSideBar from "./CustomerSideBar";

const CustomerContact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        requestCall: false,
        requestReport: false,
        file: null
    });
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const validateForm = () => {
        if (!formData.fullName || !formData.email.includes('@') || formData.phone.length > 13 || !formData.message) {
            alert('Please fill out the form correctly.');
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Implement what happens after successful validation
            console.log('Form data submitted:', formData);
            setSubmitSuccess(true);
            // Here you would typically handle the backend submission using fetch/axios
        }
    };

    return (
        <div className="customer-contact">
            <Header />
            <CustomerSideBar />
            <h1>Please fill the following form:</h1>
            <div className="form">
            <form onSubmit={handleSubmit}>
                <label>
                    Full name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Telephone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </label>
                <label>
                    Request for a phone call:
                    <input type="checkbox" name="requestCall" checked={formData.requestCall} onChange={handleChange} />
                </label>
                <label>
                    Request for a new financial report:
                    <input type="checkbox" name="requestReport" checked={formData.requestReport} onChange={handleChange} />
                </label>
                <label>
                    Upload a file:
                    <input type="file" name="file" onChange={handleChange} />
                </label>
                <button type="submit">Send</button>
            </form>
            </div>
            <div className="message">
            {submitSuccess && <p>The request has been sent successfully.</p>}
            </div>
            <Footer />
        </div>
    );
};

export default CustomerContact;
