import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { submitForm, unvalidForm, validForm} from "../features/employee.js"
import { employees } from "../data/data"
import DatePicker from "../components/DatePicker"
import DropDownMenu from "../components/DropDownMenu"
import { states } from "../data/states"
import { departmentData } from "../data/department"
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

export default function Home() {

    localStorage.setItem("Employees",employees)
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState(states[0].name)
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState(departmentData[0])

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    console.log("open ? "+open)
    const formatDate = (inputDate) => {
        let date, month, year;
      
        date = inputDate.getDate();
        month = inputDate.getMonth() + 1;
        year = inputDate.getFullYear();
      
          date = date
              .toString()
              .padStart(2, '0');
      
          month = month
              .toString()
              .padStart(2, '0');
      
        return `${date}/${month}/${year}`;
    }

    const filterStates = (tab) => {

        const tabFilter = [];
    
        tab.map(el => (
            tabFilter.push(el.name)
        ))

        return tabFilter;
    }

    const statesName = filterStates(states)

    const newEmployee = {
        
        'idEmployee': employees.length,
        'firstName': firstName.value,
        'lastName': lastName.value,
        'dateOfBirth': formatDate(birthDate),
        'startDate': formatDate(startDate),
        'department': department.value,
        'street': street.value,
        'city': city.value,
        'state': state.value,
        'zipCode': zipCode.value
    };

    const saveEmployee = async (e) => {
        //const employees = JSON.parse(localStorage.getItem("Employees"))
        console.log("Employee "+employees)
        e.preventDefault();
        // checkForm();

        // const submit = dispatch(submitForm(newEmployee))

        // if(submit){
        //     if(employees === null){
        //         localStorage.setItem("Employees", employees)
        //     }

        //     if(employees){
        //         employees.push(newEmployee)
        //         localStorage.setItem("Employees", JSON.stringify(employees))
        //     }
        // }

        setOpen(true)
    }


    const checkForm = () => {
        if((firstName === '') || (lastName === '')){
            dispatch(unvalidForm())
        }else{
            dispatch(validForm())
        }
    }

    const resetForm = () => {
        document.getElementById("form").reset()
    }

    const openModal = () => {
        setOpen(true)
    } 
    const closeModal = () => {
        setOpen(false)
    } 
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="employeeList">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee" onSubmit={saveEmployee}>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" onChange={e => setFirstName(e.target.value)} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" onChange={e => setLastName(e.target.value)} />

                    <DatePicker titleDatePicker="Date of Birth" setValue={setBirthDate} />

                    <DatePicker titleDatePicker="Start Date" setValue={setStartDate} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" onChange={e => setStreet(e.target.value)} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" onChange={e => setCity(e.target.value)} />

                        <DropDownMenu title="State" data={statesName} setValue={setState} value={state}/>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" onChange={e => setZipCode(e.target.value)} />
                    </fieldset>

                    <DropDownMenu title="Departement" data={departmentData} setValue={setDepartment} value={department}/>

                    <button onClick={saveEmployee} >Save</button>
                    
                </form>
            </div>
            <ReactModal
                isOpen={open}
                contentLabel="Employee Created!"
                onRequestClose={resetForm}>
                <div>Employee Created!</div>
                <button onClick={closeModal}>close</button>
            </ReactModal>
        </div>
    )
}
