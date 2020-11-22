import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessengerContainer from "./Messenger/MessengerContainer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogs = store.getState().dialogsPage.dialogs;
                    return (
                        <Dialogs dialogs={dialogs}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;