import React from "react";
import Table from 'react-bootstrap/Table';
import {month} from '../AirData';
import '../App.css';

const months = () => {
    const keys = Object.keys(month);
    return (
        <div>
            <Table bordered id = "table1">
                <thead>
                    <tr>
                        <th>Month</th>
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
                          <td>{month[data_key].month}</td>
                          <td>{month[data_key].onTime}</td>
                          <td>{month[data_key].sDelay}</td>
                          <td>{month[data_key].mDelay}</td>
                          <td>{month[data_key].lDelay}</td>
                          <td>{month[data_key].cancel}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default months;