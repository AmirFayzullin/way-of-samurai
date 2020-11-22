import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";
import StoreContext from "../../../StoreContext";

const MessengerContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage.messenger;

                    let sendMessage = () => {
                        store.dispatch(sendMessageCreator());
                    };

                    let updateNewMessageText = (text) => {
                        let action = updateNewMessageTextCreator(text);
                        store.dispatch(action);
                    };

                    return (
                        <Messenger sendMessage={sendMessage}
                                   updateNewMessageText={updateNewMessageText}
                                   messages={state.messages}
                                   newMessageText={state.newMessageText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

export default MessengerContainer;