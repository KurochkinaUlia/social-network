import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likeAccount: 15},
        {id: 2, message: 'It`s my first post', likeAccount: 20},
    ]
    let postsElements = posts.map (p => <Post message ={p.message} likeAccount ={p.likeAccount} /> );

    return (
        <div>

            <div className={cl.post}>
                <h4 className={cl.posts}>My posts</h4>
                <textarea> </textarea>
                <div>
                    <button className={cl.posted}> Add post</button>
                </div>
            </div>

            <div className={cl.post}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
