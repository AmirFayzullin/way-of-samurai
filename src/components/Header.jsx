import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={process.env.PUBLIC_URL + "logo.svg"}
                alt="logo"/>
        </header>
    );
};

export default Header;