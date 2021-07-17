import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import formControlsStyles from '../common/FormsControls/FormsControls.module.css';
import s from './Login.module.css';
import {getCaptchaUrl, getIsAuth} from "../../redux/authSelectors";

const LoginForm = (props) => {
    return (
        <form name={"login"} className={s.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"}
                       placeholder={"Email"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={"password"}
                       placeholder={"Password"}
                       type={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={"rememberMe"}
                       component={"input"}
                       type={"checkbox"}
                /> remember me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
            {props.captchaUrl && createField('', 'captcha', Input)}
            {
                props.error &&
                <div className={formControlsStyles.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);

    if (props.isAuth) return <Redirect to={'/profile'}/>;

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    );
};

const mstp = (state) => ({
    isAuth: getIsAuth(state),
    captchaUrl: getCaptchaUrl(state),
});

export default connect(mstp, {login})(Login);