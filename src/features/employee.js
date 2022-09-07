import { createSlice } from "@reduxjs/toolkit";
import { selectEmployee } from "../utils/selector";

const initialState = {
    dataEmployee : null,
    isValidForm : false 
}

// action

export function submitForm() {
    return async (dispatch, getState) => {
        const dataEmployee = selectEmployee(getState()).dataEmployee
        dispatch(actions.submitForm(dataEmployee))
    }
}

// export function isCorrect() {
//     return async (dispatch, getState) => {

//     }
// }


export function unvalidForm() {
    return async (dispatch, getState) => {
        const isValidForm = selectEmployee(getState()).isValidForm

        if(isValidForm){
            dispatch(actions.unvalidForm())
        }
    }
}

export function validForm() {
    return async (dispatch, getState) => {
        const isValidForm = selectEmployee(getState()).isValidForm

        if(!isValidForm){
            dispatch(actions.validForm())
        }
    }
}

export function resetForm() {
    return async (dispatch) => {
        dispatch(actions.reset())
    }
}
// reducer

const { actions, reducer } = createSlice({
    name: 'form',
    initialState,
    reducer : {
        submit: (draft, action) => {
            draft.dataEmployee = action.payload            
        },
        unvalidForm: (draft, action) => {
            draft.dataEmployee = action.payload
            draft.isValidForm = false
        },
        validForm: (draft, action) => {
            draft.dataEmployee = action.payload
            draft.isValidForm = true
        },
        reset: () => {
            return initialState;
        }
    }
});

// on export chaque action individuellement 
export { actions }

// on export le reducer comme default export 
export default reducer