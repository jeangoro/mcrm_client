import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleDelete } from "../../../store/group/groupSlice";
import { deleteGroup } from "../../../store/group";
import DeleteModal from "../../../components/common/DeleteModal";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";

const GroupDelete = () => {
  const dispatch = useDispatch();
  const { dataGridRef } = useContext(DevExtremeDataGridContext);
  const { isOpenDelete, groupRowToDelete, deleteError, deleting, deleted, deletedData } = useSelector((state) => state.group);

  const toggleDeleteForm = useCallback(() => {
    dispatch(toggleDelete());
  }, [dispatch]);

  useEffect(() => {
    if (deleted && deleteError === null) {
      // console.log(deletedData);
      dataGridRef.current.instance.refresh();
      toggleDeleteForm();
    } else if (deleted && deleteError) {
      console.log("error =>", deleteError);
    }
  }, [deleted, deleteError, deletedData, dataGridRef, toggleDeleteForm]);

  return (
    <>
      <div>
        <DeleteModal show={isOpenDelete} loading={deleting} onDeleteClick={() => deleteGroup(dispatch, groupRowToDelete?.name)} onCloseClick={toggleDeleteForm} />
      </div>
    </>
  );
};

export default GroupDelete;
