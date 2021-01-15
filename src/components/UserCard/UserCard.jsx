import React from 'react';
import s from './UserCard.module.css'
import userPhoto from '../../assets/images/user.png';
import Preloader from "../common/Preloader/Preloader";

const UserCard = (props) => {
    return (
        <div className={s.wrapper}>
        {
            props.isFetchingProfile ?
                <Preloader />
                :
                <>
                    <p className={s.name}>{props.profileData.fullName}</p>
                    <div className={s.avatarWrapper}>
                        <img className={s.avatar}
                             src={props.profileData.photos.small || userPhoto}
                             alt=""
                        />
                    </div>
                </>

        }
        </div>
    )
};

export default UserCard;