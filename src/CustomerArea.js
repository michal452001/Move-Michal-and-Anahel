import React from 'react';
import "./CustomerArea.css";
import Header from "./header";
import Footer from "./footer";
import CustomerSideBar from "./CustomerSideBar";
const CustomerArea = () => {
    return (
        <div className="backgroundd"> {/* Added a class to use for setting the background */}
            <Header/>
            <CustomerSideBar/>
            <div className="App"> {/* Corrected the class assignment to className */}
                <h2>Welcome to the personal area!</h2>
                <p>We are happy to see you again.<br />
                    In this area, you can view your personal information, your property information, and contact customer service.<br />
                    We are available for you at any time, and hope you are satisfied with the service.<br />
                </p>
            </div>
            <Footer/>
        </div>
    );
};
export default CustomerArea;
