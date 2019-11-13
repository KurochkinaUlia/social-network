import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>

            <div className={cl.post}>
                My posts
                <textarea> </textarea>
                <button className={cl.posted}> Add post </button>
            </div>

            <div className={cl.post}>
                <Post message="Hi, how are you?" likeAccount="15"/>
                <Post message="It`s my first post" likeAccount="20"/>
            </div>
        </div>
    )
}

export default MyPosts;
