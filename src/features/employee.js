import { createSlice } from "@reduxjs/toolkit";
import { selectEmployee } from "../utils/selector";

const initialState = {
    statusEmployee : "void",
    employee : "void",
    error : null
}

// action



// reducer

const { actions, reducer } = createSlice({
    name: 'form',
    initialState,
    reducer : {

    }
});

// on export chaque action individuellement 
export { actions }

// on export le reducer comme default export 
export default reducer