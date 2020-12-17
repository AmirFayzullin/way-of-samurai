const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [ ]
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
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersReducer;