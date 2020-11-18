import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messenger from "./Messenger/Messenger";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem state={d}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <Messenger state={props.state.messenger}
                       dispatch={props.dispatch}
            />
        </div>
    )
};

export default Dialogs;