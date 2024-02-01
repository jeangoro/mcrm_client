import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const AuthorityView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const authorityId = location.pathname.split("/")[3];

  const { authorityRowToView } = useSelector((state) => state.authority);

  return (
    <div>
      <div>
        <h1>View authority named : {authorityId}</h1>{" "}
      </div>
      <div>Contenu de view authority ici</div>
    </div>
  );
};

export default AuthorityView;
