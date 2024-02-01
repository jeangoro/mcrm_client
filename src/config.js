module.exports = {
  google: {
    API_KEY: "",
    CLIENT_ID: "",
    SECRET: "",
  },
  facebook: {
    APP_ID: "",
  },
  apiConfig: {
    API_URL: process.env.REACT_API_URL || "https://vyyhsb4ogk.execute-api.eu-west-3.amazonaws.com/test",
    CONTEXT_CODE: process.env.CONTEXT_CODE || "mobility_crm"
  },
};
