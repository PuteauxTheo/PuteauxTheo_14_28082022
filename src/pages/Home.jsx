import { Link } from "react-router-dom"
import { useState } from "react"
import DatePicker from "../components/DatePicker"
import DropDownMenu from "../components/DropDownMenu"
import BasicModal from "../components/Modal"
import { states } from "../data/states";
import { departement } from "../data/departement"

export default function Home() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState()
    const [department, setDepartment] = useState('')


    const filterStates = (tab) => {

        const tabFilter = [];
        
    
        tab.map(el => (
            tabFilter.push(el.name)
        ))

        return tabFilter;
    }

    const statesName = filterStates(states)

    const saveEmployee = () => {
        const employees = localStorage.getItem("Employees")


        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: birthDate.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value
        };



    }
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
                    <input type="text" id="first-name" onChange={e => setFirstName(e.value)} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" onChange={e => setLastName(e.value)} />

                    <DatePicker titleDatePicker="Date of Birth" />

                    <DatePicker titleDatePicker="Start Date" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" onChange={e => setStreet(e.value)} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" onChange={e => setCity(e.value)} />

                        <DropDownMenu title="State" data={statesName} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" onChange={e => setZipCode(e.value)} />
                    </fieldset>

                    <DropDownMenu title="Departement" data={departement} />
                </form>

                <BasicModal />
            </div>
        </div>
    )
}
