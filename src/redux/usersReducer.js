import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgressUsersIds: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(userData => {
                            if (userData.id !== action.userId) return userData;
                            return {...userData, followed: true}
                        })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(userData => {
                    if (userData.id !== action.userId) return userData;
                    return {...userData, followed: false}
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgressUsersIds: action.isFetching ?
                [...state.followingInProgressUsersIds, action.userId] :
                state.followingInProgressUsersIds.filter(userId => userId !== action.userId)
            };
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (pageNumber, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setIsFetching(true));

    usersAPI.getUsers(pageNumber, pageSize)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount % 100));
            dispatch(setIsFetching(false));
        });
};

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));

    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
        });
};

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));

    usersAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
        });
};

export default usersReducer;