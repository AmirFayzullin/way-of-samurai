import React, {useState} from 'react';
import s from "./PersonalInfo.module.css";
import Status from "./Status/Status";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";

const PersonalInfo = ({profile, status, updateStatus, isOwner, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    const onSubmitProfile = async (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div className={s.personalInfo}>
            <div className={s.nameAndStatus}>
                <div className={s.fullName}>{profile.fullName}</div>
                <Status status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            </div>
            {
                editMode ?
                    <ProfileDataForm initialValues={profile} onSubmit={onSubmitProfile} profile={profile}/>
                    :
                    <ProfileData isOwner={isOwner} setEditMode={() => setEditMode(true)} profile={profile}/>
            }
        </div>
    )
};

export default PersonalInfo;