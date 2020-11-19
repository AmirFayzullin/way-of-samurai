import Message from "../Message/Message";
import s from "./Messenger.module.css";
import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";

const Messenger = (props) => {
    let messagesElements = props.state.messages.map(d => <Message state={d}/>);
    let newMessageText = props.state.newMessageText;

    let onSendMessage = () => {
        props.dispatch(sendMessageCreator());
    };

    let onChangeNewMessage = (e) => {
        let action = updateNewMessageTextCreator(e.target.value);
        props.dispatch(action);
    };

    return (
        <div className={s.messenger}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <textarea rows={1}
                          className={s.newMessageTextarea}
                          value={newMessageText}
                          onChange={onChangeNewMessage}
                />

                <button className={s.newMessageSend}
                        onClick={onSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    )
};

export default Messenger;