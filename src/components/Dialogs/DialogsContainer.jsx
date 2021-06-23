import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../common/RedirectToLogin/RedirectToLogin";
import {compose} from "redux";
import {getDialogs} from "../../redux/dialogsSelectors";

const mstp = (state) => ({
    dialogs: getDialogs(state),
});

export default compose(
    connect(mstp),
    withAuthRedirect
)(Dialogs);