import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {
    if (!profile) return <Preloader />;

    const onAvatarChanged = (e) => {
        if(!e.target.files.length) return;
        savePhoto(e.target.files[0]);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.avatarWrapper}>
                <img src={profile.photos.large || userPhoto }
                     className={s.avatar}
                     alt="ava"
                />
                { isOwner && <input type="file" onChange={onAvatarChanged}/> }
            </div>
            <PersonalInfo saveProfile={saveProfile}
                          isOwner={isOwner}
                          profile={profile}
                          status={status}
                          updateStatus={updateStatus}
            />
        </div>
    );
};

export default ProfileInfo;