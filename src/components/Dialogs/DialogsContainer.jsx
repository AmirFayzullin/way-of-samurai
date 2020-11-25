import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;