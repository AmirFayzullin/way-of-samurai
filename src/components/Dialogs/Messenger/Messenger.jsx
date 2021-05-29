import Message from "../Message/Message";
import s from "./Messenger.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

const NewMessageForm = (props) => {
    return (
        <form className={s.newMessage}
              name={'newMessage'}
              onSubmit={props.handleSubmit}
        >
            <Field className={s.newMessageTextarea}
                   name={'message'}
                   rows={1}
                   component={'textarea'}
            />
            <button className={s.newMessageSend}>
                Send
            </button>
        </form>
    )
};

const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm);

const Messenger = (props) => {
    let messagesElements = props.messages.map(d => <Message key={d.id} state={d}/>);

    let onSendMessage = (formData) => {
        props.sendMessage(formData.message);
        props.resetForm('newMessage');
    };

    return (
        <div className={s.messenger}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <NewMessageReduxForm onSubmit={onSendMessage}/>
        </div>
    )
};

export default Messenger;