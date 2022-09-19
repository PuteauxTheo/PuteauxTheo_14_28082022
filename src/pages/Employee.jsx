import { Link } from "react-router-dom"
import DataTable from "data-table-plugin-react/DataTables/index.js"
import { exempleLabels } from "../data/data"
import { employees } from "../data/data"
export default function Employee() {
    return (
        <div>
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                <DataTable labels={exempleLabels} data={employees}/>
                <Link to="/" >Home</Link>
            </div>
        </div>
    )
}