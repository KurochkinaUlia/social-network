import React from 'react';
import cl from './Post.module.css';


const Post = (props) => {
    return (
        <div className={cl.post}>
            <div className={cl.nic}><img
                src='https://avatars.mds.yandex.net/get-pdb/1945646/10d9e642-4b9c-4cdc-9c8e-d4f82dc3ebe6/s1200'/>
                {props.message}
                <div>
                    <span> like </span>
                    {props.likeAccount}
                </div>
            </div>
        </div>
    )
};
export default Post;