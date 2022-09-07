import { createSlice } from "@reduxjs/toolkit";
import { selectEmployee } from "../utils/selector";

const initialState = {
    dataEmployee : null,
    isValidForm : false 
}

// action

export function submitForm() {
    return async (dispatch, getState) => {

    }
}

export function isCorrect() {
    return async (dispatch, getState) => {
        
    }
}


export function unvalideForm() {
    return async (dispatch, getState) => {

    }
}

export function validForm() {
    return async (dispatch, getState) => {

    }
}

export function resetForm() {
    return async (dispatch, getState) => {

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
    }
});

// on export chaque action individuellement 
export { actions }

// on export le reducer comme default export 
export default reducer