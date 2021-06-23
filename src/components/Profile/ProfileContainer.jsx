import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    requestProfile,
    requestStatus,
    setUserProfile,
    toggleProfileFetching,
    updateStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {getIsFetchingProfile, getProfile, getStatus} from "../../redux/profileSelectors";
import {getAuthUserId} from "../../redux/authSelectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authUserId;

        if (!userId) {
            this.props.history.push('/login');
            return;
        }

        this.props.requestProfile(userId);
        this.props.requestStatus(userId);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let currentUserId = this.props.match.params.userId;
        let nextUserId = nextProps.match.params.userId;
        if ((currentUserId === nextUserId) ||
            (!nextUserId && !nextProps.authUserId) ||
            this.props.isFetchingProfile) return true;

        let userId = nextUserId || nextProps.authUserId;

        if (!userId) {
            this.props.history.push('/login');
            return true;
        }

        this.props.requestProfile(userId);
        this.props.requestStatus(userId);

        return true;
    }

    render() {
        return this.props.isFetchingProfile || !this.props.profile ? <Preloader /> : <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    isFetchingProfile: getIsFetchingProfile(state),
    authUserId: getAuthUserId(state),
});

export default compose(
    connect(mapStateToProps,
        {setUserProfile, toggleProfileFetching, requestProfile, requestStatus, updateStatus}
    ),
    withRouter
)(ProfileContainer);