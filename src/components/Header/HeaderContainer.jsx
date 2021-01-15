import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserProfile, setIsFetchingProfile} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;

                    this.props.setIsFetchingProfile(true);
                    this.props.setAuthUserData(id, email, login);

                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                        .then(response => {
                            this.props.setAuthUserProfile(response.data);
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