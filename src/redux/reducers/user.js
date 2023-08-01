import {USER_AUTH_CHANGED} from "../types";

const initialState = {
    isAuth: false,
};

const user = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case USER_AUTH_CHANGED: {
            return {
                ...state,
                isAuth: payload
            }
        }
        default:
            return state;
    }
};

export default user;
