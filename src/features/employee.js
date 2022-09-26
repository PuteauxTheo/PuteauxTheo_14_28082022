import { createSlice } from "@reduxjs/toolkit";
import { selectEmployees } from "../utils/selector";

const initialState = {
    dataEmployee : [],
    isValidForm : false 
}

// action

export function unvalidForm() {
    return (dispatch) => {
        dispatch(actions.unvalidForm())
    }
}

export function validForm() {
    return (dispatch) => {
        dispatch(actions.validForm())
    }
}

export function checkValidForm() {
    return (dispatch, getState) => {
        const validForm = selectEmployees(getState()).isValidForm
        return validForm
    }
}

export function submitForm(newEmployee) {
    return async (dispatch, getState) => {
        const isFormCorrect = selectEmployees(getState()).isValidForm
        const getEmployees = selectEmployees(getState()).dataEmployee
        if(isFormCorrect){
            dispatch(actions.submit(newEmployee))
            dispatch(actions.addEmployee(getEmployees, newEmployee))
            return true
        }else{
            return false
        }
        
    }
}
// reducer

const { actions, reducer } = createSlice({
    name: 'form',
    initialState,
    reducers : {
        submit: (draft, action) => {
            draft.dataEmployee = action.payload
            return         
        },
        unvalidForm: (draft, action) => {
            draft.isValidForm = false
            return
        },
        validForm: (draft, action) => {
            draft.isValidForm = true
            return
        },
        addEmployee: {
            prepare: (data, newEmployee) => ({ payload: { data, newEmployee } }),
            reducer: (draft, action) => {
                draft.dataEmployee = [ ...action.payload.data, action.payload.newEmployee]
            }        
        },
    }
});

// on export chaque action individuellement 
export { actions }

// on export le reducer comme default export 
export default reducer