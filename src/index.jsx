import React from "react";
import ReactDOM from 'react-dom/client';
import './style/css/style.css'
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Home from './pages/Home.jsx'
import Employee from "./pages/Employee";
import store from "./utils/store"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <HashRouter>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="employeeList" element={<Employee />}></Route>
                    </Routes>
                </Router>
            </HashRouter>
        </React.StrictMode>
    </Provider>
)