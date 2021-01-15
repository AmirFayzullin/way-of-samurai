import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import UserCardContainer from "../UserCard/UserCardContainer";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src={process.env.PUBLIC_URL + "logo.svg"}
                alt="logo"/>

            {
                props.isAuth ?
                    <UserCardContainer />
                    :
                    (<NavLink to='/login'>
                        login
                    </NavLink>)
            }
        </header>
    );
};

export default Header;