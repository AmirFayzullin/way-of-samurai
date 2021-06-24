import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessengerContainer from "./Messenger/MessengerContainer";
import {getDialogs} from "../../redux/dialogsSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import withAuthRedirect from "../common/RedirectToLogin/RedirectToLogin";

const DialogsContainer = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} state={d}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <MessengerContainer />
        </div>
    )
};

const mstp = (state) => ({
    dialogs: getDialogs(state),
});

export default compose(
    connect(mstp),
    withAuthRedirect
)(DialogsContainer);