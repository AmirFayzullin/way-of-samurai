import React from 'react';
import s from "./PersonalInfo.module.css";
import Status from "./Status/Status";

const PersonalInfo = (props) => {
    return (
        <div className={s.personalInfo}>
            <div className={s.nameAndStatus}>
                <p className={s.fullName}>{props.profile.fullName}</p>
                <Status status={props.profile.aboutMe || 'Hey, see my status'}/>
            </div>

            <div className={s.jobStatus}>
                <p className={s.isLookingForJob}>
                    {props.profile.lookingForAJob ? "Ищет работу" : "Не ищет работу"}
                </p>

                <p className={s.lookingForJobDescription}>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
};

export default PersonalInfo;