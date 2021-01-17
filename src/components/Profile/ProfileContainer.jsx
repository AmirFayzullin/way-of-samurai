import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile, toggleProfileFetching} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authUserId;

        if (!userId) return;


        this.props.getProfile(userId);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if ((this.props.match.params.userId === nextProps.match.params.userId) ||
            (!nextProps.match.params.userId && !nextProps.authUserId) ||
            this.props.isFetchingProfile) return true;

        let userId = nextProps.match.params.userId || nextProps.authUserId;

        if (!userId) return true;

        this.props.getProfile(userId);

        return true;
    }

    render() {
        return this.props.isFetchingProfile || !this.props.profile ? <Preloader /> : <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetchingProfile: state.profilePage.isFetchingProfile,
    authUserId: state.auth.userId
});

let ProfileContainerWithURLData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, toggleProfileFetching, getProfile})(ProfileContainerWithURLData);