import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
});

export default connect(mapStateToProps, {authMe})(HeaderContainer);