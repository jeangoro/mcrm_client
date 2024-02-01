import React, { useCallback, useEffect } from "react";
import { Button, Card, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatus } from "../../../store/user/userSlice";
import Loader from "../../../components/common/Loader";
import { UserDataGrid } from "./userDataGrid";

const UserStatus = () => {
  const dispatch = useDispatch();
  const { isOpenStatus, userRowToViewStatus, getUserStatusError, getUserStatusLoading, getUserStatusSuccess, userStatus } = useSelector((state) => state.user);

  const toggleOpenStatus = useCallback(() => {
    dispatch(toggleStatus());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(toggleStatus(false));
    };
  }, [dispatch]);

  // const ModalOpenBalise = (
  //   <Modal id="user_status" isOpen={isOpenStatus} toggle={toggleOpenStatus}></Modal>
  // );

  const content = () => (
    <>
      <ModalHeader className="mcrm-bg pb-4">
        <div className="modal-title" id="myModalLabel">
          Status de l'utilisateur {userRowToViewStatus?.firstName} {userRowToViewStatus?.lastName}
        </div>
        <Button type="button" className="btn-close" onClick={toggleOpenStatus} aria-label="Close"></Button>
      </ModalHeader>
      <ModalBody>
        {!userStatus ? (
          <Loader></Loader>
        ) : (
          <>
            <Row className="border-bottom pt-1">
              <Col sm={4}>
                <h5>Id utilisateur:</h5>
              </Col>
              <Col sm={8}>
                <h5 className="text-muted">{userStatus?.userId}</h5>
              </Col>
            </Row>
            <Row className="border-bottom pt-1">
              <Col sm={4}>
                <h5>Nom :</h5>
              </Col>
              <Col sm={8}>
                <h5 className="text-muted">{userStatus?.firstName}</h5>
              </Col>
            </Row>
            <Row className="border-bottom pt-1">
              <Col sm={4}>
                <h5>Prénom :</h5>
              </Col>
              <Col sm={8}>
                <h5 className="text-muted">{userStatus?.lastName}</h5>
              </Col>
            </Row>
            <Row className="border-bottom pt-1">
              <Col sm={4}>
                <h5>Par l'admin :</h5>
              </Col>
              <Col sm={8}>
                <h5 className="text-muted">{userStatus?.byAdmin ? "Oui" : "Non"}</h5>
              </Col>
            </Row>
            <Row className="border-bottom pt-1">
              <Col sm={4}>
                <h5>Utilisateur trouvé :</h5>
              </Col>
              <Col sm={8}>
                <h5 className="text-muted">{userStatus?.userFound ? "Oui" : "Non"}</h5>
              </Col>
            </Row>
            <Row className="border-bottom pt-1">
              <Col sm={4}>
                <h5>Nbre Max d'essai :</h5>
              </Col>
              <Col sm={8}>
                <h5 className="text-muted">{userStatus?.maxRetryCount}</h5>
              </Col>
            </Row>
            <Row className="border-bottom pt-1">
              <Col sm={4}>
                <h5>Temps d'attente :</h5>
              </Col>
              <Col sm={8}>
                <h5 className="text-muted">{userStatus?.timeToWait}</h5>
              </Col>
            </Row>
            <Row className="border-bottom pt-1">
              <Col sm={4}>
                <h5>Nbre d'essai effectué :</h5>
              </Col>
              <Col sm={8}>
                <h5 className="text-muted">{userStatus?.retryCount}</h5>
              </Col>
            </Row>
          </>
        )}
      </ModalBody>
    </>
  );

  return (
    <>
      {UserDataGrid().config.moreActionsIsModal ? (
        <Card> {content()} </Card>
      ) : (
        <Modal id="user_status" isOpen={isOpenStatus} toggle={toggleOpenStatus}>
          {content()}
        </Modal>
      )}

      {/* <ModalHeader className="mcrm-bg pb-4">
          <div className="modal-title" id="myModalLabel">
            Status de l'utilisateur {userRowToViewStatus?.firstName} {userRowToViewStatus?.lastName}
          </div>
          <Button type="button" className="btn-close" onClick={toggleOpenStatus} aria-label="Close"></Button>
        </ModalHeader>
        <ModalBody>
          {!userStatus ? (
            <Loader></Loader>
          ) : (
            <>
              <Row className="border-bottom pt-1">
                <Col sm={4}>
                  <h5>Id utilisateur:</h5>
                </Col>
                <Col sm={8}>
                  <h5 className="text-muted">{userStatus?.userId}</h5>
                </Col>
              </Row>
              <Row className="border-bottom pt-1">
                <Col sm={4}>
                  <h5>Nom :</h5>
                </Col>
                <Col sm={8}>
                  <h5 className="text-muted">{userStatus?.firstName}</h5>
                </Col>
              </Row>
              <Row className="border-bottom pt-1">
                <Col sm={4}>
                  <h5>Prénom :</h5>
                </Col>
                <Col sm={8}>
                  <h5 className="text-muted">{userStatus?.lastName}</h5>
                </Col>
              </Row>
              <Row className="border-bottom pt-1">
                <Col sm={4}>
                  <h5>Par l'admin :</h5>
                </Col>
                <Col sm={8}>
                  <h5 className="text-muted">{userStatus?.byAdmin ? "Oui" : "Non"}</h5>
                </Col>
              </Row>
              <Row className="border-bottom pt-1">
                <Col sm={4}>
                  <h5>Utilisateur trouvé :</h5>
                </Col>
                <Col sm={8}>
                  <h5 className="text-muted">{userStatus?.userFound ? "Oui" : "Non"}</h5>
                </Col>
              </Row>
              <Row className="border-bottom pt-1">
                <Col sm={4}>
                  <h5>Nbre Max d'essai :</h5>
                </Col>
                <Col sm={8}>
                  <h5 className="text-muted">{userStatus?.maxRetryCount}</h5>
                </Col>
              </Row>
              <Row className="border-bottom pt-1">
                <Col sm={4}>
                  <h5>Temps d'attente :</h5>
                </Col>
                <Col sm={8}>
                  <h5 className="text-muted">{userStatus?.timeToWait}</h5>
                </Col>
              </Row>
              <Row className="border-bottom pt-1">
                <Col sm={4}>
                  <h5>Nbre d'essai effectué :</h5>
                </Col>
                <Col sm={8}>
                  <h5 className="text-muted">{userStatus?.retryCount}</h5>
                </Col>
              </Row>
            </>
          )}
        </ModalBody> */}
    </>
  );
};
export default UserStatus;
