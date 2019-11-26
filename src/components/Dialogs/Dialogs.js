import React from 'react';
import cl from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem.js";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements = props.message.map(m => <Message message={m.message}/>);
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={cl.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;