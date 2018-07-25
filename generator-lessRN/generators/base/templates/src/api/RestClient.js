import axios from 'axios';
import {CONNECTION_TIMEOUT_REMOTE} from '../components/helpers/ErrorMessages';

export const METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT"
};

let _this;
const _timeout = 15000;

const instance = axios.create();
instance.defaults.timeout = _timeout;

class RestClient {

    constructor() {
        _this = this;
    }

    timeoutPromise(timeoutSent, err, promise) {
        return new Promise(function (resolve, reject) {
            promise.then(resolve, reject);
            setTimeout(reject.bind(null, err), timeoutSent);
        });
    }

    /**
     * Main method call for all rest calls with in logic
     * @param method
     * @param url
     * @param body
     * @param token
     * @constructor
     */
    API(method, url, body, token) {
        switch (method) {
            case METHODS.GET:
                return this._get(url, token);
            case METHODS.POST:
                body = body || {};
                return this._post(url, body, token);
            case METHODS.PUT:
                return this._put(url, body, token);
            default:
                break;
        }
    }

    /**
     * GET Rest API Call
     * @param url
     * @param token
     * @returns {Promise<any> | Promise}
     * @private
     */
    _get(url, token) {
        return new Promise((resolve, reject) => {
            instance
                .get(url, {headers: {Authorization: token}})
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data.error);
                });
        });
    }

    /**
     * POST Rest API Call
     * @param url
     * @param body
     * @param token
     * @returns {Promise<any> | Promise}
     * @private
     */
    _post(url, body, token) {
        return new Promise((resolve, reject) => {
            this.timeoutPromise(_timeout, new Error(CONNECTION_TIMEOUT_REMOTE),
                instance
                    .post(url, body, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }))
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    /**
     * PUT Rest API Call
     * @param url
     * @param body
     * @param token
     * @returns {Promise<any> | Promise}
     * @private
     */
    _put(url, body, token) {
        return new Promise((resolve, reject) => {
            instance
                .put(url, body, {headers: {Authorization: token}})
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

export const client = new RestClient();
