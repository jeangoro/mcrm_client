import { Button, Spinner } from "reactstrap";
import React from "react";

const CustomButton = ({ actionName, loading, isFormValid, onClik }) => {
  return (
    <Button onClick={onClik} className="mcrm-btn" disabled={loading || !isFormValid}>
      <span className="d-flex align-items-center">
        {loading && (
          <Spinner size="sm" className="flex-shrink-0">
            En cours...
          </Spinner>
        )}
        <span className="flex-grow-1 ms-2"> {loading ? "En cours..." : actionName} </span>
      </span>
    </Button>
  );
};

export default CustomButton;
