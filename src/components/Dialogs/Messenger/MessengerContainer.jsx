import {resetForm, sendMessage} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({messages: state.dialogsPage.messenger.messages, });

export default connect(mapStateToProps, {sendMessage, resetForm})(Messenger);