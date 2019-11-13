import React from 'react';
import cl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={cl.profile}>
        <div className={cl.headpiece}>  </div>
        <div className={cl.nic}>  </div>
        <div className={cl.info}>  </div>
        <MyPosts/>
    </div>
};
export default Profile;