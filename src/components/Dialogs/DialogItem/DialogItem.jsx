import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
      <div className={`${s.dialog}`}>
          <div className={s.avatar}>
              <img src={props.state.avatarURL} alt=""/>
          </div>
          <NavLink to={`/dialogs/${props.state.id}`} activeClassName={s.active}>{props.state.name}</NavLink>
      </div>
  );
};


export default DialogItem;