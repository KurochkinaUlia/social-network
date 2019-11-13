import React from 'react';
import cl from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return <ul className={cl.menu}>
        <li><NavLink to="Profile" activeClassName={cl.active}>Profile</NavLink></li>
        <li><NavLink to="Messages" activeClassName={cl.active}>Messages</NavLink></li>
        <li><NavLink to="News" activeClassName={cl.active}>News</NavLink></li>
        <li><NavLink to="Music" activeClassName={cl.active}>Music</NavLink></li>
        <li><NavLink to="Settings" activeClassName={cl.active}>Settings</NavLink></li>
        </ul>
};

export default Menu;