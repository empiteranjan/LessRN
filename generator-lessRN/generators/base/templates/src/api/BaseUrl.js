import {BASE_URL_PROD, BASE_URL_DEV} from './Urls'

class BaseUrl {
  baseUrl = () => {
        return BASE_URL_PROD;
  };
}

export const baseUrl = new BaseUrl()