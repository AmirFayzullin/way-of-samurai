import {resetForm, sendMessage} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {getMessages} from "../../../redux/dialogsSelectors";

const mstp = (state) => ({messages: getMessages(state), });

export default connect(mstp, {sendMessage, resetForm})(Messenger);