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
    let dialogsData = [
        {id: 1, name: 'Юля'},
        {id: 2, name: 'Даша'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Таня'},
        {id: 5, name: 'Соня'},
        {id: 6, name: 'Маша'},
    ]

    let messageData = [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Пошли учить английский?'},
        {id: 3, message: 'Пошли!'},
        {id: 4, message: 'Ох ты!'},
        {id: 5, message: 'Ох ты!!'},
        {id: 6, message: 'Ох ты!!!'},
    ]
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>

            <div className={cl.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
            </div>
        </div>
    )
}

export default Dialogs;