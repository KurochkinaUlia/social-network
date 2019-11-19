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
    let dialogs = [
        {id: 1, name: 'Юля'},
        {id: 2, name: 'Даша'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Таня'},
        {id: 5, name: 'Соня'},
        {id: 6, name: 'Маша'},
    ]

    let message = [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Пошли учить английский?'},
        {id: 3, message: 'Пошли!'},
        {id: 4, message: 'Ох ты!'},
        {id: 5, message: 'Ох ты!!'},
        {id: 6, message: 'Ох ты!!!'},
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = message.map(m => <Message message={m.message} /> );



    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                { dialogsElements }
            </div>

            <div className={cl.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;