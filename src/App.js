import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import Scss
import "./assets/scss/themes.scss";
import "devextreme/dist/css/dx.light.compact.css";

//import Route
import AppRoute from "./routes";
import { getAccount, getRememberMe, logout } from "./store/auth";
import { useLocation, useNavigate } from "react-router-dom";
import OfflinePage from "./pages/AuthenticationInner/OfflinePage";
import LockScreen from "react-lock-screen";
import LockScreenUi from "./pages/Authentication/LockScreenUi";
import { ToastContainer } from "react-toastify";
import useOnlineStatus from "./components/hooks/useOnlineStatus";

function App() {
  const { account, isAuthenticated } = useSelector((state) => state.authentication);
  const isOnline = useOnlineStatus();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Mount App")
    return () => {console.log("UnMount App")}
  }, []);

  useEffect(() => {
    const isIncluded = location.pathname.indexOf("/logout") >= 0 || location.pathname.indexOf("/login") >= 0 || location.pathname.indexOf("/register") >= 0;
    if (!isIncluded && account === null) {
      getAccount(dispatch);
    } else {
      getRememberMe(dispatch);
    }
  }, [account, dispatch, location.pathname]);

  const disconnectUser = () => {
    if (isAuthenticated) {
      navigate("/logout");
    }
  };
  const gotoLogin = () => {
    navigate("/login");
  };

  return (
    <React.Fragment>
      {!isOnline ? (
        <OfflinePage />
      ) : (
        <LockScreen timeout={3600000} onScreenLocked={disconnectUser} onScreenUnlocked={gotoLogin} ui={LockScreenUi}>
          <AppRoute />
        </LockScreen>
      )}
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
