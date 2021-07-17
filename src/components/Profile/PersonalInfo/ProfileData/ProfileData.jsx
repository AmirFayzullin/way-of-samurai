import s from "./ProfileData.module.css";
import React from "react";
import Contacts from "../Contacts/Contacts";

const ProfileData = ({profile, setEditMode, isOwner}) => {
    return (
        <div>
            {isOwner && <button onClick={setEditMode}>edit</button>}
            <div className={s.profileDataItem}>
                <b>Full name: </b>{profile.fullName}
            </div>
            <div className={s.profileDataItem}>
                <b>About me: </b> {profile.aboutMe}
            </div>
            <div className={s.profileDataItem}>
                <b>Looking for a job: </b>{profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b className={s.profileDataItem}>Skills: </b> {profile.lookingForAJobDescription}
                </div>
            }
            <Contacts contacts={profile.contacts}/>
        </div>
    )
};

export default ProfileData;