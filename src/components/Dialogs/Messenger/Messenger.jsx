import Message from "../Message/Message";
import s from "./Messenger.module.css";
import React from "react";

const Messenger = (props) => {
    let messagesElements = props.state.map(d => <Message state={d}/>);

    let newMessageElement = React.createRef();
    let onSendMessage = () => {
        alert(newMessageElement.current.value);
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
                >
                </textarea>
                
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