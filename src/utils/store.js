import { configureStore } from "@reduxjs/toolkit"
import employeesReducer from "../features/employee"

export default configureStore({
    reducer: {
        employees : employeesReducer,
    }
})