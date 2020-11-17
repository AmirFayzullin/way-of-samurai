import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/state';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

store.setSubscriber(rerenderEntireTree);

rerenderEntireTree();