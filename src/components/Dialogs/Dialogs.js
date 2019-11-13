import React from 'react';
import cl from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                <div className={cl.dialog + ' ' + cl.active}>
                    Юля
                </div>
                <div className={cl.dialog}>
                    Маша
                </div>
                <div className={cl.dialog}>
                    Света
                </div>
                <div className={cl.dialog}>
                    Таня
                </div>
                <div className={cl.dialog}>
                    Соня
                </div>
                <div className={cl.dialog}>
                    Даша
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