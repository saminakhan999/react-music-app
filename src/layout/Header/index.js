import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Header = () => {
    return (
        <div className={"whole-ting"}>
            <img className={"hand-image"} src={"https://wallpapercave.com/wp/wp4952454.jpg"}></img>
            <h1 className={"main-header"}>엔시티</h1>
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/songs" activeClassName="active">Songs</NavLink>
                <NavLink to="/listen" activeClassName="active">Listen</NavLink>
                <NavLink to="/games" activeClassName="active">Games</NavLink>
            </nav>
        </div>
    );
}

export default Header;
