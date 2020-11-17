import Message from "../Message/Message";
import s from "./Messenger.module.css";
import React from "react";

const Messenger = (props) => {
    let state = props.state.dialogsPage.messenger;

    let messagesElements = state.messages.map(d => <Message state={d}/>);

    let newMessageElement = React.createRef();
    let onSendMessage = () => {
        props.store.sendMessage();
    };

    let onChangeNewMessage = () => {
        props.store.updateNewMessageText(newMessageElement.current.value);
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
                          value={state.newMessageText}
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