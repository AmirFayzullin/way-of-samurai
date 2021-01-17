import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    toggleFollowingInProgress,
    unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       followingInProgressUsersIds={this.props.followingInProgressUsersIds}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgressUsersIds: state.usersPage.followingInProgressUsersIds
    }
};

export default connect(mapStateToProps,
    {follow, unfollow, getUsers, toggleFollowingInProgress})(UsersContainer);