import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserProfile, setIsFetchingProfile} from "../../redux/authReducer";
import {authAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;

                    this.props.setIsFetchingProfile(true);
                    this.props.setAuthUserData(id, email, login);

                    profileAPI.getProfile(id)
                        .then(data => {
                            this.props.setAuthUserProfile(data);
                            this.props.setIsFetchingProfile(false);
                        });
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
});

export default connect(mapStateToProps, {setAuthUserData, setAuthUserProfile, setIsFetchingProfile})(HeaderContainer);