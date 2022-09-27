import React from "react";
import ReactDOM from 'react-dom/client';
import './style/css/style.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from './pages/Home.jsx'
import Employee from "./pages/Employee";
import store from "./utils/store"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="employeeList" element={<Employee />}></Route>
                </Routes>
            </Router>
        </React.StrictMode>
    </Provider>
)