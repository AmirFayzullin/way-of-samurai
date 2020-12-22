import {sendMessage, updateNewMessageText} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messenger.messages,
        newMessageText: state.dialogsPage.messenger.newMessageText
    }
};

const MessengerContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText,})(Messenger);

export default MessengerContainer;