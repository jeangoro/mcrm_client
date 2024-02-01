import { AuthProtected } from './AuthProtected';
import React from "react";


function withAuthProtected(Component, roles) {
    function ComponentWithAuth(props) {
        return (
            <AuthProtected roles={roles}><Component/></AuthProtected>
        );
    }
    return ComponentWithAuth;
}

export default withAuthProtected;