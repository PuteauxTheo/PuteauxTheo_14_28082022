import { createSlice } from "@reduxjs/toolkit";
import { selectEmployee } from "../utils/selector";

const initialState = {
    dataEmployee : null,
    isValidForm : false 
}

// action



// export function isFormCorrect() {
//     return async (dispatch, getState) => {
//         const isValidForm = selectEmployee(getState()).isValidForm
//         return isValidForm
//     }
// }


export function unvalidForm() {
    return async (dispatch) => {
        dispatch(actions.unvalidForm())
    }
}

export function validForm() {
    return async (dispatch) => {
        dispatch(actions.validForm())
    }
}

export function resetForm() {
    return async (dispatch) => {
        dispatch(actions.reset())
    }
}

export function submitForm(newEmployee) {
    return async (dispatch, getState) => {
        const isFormCorrect = selectEmployee(getState()).isValidForm
        console.log("isformCorrect ? "+isFormCorrect)
        if(isFormCorrect){
            dispatch(actions.submit(newEmployee))
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
            draft.dataEmployee = action.payload
            draft.isValidForm = false
            return
        },
        validForm: (draft, action) => {
            draft.dataEmployee = action.payload
            draft.isValidForm = true
            return
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