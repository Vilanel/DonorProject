import {
    changeLanguageActionType,
    changeTokenActionType,
    changeUserEmailActionType,
    changeUserRoleActionType
} from "../types/general";

export const changeLanguageAction = (lang) => ({
    type: changeLanguageActionType,
    lang,
});

export const changeTokenAction = (token) => ({
    type: changeTokenActionType,
    token,
});

export const changeUserRoleAction = (role) => ({
    type: changeUserRoleActionType,
    role,
});

export const changeEmailAction = (email) => ({
    type: changeUserEmailActionType,
    email,
});
