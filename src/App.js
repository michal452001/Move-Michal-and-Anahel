import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Qa from './qa';
import Login from './Login';
import CustomerArea from "./CustomerArea";
import CustomerContact from "./CustomerContact";
import CustomerAssetsDetails from "./CustomerAssetsDetails"
import Contact from "./Contact"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/qa" element={<Qa />} />
                <Route path="/CustomerArea" element={<CustomerArea />} />
                <Route path="/CustomerAssetsDetails" element={<CustomerAssetsDetails />} />
                <Route path="/CustomerContact" element={<CustomerContact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
