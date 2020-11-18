import Message from "../Message/Message";
import s from "./Messenger.module.css";
import React from "react";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../Redux/state";

const Messenger = (props) => {
    let messagesElements = props.state.messages.map(d => <Message state={d}/>);

    let newMessageElement = React.createRef();
    let onSendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onChangeNewMessage = () => {
        let action = updateNewMessageTextActionCreator(newMessageElement.current.value);
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
                          ref={newMessageElement}
                          value={props.state.newMessageText}
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