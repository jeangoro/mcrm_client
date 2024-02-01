import React, { useEffect } from 'react';
import withRouter from '../components/common/withRouter';

//redux
import { useSelector } from "react-redux";
import {Outlet} from "react-router-dom";

const NonAuthLayout = () => {
    const {layoutModeType,} = useSelector(state => ({
        layoutModeType: state.Layout.layoutModeType,
    }));

    useEffect(() => {
        if (layoutModeType === "dark") {
            document.body.setAttribute("data-layout-mode", "dark");
        } else {
            document.body.setAttribute("data-layout-mode", "light");
        }
        return () => {
            document.body.removeAttribute("data-layout-mode");
        };
    }, [layoutModeType]);
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default withRouter(NonAuthLayout);