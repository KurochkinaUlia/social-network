import React from 'react';
import cl from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return <div className={cl.dialogs + ' ' + cl.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogsItem;