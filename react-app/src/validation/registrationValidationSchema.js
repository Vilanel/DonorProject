import * as Yup from 'yup';
import {lang} from "../lang";
import {
    maxEmailLength,
    maxGeneralFieldLength,
    maxPasswordLength,
    minEmailLength,
    minGeneralFieldLength,
    minPasswordLength,
    minRequiredFieldLength
} from "./constants";

export const registrationValidationSchema = (currentLang) => (Yup.object().shape({
    email: Yup.string()
        .required(lang.common.validation_errors.required[currentLang])
        .email(lang.common.validation_errors.email[currentLang])
        .min(minEmailLength)
        .max(maxEmailLength),
    password: Yup.string()
        .required(lang.common.validation_errors.required[currentLang])
        .min(minPasswordLength)
        .max(maxPasswordLength),
    firstName: Yup.string()
        .required(lang.common.validation_errors.required[currentLang])
        .min(minRequiredFieldLength)
        .max(maxGeneralFieldLength),
    lastName: Yup.string()
        .required(lang.common.validation_errors.required[currentLang])
        .min(minRequiredFieldLength)
        .max(maxGeneralFieldLength),
    mobileNumber: Yup.string()
        .nullable()
        .min(minGeneralFieldLength)
        .max(maxGeneralFieldLength),
}));
