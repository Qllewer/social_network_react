import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://www.indiewire.com/wp-content/uploads/2017/08/it.jpg?w=600&h=337&crop=1'/>
            </div>
            <div className={s.descriptionBlock}>
                {/* ava + description */}
            </div>
        </div>
    )
}

export default ProfileInfo;