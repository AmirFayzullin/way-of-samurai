import React from 'react';
import {connect} from 'react-redux';
import {
    follow, requestUsers,
    toggleFollowingInProgress,
    unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgressUsersIds,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        console.log('render');
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
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    console.log('mstp');
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgressUsersIds: getFollowingInProgressUsersIds(state),
    }
};

export default connect(mapStateToProps,
    {follow, unfollow, requestUsers, toggleFollowingInProgress})(UsersContainer);