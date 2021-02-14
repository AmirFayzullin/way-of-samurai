import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const ProfileInfo = (props) => {
    if (!props.profile) return <Preloader />;

    return (
        <div className={s.wrapper}>
            <img src={props.profile.photos.large || userPhoto }
                 className={s.avatar}
                 alt="ava"
            />
            <PersonalInfo profile={props.profile}/>
        </div>
    );
};

export default ProfileInfo;