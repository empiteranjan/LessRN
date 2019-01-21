import axios from "axios";

let _this;

export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

class RestClient {
  constructor() {
    _this = this;
  }
  /**
   * Main method call for all rest calls with in logic
   *
   * @param {any} method
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  API(method, url, body, header) {
    switch (method) {
      case METHODS.GET:
        return this._get(url, header);
      case METHODS.POST:
        body = body || {};
        return this._post(url, body, header);
      case METHODS.PUT:
        return this._put(url, body, header);
      case METHODS.DELETE:
        return this._delete(url, body, header);
      default:
        break;
    }
  }

  /**
   * GET Rest API Call
   *
   * @param {any} url
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _get(url, header) {
    /*
    const response = await axios.get(url, { headers: header });
    return response;*/
    return axios
      .get(url, { headers: header })
      .then(response => response)
      .catch(error => error);
  }
  /**
   * POST Rest API Call
   *
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _post(url, body, header) {
    return axios
      .post(url, body, { headers: header })
      .then(response => response)
      .catch(error => error);
  }
  /**
   * PUT Rest API Call
   *
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _put(url, body, header) {
    return axios
      .put(url, body, { headers: header })
      .then(response => response)
      .catch(error => error);
  }
  /**
   * DELETE Rest API Call
   *
   * @param {any} url
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _delete(url, body, header) {
    return axios
      .delete(url, { headers: header })
      .then(response => response)
      .catch(error => error);
  }
}

export const client = new RestClient();
