import {ukLanguage} from "../constants";
import {
    changeLanguageActionType,
    changeTokenActionType,
    changeUserEmailActionType,
    changeUserRoleActionType
} from "./types/general";

const initialState = {
    lang: ukLanguage,
    token: null,
    role: null,
    email: null,
};

const generalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case changeLanguageActionType:
            return {...state, lang: action?.lang};
        case changeTokenActionType:
            return {...state, token: action.token};
        case changeUserRoleActionType:
            return {...state, role: action.role};
        case changeUserEmailActionType:
            return {...state, email: action.email};
        default:
            return state;
    }
}

export default generalInfoReducer;