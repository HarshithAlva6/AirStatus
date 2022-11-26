import React from "react";
import Table from 'react-bootstrap/Table';
import {flight} from "../AirData";
import '../App.css';

const flights = () => {
    const keys = Object.keys(flight);
    return (
        <div>
            <Table bordered id = "table1">
                <thead>
                    <tr>
                        <th>Airline</th>
                        <th>On Time</th>
                        <th>Slight Delay</th>
                        <th>Moderate Delay</th>
                        <th>Large Delay</th>
                        <th>Cancellations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        keys.map(data_key => (
                        <tr>
                          <td>{flight[data_key].name}</td>
                          <td>{flight[data_key].onTime}</td>
                          <td>{flight[data_key].sDelay}</td>
                          <td>{flight[data_key].mDelay}</td>
                          <td>{flight[data_key].lDelay}</td>
                          <td>{flight[data_key].cancel}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default flights;