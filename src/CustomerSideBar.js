import React from 'react';
import { Link } from "react-router-dom";
import "./CustomerSideBar.css";

const CustomerSideBar = () => {
    return (
        <header>
            <div className="CustomerSideBar">
                <ul>
                    <p> Personal area</p>
                    <Link to="/CustomerPersonalDetails" className="link">Personal details</Link>
                    <Link to="/CustomerAssetsDetails" className="link">Personal assets details</Link>
                    <Link to="/CustomerContact" className="link">Contact customer service</Link>
                </ul>
            </div>
        </header>
    );
};
export default CustomerSideBar;