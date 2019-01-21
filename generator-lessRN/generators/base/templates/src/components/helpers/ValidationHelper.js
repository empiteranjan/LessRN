import {
  EMAIL_OR_PHONE_EMPTY,
  INVALID_EMAIL_OR_PHONE,
  INVALID_EMAIL_OR_PHONE_SIGNUP,
  INVALID_PASSWORD,
  PASSWORD_EMPTY,
  PASSWORDS_NOT_MATCH
} from "./ErrorMessages";
import globalValidations from "./GlobalValidations";

class ValidationHelper {
  signUpValidation = ({ username, password, confirmPassword }) => {
    if (globalValidations.isEmpty(username))
      return { error: true, errorMessage: EMAIL_OR_PHONE_EMPTY };
    if (username.includes("@" && ".com")) {
      //if (username.includes("@") && username.includes(".com")) {
      if (!globalValidations.isEmail(username))
        return { error: true, errorMessage: INVALID_EMAIL_OR_PHONE_SIGNUP };
    } else {
      if (!globalValidations.isPhoneNumber(username))
        return { error: true, errorMessage: INVALID_EMAIL_OR_PHONE_SIGNUP };
    }
    if (globalValidations.isEmpty(password))
      return { error: true, errorMessage: PASSWORD_EMPTY };
    if (!globalValidations.isValidPassword(password))
      return { error: true, errorMessage: INVALID_PASSWORD };
    if (globalValidations.isEmpty(confirmPassword))
      return { error: true, errorMessage: PASSWORD_EMPTY };
    if (globalValidations.isPasswordEqual({ password, confirmPassword }))
      return { error: true, errorMessage: PASSWORDS_NOT_MATCH };
    return { error: false, errorMessage: "" };
  };

  forgotPasswordValidation = ({ username }) => {
    if (globalValidations.isEmpty(username))
      return { error: true, errorMessage: EMAIL_OR_PHONE_EMPTY };
    if (username.includes("@" && ".com")) {
      //if (username.includes("@") && username.includes(".com")) {
      if (!globalValidations.isEmail(username))
        return { error: true, errorMessage: INVALID_EMAIL_OR_PHONE_SIGNUP };
    } else {
      if (!globalValidations.isPhoneNumber(username))
        return { error: true, errorMessage: INVALID_EMAIL_OR_PHONE_SIGNUP };
    }
    // if (!globalValidations.isEmail(username))
    //   return { error: true, errorMessage: INVALID_EMAIL_OR_PHONE };
    return { error: false, errorMessage: "" };
  };

  signInValidation = ({ username, password }) => {
    if (globalValidations.isEmpty(username))
      return { error: true, errorMessage: EMAIL_OR_PHONE_EMPTY };
    if (globalValidations.isEmpty(password))
      return { error: true, errorMessage: PASSWORD_EMPTY };
    if (username.includes("@" && ".com")) {
      if (!globalValidations.isEmail(username))
        return { error: true, errorMessage: INVALID_EMAIL_OR_PHONE };
    } else {
      if (!globalValidations.isPhoneNumber(username))
        return { error: true, errorMessage: INVALID_EMAIL_OR_PHONE };
    }
    return { error: false, errorMessage: "" };
  };

  changePasswordValidation = ({ newPassword, confirmPassword }) => {
    console.log(newPassword, confirmPassword);
    if (globalValidations.isEmpty(newPassword))
      return { error: true, errorMessage: PASSWORD_EMPTY };
    if (globalValidations.isEmpty(confirmPassword))
      return { error: true, errorMessage: PASSWORD_EMPTY };
    if (
      globalValidations.isPasswordEqual({
        password: newPassword,
        confirmPassword
      })
    )
      return { error: true, errorMessage: PASSWORDS_NOT_MATCH };
    return { error: false, errorMessage: "" };
  };
}

export default (validationHelper = new ValidationHelper());
