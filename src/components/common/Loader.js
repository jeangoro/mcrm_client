import React from "react";
import { Spinner } from "reactstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loader = (props) => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }} className=" mx-2 mt-2">
        <Spinner className="me-2" color="primary" role="status"></Spinner> Chargement...{" "}
      </div>
      {toast.error(props.error, { position: "top-right", hideProgressBar: false, progress: undefined, toastId: "" })}
    </React.Fragment>
  );
};

export default Loader;
