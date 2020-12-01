import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messenger.messages,
        newMessageText: state.dialogsPage.messenger.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(sendMessageCreator())},
        updateNewMessageText: (text) => dispatch(updateNewMessageTextCreator(text)),
    }
};

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;