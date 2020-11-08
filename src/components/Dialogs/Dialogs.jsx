import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={`${s.dialog}`}>
                    <NavLink to='/dialogs/id_1' activeClassName={s.active}>John</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/id_2' activeClassName={s.active}>Mary</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/id_3' activeClassName={s.active}>Sam</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi, bro</div>
                <div className={s.message}>How are you?</div>
            </div>
        </div>
    )
};

export default Dialogs;