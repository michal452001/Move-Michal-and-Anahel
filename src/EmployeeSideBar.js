import React from 'react';
import { Link } from "react-router-dom";
import "./EmployeeSideBar.css";

const EmployeeSideBar = () => {
    return (
        <header>
            <div className="CustomerSideBar">
                <ul>
                    <p> Employee Personal area</p>
                    <Link to="/EmployeePersonalDetails" className="link">Personal details</Link>
                    <Link to="/EmployeeInventory" className="link">Inventory</Link>
                    <Link to="/EmployeeCalendar" className="link">Calendar</Link>
                </ul>
            </div>
        </header>
    );
};
export default EmployeeSideBar;