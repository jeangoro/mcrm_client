import axios from "axios";
import { apiConfig } from "../config";

const TIMEOUT = 60 * 1000;
axios.defaults.timeout = TIMEOUT;

// Default
axios.defaults.baseURL = apiConfig.API_URL;

// Content Type
axios.defaults.headers.post["Content-Type"] = "application/json";

const TOKEN_USER = "mobility_crm_token";
const REMEMBER_ME = "mobility_crm_rememberMe";

const setupAxiosInterceptors = (onUnauthenticated) => {
  const onRequestSuccess = (config) => {
    try {
      const token = getAuthToken();
      if (token && token.accessToken) {
        config.headers.Authorization = `Bearer ${token.accessToken}`;
      }
    } catch (e) {
      console.log(e);
    }
    return config;
  };
  const onResponseSuccess = (response) => response;
  const onResponseError = (err) => {
    const status = err.status || (err.response ? err.response.status : 0);
    let message;
    switch (status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        onUnauthenticated(message);
        break;
      case 403:
        message = "Invalid credentials";
        onUnauthenticated(message);
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      case 0:
        message = err.message || err;
        onUnauthenticated(message);
        break;
      default:
        message = err.message || err;
    }
    console.log(message + " status = " + status);
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

const enrichUrl = (url) => {
  let newUrl = url;
  if (url.indexOf("?") >= 0) {
    newUrl = newUrl + "&contextCode=" + apiConfig.CONTEXT_CODE;
  } else {
    newUrl = newUrl + "?contextCode=" + apiConfig.CONTEXT_CODE;
  }
  return newUrl;
};

class APIClient {
  /**
   * get url
   */
  get = (url, params) => {
    url = enrichUrl(url);
    let paramKeys = [];
    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });
      const queryString = paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      return axios.get(`${url}?${queryString}`, params);
    } else {
      return axios.get(`${url}`, params);
    }
  };

  /**
   * post given data to url
   */
  post = (url, data) => {
    url = enrichUrl(url);
    return axios.post(url, data);
  };
  /**
   * updates data
   */
  update = (url, data, config) => {
    url = enrichUrl(url);
    return axios.patch(url, data, config);
  };

  /**
   * put data
   */
  put = (url, data, config) => {
    url = enrichUrl(url);
    return axios.put(url, data, config);
  };

  /**
   * delete
   */
  delete = (url, config) => {
    url = enrichUrl(url);
    return axios.delete(url, { ...config });
  };
}

const apiClient = new APIClient();

const setAuthToken = (rememberMe, token) => {
  if (rememberMe) {
    localStorage.setItem(TOKEN_USER, JSON.stringify(token));
  } else {
    sessionStorage.setItem(TOKEN_USER, JSON.stringify(token));
  }
};

const getAuthToken = () => {
  const tokenAsString = sessionStorage.getItem(TOKEN_USER) || localStorage.getItem(TOKEN_USER);
  return tokenAsString ? JSON.parse(tokenAsString) : null;
};

const clearAuthToken = () => {
  if (sessionStorage.getItem(TOKEN_USER)) {
    sessionStorage.removeItem(TOKEN_USER);
  }
  if (localStorage.getItem(TOKEN_USER)) {
    localStorage.removeItem(TOKEN_USER);
  }
};

const setRememberMe = (rememberMe) => {
  localStorage.setItem(REMEMBER_ME, JSON.stringify(rememberMe));
};

const getRememberMe = () => {
  const rememberMeAsString = localStorage.getItem(REMEMBER_ME);
  return rememberMeAsString ? JSON.parse(rememberMeAsString) : null;
};

const clearRememberMe = () => {
  if (localStorage.getItem(REMEMBER_ME)) {
    localStorage.removeItem(REMEMBER_ME);
  }
};

export { apiClient, setupAxiosInterceptors, setAuthToken, getAuthToken, clearAuthToken, setRememberMe, getRememberMe, clearRememberMe };
