import React from 'react';
import s from "./PersonalInfo.module.css";
import Status from "./Status/Status";

const PersonalInfo = ({profile, status, updateStatus}) => {
    return (
        <div className={s.personalInfo}>
            <div className={s.nameAndStatus}>
                <p className={s.fullName}>{profile.fullName}</p>
                <Status status={status} updateStatus={updateStatus}/>
            </div>

            <div className={s.jobStatus}>
                <p className={s.isLookingForJob}>
                    {profile.lookingForAJob ? "Ищет работу" : "Не ищет работу"}
                </p>

                <p className={s.lookingForJobDescription}>{profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
};

export default PersonalInfo;