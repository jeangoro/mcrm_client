import React, {useCallback, useContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

import { initialise, toggleDelete } from "../../store/reporting/reportingSlice";
import CustomButton from "../../components/common/CustomButton";
import { deleteReporting } from "../../store/reporting";
import DeleteModal from "../../components/common/DeleteModal";
import {DevExtremeDataGridContext} from "../../components/common/DevExtremeDataGridProvider";

const ReportingDelete = () => {
  const dispatch = useDispatch();
  const {dataGridRef} = useContext(DevExtremeDataGridContext)
  const { isOpenDelete, reportingRowToDelete, deleteError, deleting, deleted, deletedData } = useSelector((state) => state.reporting);

  useEffect(() => {
    return () => {
      // reinitialise de Reporting state on Unmont
      dispatch(initialise());
    };
  }, [dispatch]);

  const toggleDeleteForm = useCallback(() => {
    dispatch(toggleDelete());
  }, [dispatch]);

  useEffect(() => {
    if (deleted && deleteError === null) {
      console.log(deletedData);
      dataGridRef.current.instance.refresh();
      toggleDeleteForm();
    } else if (deleted && deleteError) {
      console.log("error =>", deleteError);
    }
  }, [deleted, deleteError, deletedData, dataGridRef, toggleDeleteForm]);

  return (
    <>
      <div>
        <DeleteModal show={isOpenDelete} loading={deleting} onDeleteClick={() => deleteReporting(dispatch, reportingRowToDelete?.OrderNumber)} onCloseClick={toggleDeleteForm} />
      </div>
    </>
  );
};

export default ReportingDelete;
