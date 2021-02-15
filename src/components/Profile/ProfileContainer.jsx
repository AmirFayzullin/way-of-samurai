import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, toggleProfileFetching, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../common/RedirectToLogin/RedirectToLogin";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authUserId;

        if (!userId) return;


        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if ((this.props.match.params.userId === nextProps.match.params.userId) ||
            (!nextProps.match.params.userId && !nextProps.authUserId) ||
            this.props.isFetchingProfile) return true;

        let userId = nextProps.match.params.userId || nextProps.authUserId;

        if (!userId) return true;

        this.props.getProfile(userId);
        this.props.getStatus(userId);

        return true;
    }

    render() {
        return this.props.isFetchingProfile || !this.props.profile ? <Preloader /> : <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetchingProfile: state.profilePage.isFetchingProfile,
    authUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps,
        {setUserProfile, toggleProfileFetching, getProfile, getStatus, updateStatus}
        ),
    withAuthRedirect,
    withRouter
)(ProfileContainer);