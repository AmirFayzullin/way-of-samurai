import Message from "../Message/Message";
import s from "./Messenger.module.css";
import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";

const Messenger = (props) => {
    let messagesElements = props.messages.map(d => <Message state={d}/>);
    let newMessageText = props.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onChangeNewMessage = (e) => {
        props.updateNewMessageText(e.target.value);
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