import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import UserCardContainer from "../UserCard/UserCardContainer";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    return (
        <header className={s.header}>
            <img
                src={process.env.PUBLIC_URL + "logo.svg"}
                alt="logo"/>

            {
                props.isAuth ?
                    <UserCardContainer />
                    :
                    (<NavLink className={s.loginButton} to='/login'>
                        login
                    </NavLink>)
            }
        </header>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
});

export default connect(mapStateToProps)(HeaderContainer);