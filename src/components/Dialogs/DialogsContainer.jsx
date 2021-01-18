import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../common/RedirectToLogin/RedirectToLogin";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
};

const DialogsContainer = withAuthRedirect(Dialogs);

export default connect(mapStateToProps)(DialogsContainer);