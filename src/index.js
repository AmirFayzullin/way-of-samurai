import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './redux/reduxStore';
import {Provider} from "react-redux";
import {FAKEAC} from "./redux/appReducer";

setInterval(() => {
    store.dispatch(FAKEAC());
}, 1000);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
document.getElementById('root'));