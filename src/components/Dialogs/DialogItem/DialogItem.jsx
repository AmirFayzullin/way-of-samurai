import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.state.id}`} activeClassName={s.active}>
        <div className={`${s.dialog}`}>
            <div className={s.avatar}>
                <img src={props.state.avatarURL} alt=""/>
            </div>
            <p className={s.name}>{props.state.name}</p>
        </div>
        </NavLink>
    );
};


export default DialogItem;