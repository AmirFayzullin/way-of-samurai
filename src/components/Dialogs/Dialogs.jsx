import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
      <div className={`${s.dialog}`}>
          <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
      </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
};

const Dialogs = () => {

    let dialogs = [
        {id: 'id_1', name: 'John'},
        {id: 'id_2', name: 'Mary'},
        {id: 'id_3', name: 'Sam'},
    ];
    let messages = [
        {message: 'Hi!'},
        {message: 'Hi, bro!'},
        {message: 'How are you?'},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(d => <Message message={d.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;