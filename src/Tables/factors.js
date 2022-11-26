import React from "react";
import Table from 'react-bootstrap/Table';
import {factor} from '../AirData';
import '../App.css';

const factors = () => {
    const keys = Object.keys(factor);
    return (
        <div>
            <Table bordered id = "table1">
                <thead>
                    <tr>
                        <th>Flight Name</th>
                        <th>Departure Location</th>
                        <th>Wind Speed</th>
                        <th>Holidays</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        keys.map(data_key => (
                        <tr>
                          <td>{factor[data_key].name}</td>
                          <td>{factor[data_key].dest}</td>
                          <td>{factor[data_key].speed}</td>
                          <td>{factor[data_key].holidays}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default factors;