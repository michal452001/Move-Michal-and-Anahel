import React from 'react';
import { Link } from "react-router-dom";
import "./ManagerSideBar.css";

const ManagerSideBar = () => {
    return (
        <header>
            <div className="CustomerSideBar">
                <ul>
                    <p> Manager Personal area</p>
                    <Link to="/ManagerAvailableInventoryreport" className="link">Inventory order</Link>
                    <Link to="/ManagerInventory order" className="link">Personal assets details</Link>
                    <Link to="/ManagerFinance" className="link">Finance</Link>
                    <Link to="/ManagerTasks" className="link">Tasks</Link>
                    <Link to="/ManagerPermissions" className="link">Permissions</Link>
                </ul>
            </div>
        </header>
    );
};
export default ManagerSideBar;