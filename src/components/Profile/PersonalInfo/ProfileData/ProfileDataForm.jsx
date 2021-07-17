import React from 'react';
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "./ProfileData.module.css";
import formControlsStyles from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form name={'profile-data'} onSubmit={handleSubmit}>
            <button>save</button>
            {
                error &&
                    <div className={formControlsStyles.formSummaryError}>
                        {error}
                    </div>
            }
            <div>
                <b>Full name: </b> {createField('Full name', 'fullName', 'input', [], Input)}
            </div>
            <div>
                <b>About me: </b> {createField('About me', 'aboutMe', '', [], Textarea)}
            </div>
            <div>
                <b>Looking for a job: </b> {createField('', 'lookingForAJob', 'checkbox', [], Input)}
            </div>
            <div>
                <b>Skills: </b> {createField('Skills', 'LookingForAJobDescription', '', [], Textarea)}
            </div>
            <b>Contacts: </b>
            {
                Object.keys(profile.contacts).map(key => {
                    return (
                        <div className={s.contact} key={key}>
                            <b>{key}:</b> {createField(key, `contacts.${key}`, 'input', [], Input)}
                        </div>
                    )
                })
            }
        </form>
    )
};

export default reduxForm({form: 'profile-data'})(ProfileDataForm);