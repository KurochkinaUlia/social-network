import React from 'react';

import cl from './Friends.module.css'


const Friends = (props) => {

    console.log('Пропсы в Friends');
    console.log(props);

    const friend = props.state.friends.map((el) => {
        return (
            <div className={cl.items}>
                <img className={cl.nicImg} src={el.src} />
                <div className={cl.item} >{el.name}</div>
            </div>)
    })

    return (
        <div className={cl.friends}>
            {friend}
        </div>
    )
}

export default Friends;