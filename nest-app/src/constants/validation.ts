export const minPasswordLength = 8;
export const maxPasswordLength = 50;

export const maxEmailLength = 320;
export const minEmailLength = 1;

export const maxGeneralFieldLength = 320;
export const minGeneralFieldLength = 0;
export const minRequiredFieldLength = 1;

export const shouldBeStringValidationError = 'Should be string';
export const emailValidationError = 'Email is invalid';
export const passwordValidationError = `Password should be longer than ${minPasswordLength} and shorter than ${maxPasswordLength}`;
export const fieldValidationError = (min, max) =>  (`Should be longer than ${min} and shorter than ${max}`);