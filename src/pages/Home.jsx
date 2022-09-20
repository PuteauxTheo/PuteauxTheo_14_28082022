import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { submitForm, unvalidForm, validForm} from "../features/employee.js"
import DatePicker from "../components/DatePicker"
import DropDownMenu from "../components/DropDownMenu"
import { states } from "../data/states"
import { departmentData } from "../data/department"
import ReactModal from "react-modal";
import logoHRnet from '../assets/logoHRnet.jpeg';

ReactModal.setAppElement('#root');

export default function Home() {

    
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
        'firstName': firstName,
        'lastName': lastName,
        'dateOfBirth': formatDate(birthDate),
        'startDate': formatDate(startDate),
        'department': department,
        'street': street,
        'city': city,
        'state': state,
        'zipCode': zipCode
    };

    const saveEmployee = async (e) => {
        e.preventDefault();
        checkForm();

        const submit = await dispatch(submitForm(newEmployee))

        if(submit){

            if(localStorage.getItem("Employees") === null){
                console.log(" Je suis pas ici ")
                localStorage.setItem("Employees", JSON.stringify([]) )
            }

            const employeesData = JSON.parse(localStorage.getItem("Employees"))
            employeesData.push(newEmployee)
            localStorage.setItem("Employees", JSON.stringify(employeesData))
            
            
        }else{
            return false
        }

        setOpen(true)
    }


    const checkForm = () => {
        if((firstName === '') || (lastName === '')){
            console.log("Invalid field ")
            dispatch(unvalidForm())
        }else{
            dispatch(validForm())
        }
    }

    const closeModal = () => {
        document.getElementById("create-employee").reset()
        setOpen(false)
    } 
    return (
        <div className="home">
            <div className="title">
                <h1>HR NET</h1>
                <div className="logo-header">
                    <img src={logoHRnet} alt="" />
                </div>
            </div>
            <div className="container">
                <Link to="employeeList">
                    <div className="link-employeeList">
                        <p className="employee-button">View Current Employees</p>
                    </div>
                </Link>
                <h2 className="title-form">Create Employee</h2>
                <form action="#" id="create-employee" onSubmit={saveEmployee}>
                    
                    <div className="input-employee-form">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" onChange={e => setFirstName(e.target.value)} />
                    </div>

                    <div className="input-employee-form">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" onChange={e => setLastName(e.target.value)} />
                    </div>

                    <DatePicker titleDatePicker="Date of Birth" setValue={setBirthDate} />

                    <DatePicker titleDatePicker="Start Date" setValue={setStartDate} />

                    <fieldset className="address">
                        <legend className="legend">Address</legend>

                        <div className="input-employee-form">
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" onChange={e => setStreet(e.target.value)} />
                        </div>

                        <div className="input-employee-form">
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" onChange={e => setCity(e.target.value)} />
                        </div>

                        <DropDownMenu title="State" data={statesName} setValue={setState} value={state} colorInput="white"/>

                        <div className="input-employee-form">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input className="last" id="zip-code" type="number" onChange={e => setZipCode(e.target.value)} />
                        </div>
                    </fieldset>

                    <DropDownMenu title="Departement" data={departmentData} setValue={setDepartment} value={department} colorInput="black"/>

                    <div className="button-save">
                        <button onClick={saveEmployee} >Save</button>
                    </div>
                    
                    
                </form>
            </div>
            <ReactModal
                isOpen={open}
                contentLabel="Employee Created !"
                onRequestClose={closeModal}>
                <div>Employee Created!</div>
                <button onClick={closeModal}>close</button>
            </ReactModal>
        </div>
    )
}
