import React from 'react';
import './CustomerAssetsDetails.css';
import Header from "./header";
import CustomerSideBar from "./CustomerSideBar";

const properties = [
    {
        serialNumber: 1,
        address: "Haviv Street 1, Tel Aviv",
        district: "Center",
        owner: "The Cohen Family",
        responsibleTeam: "Property Team 1",
        treatmentPath: "active",
        estimatedCost: 12000,
        registrationDate: "2024-02-13"
    },
    {
        serialNumber: 2,
        address: "Haviv Street 1, Tel Aviv",
        district: "South",
        owner: "The Israel Family",
        responsibleTeam: "Property Team 5",
        treatmentPath: "active",
        estimatedCost: 10000,
        registrationDate: "2024-04-18"
    },
    {
        serialNumber: 3,
        address: "Haviv Street 1, Tel Aviv",
        district: "Low",
        owner: "The Levy Family",
        responsibleTeam: "Property Team 7",
        treatmentPath: "passive",
        estimatedCost: 15000,
        registrationDate: "2024-05-07"
    }
];

const CustomerAssetsDetails = () => {
    return (
        <div className="CustomerAssetsDetails" dir="rtl">
            <Header/>
            <CustomerSideBar/>
            <div className="table-container" dir="rtl">
            <h1>:Details of the Assets under our management</h1>
            <table>
                <thead>
                <tr>
                    <th>Serial number</th>
                    <th>Address</th>
                    <th>Province</th>
                    <th>Owner</th>
                    <th>Responsible team</th>
                    <th>Treatment route</th>
                    <th>Estimated cost</th>
                    <th>Registration date</th>
                </tr>
                </thead>
                <tbody>
                {properties.map((property, index) => (
                    <tr key={index}>
                        <td>{property.serialNumber}</td>
                        <td>{property.address}</td>
                        <td>{property.district}</td>
                        <td>{property.owner}</td>
                        <td>{property.responsibleTeam}</td>
                        <td>{property.treatmentPath}</td>
                        <td>{property.estimatedCost}</td>
                        <td>{property.registrationDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default CustomerAssetsDetails;
