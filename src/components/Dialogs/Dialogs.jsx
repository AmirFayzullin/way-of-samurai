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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='John' id='id_1'/>
                <DialogItem name='Mary' id='id_2'/>
                <DialogItem name='Sam' id='id_3'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hi, bro'/>
                <Message message='How are you?'/>
            </div>
        </div>
    )
};

export default Dialogs;