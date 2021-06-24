import {authMe} from "./authReducer";

const FINISH_INITIALIZATION = 'app/FINISH-INITIALIZATION';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case FINISH_INITIALIZATION:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

const finishInitialization = () => ({type: FINISH_INITIALIZATION});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise])
        .then(() => {
            dispatch(finishInitialization());
        });
};

export default appReducer;