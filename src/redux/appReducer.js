import {authMe} from "./authReducer";

const FINISH_INITIALIZATION = 'FINISH-INITIALIZATION';
const FAKE = 'FAKE';

let initialState = {
    initialized: false,
    FAKE: 10,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case FINISH_INITIALIZATION:
            return {
                ...state,
                initialized: true,
            };
        case FAKE:
            return {
                ...state,
                FAKE: ++state.FAKE,
            };
        default:
            return state;
    }
};

const finishInitialization = () => ({type: FINISH_INITIALIZATION});
export const FAKEAC = () => ({type: FAKE});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise])
        .then(() => {
            dispatch(finishInitialization());
        });
};

export default appReducer;