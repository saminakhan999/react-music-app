import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header = () => {
    return (
        <>
        <h1 className={"main-header"}>엔시티</h1>
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/listen" activeClassName="current">About</NavLink>
            <NavLink to="/jokes" activeClassName="current">Jokes</NavLink>
        </nav>
        </>
    );
}

export default Header;
