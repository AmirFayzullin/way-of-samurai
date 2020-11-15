import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state from './Redux/state';
import {dataManager, subscribe} from "./Redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dataManager={dataManager} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

subscribe(rerenderEntireTree);

rerenderEntireTree(state);