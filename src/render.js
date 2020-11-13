import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {dataManager} from "./Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dataManager={dataManager} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};