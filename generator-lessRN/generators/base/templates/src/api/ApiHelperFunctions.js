import {
  UNAUTHORIZED,
  FORBIDDEN,
  SERVER_ERROR,
  NOT_FOUND
} from "../components/helpers/ErrorMessages";

class ApiHelperFunctions {
  /**
   * Check Validation with http response
   *
   * @param {*} responseObj
   * @returns
   * @memberof ApiHelperFunctions
   */
  responseHandler(responseObj, isIdentityServer) {
    const { hasError, errorMessage } = this.statusHandler(
      responseObj,
      isIdentityServer
    );
    if (hasError) {
      return { hasError: true, errorMessage: errorMessage };
    } else {
      if (isIdentityServer) {
        return { hasError: false, errorMessage: "" };
      } else {
        const { Code, Message } = responseObj.data.Status;
        if (Code == 1) {
          return { hasError: false, errorMessage: Message };
        } else {
          return { hasError: true, errorMessage: Message };
        }
      }
    }
  }

  /**
   * Check http respone status
   *
   * @param {*} responseObj
   * @returns
   * @memberof ApiHelperFunctions
   */
  statusHandler(responseObj, isIdentityServer) {
    console.log(responseObj.status);
    switch (responseObj.status) {
      case 400:
        if (isIdentityServer) {
          return {
            hasError: true,
            errorMessage: responseObj.data.error_description
          };
        } else {
          return {
            hasError: true,
            errorMessage: responseObj.data.Status.Message
          };
        }
      case 401:
        return { hasError: true, errorMessage: UNAUTHORIZED };
      case 403:
        return { hasError: true, errorMessage: FORBIDDEN };
      case 404:
        return { hasError: true, errorMessage: NOT_FOUND };
      case 500:
        return { hasError: true, errorMessage: SERVER_ERROR };
      default:
        return { hasError: false, errorMessage: "" };
    }
  }
}

export const apiHelperFunctions = new ApiHelperFunctions();
