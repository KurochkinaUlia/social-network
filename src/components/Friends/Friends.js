import React from 'react';

import cl from './Friends.css';
import FriendsInfo from "./FriendsInfo/FriendsInfo";



const Friends = (props) => {

    console.log('Пропсы в Friends');
    console.log(props);


    const friend = props.state.friends.map((el) => {
         return (<div style={{margin: '5px', border: '1px solid #000'}}>
             {el.name}
         </div>)
     } )





    return (
        <div className="friends">
            {friend}
        </div>
    )
}

export default Friends;