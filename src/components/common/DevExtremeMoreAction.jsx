import { Button } from "devextreme-react";
import React, { useState } from "react";
import { Button as ButtonReactStrap, Col, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalHeader, Row, UncontrolledDropdown } from "reactstrap";
import isFunction from "./Utils";
import actionTypeCssClassNameMap from "../../common/ActionTypeCssClassName";

import UserStatus from "../../pages/Security/Users/userStatus";
import UserSetGroup from "../../pages/Security/Users/userSetGroup";
import { useDispatch, useSelector } from "react-redux";
import GroupSetAuthority from "../../pages/Security/Groups/groupSetAuthority";

const DevExtremeMoreAction = ({ row, doUpdate, doDelete, doOpenView, doMoreAction, moreActionsIsModal }) => {
  const allowUpdating = isFunction(doUpdate);
  const allowDeleting = isFunction(doDelete);
  const allowOpenView = isFunction(doOpenView);
  const allowMoreActions = isFunction(doMoreAction);

  const rowData = row.row.data;
  const [isMoreActionsModalOpen, setIsMoreActionsModalOpen] = useState(false);
  // for Collapse
  const { isOpenStatus } = useSelector((state) => state.user);
  const { isOpenSetUserGroup } = useSelector((state) => state.group);
  const { isOpenSetGroupAuthority } = useSelector((state) => state.authority);
  const dispatch = useDispatch();

  function applyEdit() {
    // console.log("applyEdit => ");
    doUpdate(rowData);
  }

  function applyDelete() {
    // console.log("applyDelete => ");
    doDelete(rowData);
  }

  function applyOpenView() {
    // console.log("applyOpen => ");
    doOpenView(rowData);
  }

  function applyMoreAction(action) {
    // console.log("applyMoreAction => ");
    doMoreAction(rowData, action);
  }

  function toggleMoreActionsModal() {
    setIsMoreActionsModalOpen(!isMoreActionsModalOpen);
  }

  return (
    <div>
      <Button hint="Ouvrir" icon="mdi mdi-eye" className={"mcrm-info"} visible={allowOpenView} disabled={false} onClick={applyOpenView} />
      <Button hint="Editer" name="edit" icon="edit" className={"mcrm-warning"} visible={allowUpdating} onClick={applyEdit} />
      <Button hint="Supprimer" name="delete" icon="trash" className={"mcrm-danger"} visible={allowDeleting} onClick={applyDelete} />
      {moreActionsIsModal && rowData.actions && rowData.actions.length > 0 ? (
        <Button hint="Plus d'actions" icon="overflow" visible={allowMoreActions} disabled={false} onClick={toggleMoreActionsModal} />
      ) : (
        <>
          {allowMoreActions && rowData && rowData.actions && rowData.actions.length > 0 && (
            <UncontrolledDropdown style={{ zIndex: 2, position: "absolute", display: "contents" }}>
              <DropdownToggle style={{ margin: "0px", padding: "0px", background: "transparent", height: "auto", border: "0px" }}>
                <Button hint="Plus d'actions" icon="overflow" visible={allowMoreActions} disabled={false} />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-light mcrm-grid-dropdown">
                {rowData.actions.map((value, index) => {
                  return (
                    <DropdownItem key={index} className="mt-0 py-0 mcrm-grid-button" onClick={() => applyMoreAction(value)}>
                      <i className={actionTypeCssClassNameMap.get(value).className}></i> {actionTypeCssClassNameMap.get(value).name}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
        </>
      )}

      <Modal fade={true} isOpen={isMoreActionsModalOpen} toggle={toggleMoreActionsModal} centered={true} style={{ maxWidth: "70%" }}>
        <ModalHeader className="mcrm-bg pb-4">
          <div className="modal-title" id="myModalLabel">
            {"Plus d'options"}
          </div>
          <Button type="button" className="btn-close" onClick={toggleMoreActionsModal} aria-label="Close"></Button>
        </ModalHeader>
        <ModalBody className="py-3 px-5">
          <Row>
            {rowData.actions &&
              rowData.actions.length > 0 &&
              rowData.actions.map((actionName, index) => {
                return (
                  <Col sm={3} key={index}>
                    {actionTypeCssClassNameMap.get(actionName)?.name ? (
                      <ButtonReactStrap
                        title={actionTypeCssClassNameMap.get(actionName)?.title}
                        className="mcrm-btn mcrm-btn-more-action-modal mb-4"
                        disabled={false}
                        onClick={() => applyMoreAction(actionName)}
                      >
                        <i className={`mcrm-icon-more-action-modal ${actionTypeCssClassNameMap.get(actionName)?.className}`}></i> <br /> {actionTypeCssClassNameMap.get(actionName)?.name}
                      </ButtonReactStrap>
                    ) : (
                      <h6>No action found</h6>
                    )}
                  </Col>
                );
              })}
          </Row>

          <div>
            <Collapse isOpen={isOpenStatus}>
              <UserStatus />
            </Collapse>
            <Collapse isOpen={isOpenSetUserGroup}>
              <UserSetGroup />
            </Collapse>
            <Collapse isOpen={isOpenSetGroupAuthority}>
              <GroupSetAuthority />
            </Collapse>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DevExtremeMoreAction;
