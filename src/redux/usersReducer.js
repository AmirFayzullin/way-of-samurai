import {usersAPI} from "../api/api";
import {changeObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
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
                users: changeObjectInArray(state.users, 'id', action.userId, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: changeObjectInArray(state.users, 'id', action.userId, {followed: false})
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
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setIsFetching(true));

    const data = await usersAPI.getUsers(pageNumber, pageSize);

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount % 100));
    dispatch(setIsFetching(false));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
};

export const follow = (userId) => (dispatch) =>
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);

export const unfollow = (userId) => (dispatch) =>
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);

export default usersReducer;