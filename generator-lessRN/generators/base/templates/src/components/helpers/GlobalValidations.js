import moment from "moment";

export const EMAIL_VALIDATION = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
export const MOBILE_VALIDATION = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
export const NUMBER_VALIDATION = /^[0-9]*$/;
export const URL_VALIDATION = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
export const PASSWORD_VALIDATION = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

class GlobalValidations {
  /**
   * Check is input empty
   *
   * @memberof Validator
   */
  isEmpty = input => {
    return input === "";
  };

  isInputWithinRange = input => {
    if (input.length > 50 || input.length < 2) {
      return false;
    }
    return true;
  };
  /**
   * Check is input valid email address
   *
   * @memberof Validator
   */
  isEmail = input => {
    return EMAIL_VALIDATION.test(input);
  };

  isPhoneNumber = input => {
    //return MOBILE_VALIDATION.test(input);
    let firstHalf = input.substring(0, 4);
    console.log(firstHalf);
    if (firstHalf.includes("+61")) {
      if (input.length == 12) {
        return true;
      }
    } else if (firstHalf.includes("0061")) {
      if (input.length == 13) {
        return true;
      }
    } else if (firstHalf.includes("+94")) {
      if (input.length == 12) {
        return true;
      }
    } else if (firstHalf.includes("0094")) {
      if (input.length == 13) {
        return true;
      }
    } else {
      if (input.length == 9 || input.length == 10) {
        return true;
      }
    }
    return false;
  };

  isURL = input => {
    return URL_VALIDATION.test(input);
  };

  isValidPassword = input => {
    return PASSWORD_VALIDATION.test(input);
  };

  isPasswordEqual = input => {
    console.log(input);
    return input.password.localeCompare(input.confirmPassword) ? true : false;
  };

  isDateBelowToday = input => {
    console.log(input);
    let today = moment().format("YYYY-MM-DD");
    console.log(today);
    if (input > today) {
      return false;
    }
    return true;
  };

  isDateBelowGivenDate = (date, givenDate) => {
    if (date >= givenDate) {
      return false;
    }
    return true;
  };
}

export default (globalValidations = new GlobalValidations());
