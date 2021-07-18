import {authMe} from "./authReducer";

const FINISH_INITIALIZATION = 'app/FINISH-INITIALIZATION';
const SET_ERROR_MESSAGE = 'app/SET_ERROR_MESSAGE';

let initialState = {
    initialized: false,
    errorMessage: null,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FINISH_INITIALIZATION:
            return {
                ...state,
                initialized: true,
            };

        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
};

const finishInitialization = () => ({type: FINISH_INITIALIZATION});
const setErrorMessage = (errorMessage) => ({type: SET_ERROR_MESSAGE, errorMessage});

export const showError = (errorMessage) => (dispatch) => {
    dispatch(setErrorMessage(errorMessage));

    setTimeout(() => dispatch(setErrorMessage(null)), 3000);
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise])
        .then(() => {
            dispatch(finishInitialization());
        });
};

export default appReducer;