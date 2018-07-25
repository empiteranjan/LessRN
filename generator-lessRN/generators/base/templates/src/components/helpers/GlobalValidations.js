export const EMAIL_VALIDATION = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

class GlobalValidations {
    /**
     * Check is input empty
     *
     * @memberof Validator
     */
    isEmpty = input => {
        return (input === "")
    };

    /**
     * Check is input valid email address
     *
     * @memberof Validator
     */
    isEmail = input => {
        return EMAIL_VALIDATION.test(input);
    };

  }

export default globalValidations = new GlobalValidations();
