import {
    EMAIL_EMPTY,
    INVALID_EMAIL,
    PASSWORD_EMPTY,
} from "./ErrorMessages";
import globalValidations from './GlobalValidations';

class ValidationHelper{
  signInValidation = ({username, password}) => {
        if (globalValidations.isEmpty(username))
            return {error: true, errorText: EMAIL_EMPTY};
        if(globalValidations.isEmpty(password))
            return {error: true, errorText: PASSWORD_EMPTY};
        if (!globalValidations.isEmail(username))
            return {error: true, errorText: INVALID_EMAIL};
        return {error: false, errorText: ""};
    };
}

export default validationHelper = new ValidationHelper();