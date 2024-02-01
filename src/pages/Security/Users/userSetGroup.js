import React, { useCallback, useContext, useEffect } from "react";
import { Button, Card, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import { toggleSetUserGroup } from "../../../store/group/groupSlice";
import { setUserGroup, unsetUserGroup } from "../../../store/group";
import Loader from "../../../components/common/Loader";
import { UserDataGrid } from "./userDataGrid";

const UserSetGroup = () => {
  const dispatch = useDispatch();
  const { isOpenSetUserGroup, groupList, userGroupsList, userRowToSetGroup } = useSelector((state) => state.group);

  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  const toggleSetGroupForm = useCallback(() => {
    dispatch(toggleSetUserGroup());
  }, [dispatch]);

  const onSetGroupClick = (e) => {
    let params = { userId: userRowToSetGroup?.userId, groupId: e.target.name };
    if (e.target.checked === true) {
      setUserGroup(dispatch, params);
    } else {
      unsetUserGroup(dispatch, params);
    }
  };

  useEffect(() => {
    console.log("userSetGroup mount");
    return () => {
      dispatch(toggleSetUserGroup(false));
    };
  }, [dispatch]);

  const content = () => (
    <>
      <ModalHeader className="mcrm-bg pb-4">
        <div className="modal-title" id="myModalLabel">
          Ajouter ou supprimer des groupes à l'utilisateur {userRowToSetGroup?.firstName} {userRowToSetGroup?.lastName}
        </div>
        <Button type="button" className="btn-close" onClick={toggleSetGroupForm} aria-label="Close"></Button>
      </ModalHeader>
      <ModalBody>
        {!userGroupsList ? (
          <Loader></Loader>
        ) : (
          <Row>
            {groupList?.map((el, key) => (
              <Col md={4} key={key}>
                <div className="form-group mb-2">
                  {userGroupsList?.find((grp) => grp.name === el.name) !== undefined ? (
                    <>
                      <Input type="checkbox" name={el.name} defaultChecked={true} onChange={(e) => onSetGroupClick(e)} /> {el.name}
                    </>
                  ) : (
                    <>
                      <Input type="checkbox" name={el.name} defaultChecked={false} onChange={(e) => onSetGroupClick(e)} /> {el.name}
                    </>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        )}
      </ModalBody>
    </>
  );

  return (
    <>
      {UserDataGrid().config.moreActionsIsModal ? (
        <Card> {content()} </Card>
      ) : (
        <Modal id="user_status" isOpen={isOpenSetUserGroup} toggle={toggleSetGroupForm}>
          {content()}
        </Modal>
      )}
    </>
  );
};
export default UserSetGroup;
