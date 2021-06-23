import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, toggleProfileFetching, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authUserId;

        if (!userId) {
            this.props.history.push('/login');
            return;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let currentUserId = this.props.match.params.userId;
        let nextUserId = nextProps.match.params.userId;
        if (((currentUserId === nextUserId) &&
            currentUserId &&
            nextUserId &&
            !nextProps.authUserId) ||
            this.props.profile?.userId === nextProps.authUserId ||
            this.props.profile?.userId === nextUserId ||
            this.props.isFetchingProfile) return true;

        let userId = nextUserId || nextProps.authUserId;

        if (!userId) {
            this.props.history.push('/login');
            return true;
        }

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
    withRouter
)(ProfileContainer);