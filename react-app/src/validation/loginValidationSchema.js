import * as Yup from 'yup';
import {lang} from "../lang";
import {maxEmailLength, maxPasswordLength, minEmailLength, minPasswordLength} from "./constants";

export const loginValidationSchema = (currentLang) => (Yup.object().shape({
    email: Yup.string()
        .required(lang.common.validation_errors.required[currentLang])
        .email(lang.common.validation_errors.email[currentLang])
        .min(minEmailLength)
        .max(maxEmailLength),
    password: Yup.string()
        .required(lang.common.validation_errors.required[currentLang])
        .min(minPasswordLength)
        .max(maxPasswordLength),
}));
