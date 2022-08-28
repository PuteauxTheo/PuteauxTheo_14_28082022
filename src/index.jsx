import React from "react";
import ReactDOM from 'react-dom/client';
import './style/css/style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider >
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/"></Route>
                </Routes>
            </Router>
        </React.StrictMode>
    </Provider>
)