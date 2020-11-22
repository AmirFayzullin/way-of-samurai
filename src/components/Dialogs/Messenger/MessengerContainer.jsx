import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";

const MessengerContainer = (props) => {
    let state = props.store.getState().dialogsPage.messenger;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let updateNewMessageText = (text) => {
        let action = updateNewMessageTextCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Messenger sendMessage={sendMessage}
                   updateNewMessageText={updateNewMessageText}
                   messages={state.messages}
                   newMessageText={state.newMessageText}
        />
    )
};

export default MessengerContainer;