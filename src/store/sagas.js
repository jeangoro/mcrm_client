import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
//Auth
import ProfileSaga from "./auth/profile/saga";

// contacts
import contacts from "./contacts/saga";
import mailboxSaga from "./mailbox/saga";
import chatSaga from "./chat/saga";

import authenticationSaga from "./auth/authentication/authenticationSaga";
import loginSaga from "./auth/login/loginSaga";
import logoutSaga from "./auth/logout/logoutSaga";
import registerSaga from "./auth/register/registerSaga";
import forgetPwdSaga from "./auth/forgetPwd/forgetPwdSaga";
import changePwdSaga from "./auth/changePwd/changePwdSaga";
import reportingSaga from "./reporting/reportingSaga";
import authoritySaga from "./authority/authoritySaga";
import groupSaga from "./group/groupSaga";
import userSaga from "./user/userSaga";
import contactSaga from "./commercial/contact/contactSaga";

export default function* rootSaga() {
  yield all([
    //public
    fork(authenticationSaga),
    fork(loginSaga),
    fork(logoutSaga),
    fork(registerSaga),
    fork(forgetPwdSaga),
    fork(changePwdSaga),
    fork(reportingSaga),
    fork(authoritySaga),
    fork(groupSaga),
    fork(userSaga),
    fork(contactSaga),

    fork(LayoutSaga),
    fork(ProfileSaga),
    fork(contacts),
    fork(mailboxSaga),
    fork(chatSaga),
  ]);
}
