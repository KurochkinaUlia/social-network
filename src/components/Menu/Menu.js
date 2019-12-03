import React from 'react';
import cl from './Menu.module.css';
import {NavLink} from "react-router-dom";
import Friends from './../Friends/Friends'


const Menu = (props) => {

    console.log('Пропсы в Menu');
    console.log(props);

    return (

        <ul className={cl.menu}>
        <li><NavLink to="/Profile" activeClassName={cl.active}>Profile</NavLink></li>
        <li><NavLink to="/Dialogs" activeClassName={cl.active}>Messages</NavLink></li>
        <li><NavLink to="/News" activeClassName={cl.active}>News</NavLink></li>
        <li><NavLink to="/Music" activeClassName={cl.active}>Music</NavLink></li>
        <li><NavLink to="/Settings" activeClassName={cl.active}>Settings</NavLink></li>
        <li><NavLink to="/Friends" activeClassName={cl.active}><h3>Friends</h3></NavLink>

            <Friends state={props.state}   />
        </li>

        </ul>


    )
};
export default Menu;