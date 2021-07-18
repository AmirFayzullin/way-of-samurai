import React from 'react';
import s from './ErrorMessage.module.css';
import {connect} from "react-redux";
import {getErrorMessage} from "../../redux/appSelectors";

const ErrorsDisplay = (props) => {
    if (!props.errorMessage) return null;

    return (
        <div className={s.wrapper}>
            {props.errorMessage}
        </div>
    )
};

const mstp = (state) => ({
    errorMessage: getErrorMessage(state),
});

export default connect(mstp)(ErrorsDisplay);