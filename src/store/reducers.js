import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Profile from "./auth/profile/reducer";

import MailBox from "./mailbox/reducer";

import Chats from "./chat/reducer";

// contacts
import Contacts from "./contacts/reducer";

import authentication from "./auth/authentication/authenticationSlice";
import login from "./auth/login/loginSlice";
import logout from "./auth/logout/logoutSlice";
import register from "./auth/register/registerSlice";
import forgotPwd from "./auth/forgetPwd/forgetPwdSlice";
import changePwd from "./auth/changePwd/changePwdSlice";
import referential from "./referential/referentialSlice";
import reporting from "./reporting/reportingSlice";
import authority from "./authority/authoritySlice";
import group from "./group/groupSlice";

import { loadingBarReducer as loadingBar } from "react-redux-loading-bar";
import user from "./user/userSlice";
import contact from "./commercial/contact/contactSlice";

const rootReducer = combineReducers({
  loadingBar: loadingBar,
  authentication: authentication,
  login: login,
  logout: logout,
  register: register,
  forgotPwd: forgotPwd,
  changePwd: changePwd,
  referential: referential,
  reporting: reporting,
  authority: authority,
  group: group,
  user: user,
  contact: contact,

  Layout,
  Profile,
  Contacts,
  MailBox,
  Chats,
});

export default rootReducer;
