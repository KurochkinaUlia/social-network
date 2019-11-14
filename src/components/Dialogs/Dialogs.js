import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                <div className={cl.dialog + ' ' + cl.active}>
                    <NavLink to="/Dialogs/1">Юля</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/Dialogs/2">Маша</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/Dialogs/3">Света</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/Dialogs/4">Таня</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/Dialogs/5">Соня</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/Dialogs/6">Даша</NavLink>
                </div>

            </div>
            <div className={cl.messages}>
                <div className={cl.message}>Привет</div>
                <div className={cl.message}>Пошли учить англ.</div>
                <div className={cl.message}>Ох ты!</div>
            </div>
        </div>
    )
}

export default Dialogs;