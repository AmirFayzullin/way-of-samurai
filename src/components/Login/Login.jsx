import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";

const LoginForm = (props) => {
    return (
        <form name={"login"} onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"}
                       placeholder={"Login"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={"password"}
                       placeholder={"Password"}
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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

export default Login;