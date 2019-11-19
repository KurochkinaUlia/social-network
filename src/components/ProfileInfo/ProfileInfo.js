import React from 'react';
import cl from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={cl.profile}>

                <div>
                    <img className={cl.headpiece}
                         src='https://litobozrenie.com/wp-content/uploads/2017/01/Venetsiya1.jpg'/>
                </div>
                <div>
                    <img className={cl.nic}
                         src='https://24smi.org/public/media/news/2017/10/20/LDWOG0PdQGbO_sobaki-nauchilis-proiavliat-emotsii-dlia-obshcheni.jpg'/>
                </div>
                <div className={cl.ava}>
                    ava + description
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo;