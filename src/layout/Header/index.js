import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header = () => {
    return (
        <div className={"whole-ting"}>
            <img className={"hand-image"} src={"https://wallpapercave.com/wp/wp4952454.jpg"}></img>
            <h1 className={"main-header"}>엔시티</h1>
            <nav>
                <NavLink exact to="/" activeClassName="current">Home</NavLink>
                <NavLink to="/about" activeClassName="current">About</NavLink>
                <NavLink to="/favourite" activeClassName="current">Favourites</NavLink>
                <NavLink to="/listen" activeClassName="current">Listen</NavLink>
                <NavLink to="/jokes" activeClassName="current">Jokes</NavLink>
            </nav>
        </div>
    );
}

export default Header;
