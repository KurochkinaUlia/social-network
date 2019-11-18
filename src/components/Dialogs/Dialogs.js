import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return <div className={cl.dialog + ' ' + cl.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={cl.message}>{props.message}</div>
}
const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                <DialogItem name="Юля" id="1"/>
                <DialogItem name="Даша" id="2"/>
                <DialogItem name="Света" id="3"/>
                <DialogItem name="Таня" id="4"/>
                <DialogItem name="Соня" id="5"/>
                <DialogItem name="Маша" id="6"/>
            </div>

            <div className={cl.messages}>
                <Message message="Привет"/>
                <Message message="Пошли учить англ."/>
                <Message message="Ох ты!"/>
                <Message message="Ох ты!"/>
                <Message message="Ох ты!"/>
            </div>
        </div>
    )
}

export default Dialogs;