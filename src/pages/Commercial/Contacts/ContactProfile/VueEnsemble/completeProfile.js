import React from "react";
import { Card, CardBody, Progress } from "reactstrap";

const CompleteProfile = () => {
  return (
    <Card>
      <CardBody>
        <h5 className="card-title mb-5">Complete Your Profile</h5>
        <Progress value={30} color="danger" className="animated-progess custom-progress progress-label">
          <div className="label">30%</div>{" "}
        </Progress>
      </CardBody>
    </Card>
  );
};

export default CompleteProfile;
