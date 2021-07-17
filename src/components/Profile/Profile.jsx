import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';

const Profile = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {
    return (
        <div className={s.wrapper}>
            <ProfileInfo isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;