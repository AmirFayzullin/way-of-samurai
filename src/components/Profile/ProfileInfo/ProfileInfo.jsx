import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = (props) => {
    if (!props.profile) return <Preloader />;

    return (
        <div>
            <div className={s.wrapper}>
                <img src={props.profile.photos.large || userPhoto }
                     className={s.avatar}
                     alt="ava"
                />

                <div className={s.personalInfo}>
                    <div className={s.nameAndStatus}>
                        <p className={s.fullName}>{props.profile.fullName}</p>
                        <p className={s.status}>{props.profile.aboutMe}</p>
                    </div>

                    <div className={s.jobStatus}>
                        <p className={s.isLookingForJob}>
                            {props.profile.lookingForAJob ? "Ищет работу" : "Не ищет работу"}
                        </p>

                        <p className={s.lookingForJobDescription}>{props.profile.lookingForAJobDescription}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;