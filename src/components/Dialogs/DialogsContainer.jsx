import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../common/RedirectToLogin/RedirectToLogin";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
};

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Dialogs);