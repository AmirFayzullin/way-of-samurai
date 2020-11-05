import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <img
                src={process.env.PUBLIC_URL + "logo.svg"}
                alt="logo"/>
        </header>
    );
};

export default Header;