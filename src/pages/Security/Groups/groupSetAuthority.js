import React, { useCallback, useContext, useEffect } from "react";
import { Button, Card, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import { toggleSetGroupAuthority } from "../../../store/authority/authoritySlice";
import { setGroupAuthority, unsetGroupAuthority } from "../../../store/authority";
import Loader from "../../../components/common/Loader";
import { GroupDataGrid } from "./groupDataGrid";

const GroupSetAuthority = () => {
  const dispatch = useDispatch();
  const { authorityList, isOpenSetGroupAuthority, setGroupAuthorityError, setGroupAuthorityLoading, setedAuthority, authorityRowToSetGroup, setedAuthorityData, dataGridUpdated, groupAuthorities } =
    useSelector((state) => state.authority);

  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  const toggleSetAuthorityForm = useCallback(() => {
    dispatch(toggleSetGroupAuthority());
  }, [dispatch]);

  useEffect(() => {
    if (setedAuthority && !setGroupAuthorityError) {
      refreshDataGridRef(setedAuthorityData);
    } else if (setedAuthority && setGroupAuthorityError) {
      console.log("error =>");
    }
  }, [setedAuthority, setGroupAuthorityError, setedAuthorityData, refreshDataGridRef, toggleSetAuthorityForm]);

  const onSetAuthorityClick = (e) => {
    if (e.target.checked === true) {
      let params = { groupId: authorityRowToSetGroup.name, authorityId: e.target.name };
      setGroupAuthority(dispatch, params);
    } else {
      let params = { groupId: authorityRowToSetGroup.name, authorityId: e.target.name };
      unsetGroupAuthority(dispatch, params);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(toggleSetGroupAuthority(false));
    };
  }, [dispatch]);

  const content = () => (
    <>
      <ModalHeader className="mcrm-bg pb-4">
        <div className="modal-title" id="myModalLabel">
          Ajouter ou supprimer des autorisations au groupe {authorityRowToSetGroup?.name}
        </div>
        <Button type="button" className="btn-close" onClick={toggleSetAuthorityForm} aria-label="Close"></Button>
      </ModalHeader>
      <ModalBody>
        {!groupAuthorities ? (
          <Loader></Loader>
        ) : (
          <Row>
            {authorityList?.map((el, key) => (
              <Col md={4} key={key}>
                <div className="form-group mb-2">
                  {groupAuthorities?.find((auth) => auth.name === el.name) !== undefined ? (
                    <>
                      <Input type="checkbox" name={el.name} defaultChecked={true} onChange={(e) => onSetAuthorityClick(e)} /> {el.name}
                    </>
                  ) : (
                    <>
                      <Input type="checkbox" name={el.name} defaultChecked={false} onChange={(e) => onSetAuthorityClick(e)} /> {el.name}
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
      {GroupDataGrid().config.moreActionsIsModal ? (
        <Card> {content()} </Card>
      ) : (
        <Modal id="setAuthority_group_modal" isOpen={isOpenSetGroupAuthority} toggle={toggleSetAuthorityForm}>
          {content()}
        </Modal>
      )}
    </>
  );
};
export default GroupSetAuthority;
