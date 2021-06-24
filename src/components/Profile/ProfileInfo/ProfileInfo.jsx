import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) return <Preloader />;

    return (
        <div className={s.wrapper}>
            <img src={profile.photos.large || userPhoto }
                 className={s.avatar}
                 alt="ava"
            />
            <PersonalInfo profile={profile} status={status} updateStatus={updateStatus}/>
        </div>
    );
};

export default ProfileInfo;