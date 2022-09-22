import React from 'react';
import { Link } from "react-router-dom"
import DataTable from "data-table-react-plugin"
import { exempleLabels } from "../data/data"

export default function Employee() {

    const employees = JSON.parse(localStorage.getItem("Employees"))

    return (
        <div className='employee'>
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                {
                    employees ?  <DataTable labels={exempleLabels} data={employees}/> : <span>You need to create Employee to see the table</span>
                }
                
                <Link to="/" >
                    <div className="link-employeeList">
                        <p className="employee-button">Home</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}