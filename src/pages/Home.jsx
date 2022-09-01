import { Link } from "react-router-dom"
import DatePicker from "../components/DatePicker"
import DropDownMenu from "../components/DropDownMenu"
import BasicModal from "../components/Modal"

export default function Home() {
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="employeeList">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <DatePicker titleDatePicker="Date of Birth"/>
                    {/* <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" /> */}

                    <DatePicker titleDatePicker="Start Date"/>
                    {/* <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" /> */}

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <DropDownMenu title="State"/>
                        {/* <label htmlFor="state">State</label>
                        <select name="state" id="state"></select> */}

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <DropDownMenu title="Departement"/>
                    {/* <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select> */}
                </form>

                <BasicModal/>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    )
}