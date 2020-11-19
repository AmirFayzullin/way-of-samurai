import genID from "./gedID";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.messenger.newMessageText,
                fromId: 0,
                id: genID(),
            };

            state.messenger.messages.push(newMessage);
            state.messenger.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.messenger.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};


export default dialogsReducer;


export const updateNewMessageTextCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText,
});
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
});