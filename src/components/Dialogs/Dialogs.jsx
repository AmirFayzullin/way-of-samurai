import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessengerContainer from "./Messenger/MessengerContainer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem state={d}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <MessengerContainer store={props.store}/>
        </div>
    )
};

export default Dialogs;