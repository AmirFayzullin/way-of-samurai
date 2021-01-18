import {sendMessage, updateNewMessageText} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messenger.messages,
        newMessageText: state.dialogsPage.messenger.newMessageText
    }
};

export default connect(mapStateToProps, {sendMessage, updateNewMessageText,})(Messenger);