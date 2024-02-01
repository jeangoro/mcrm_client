import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleDelete } from "../../../store/user/userSlice";
import { deleteUser } from "../../../store/user";
import DeleteModal from "../../../components/common/DeleteModal";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";

const UserDelete = () => {
  const dispatch = useDispatch();
  const { dataGridRef } = useContext(DevExtremeDataGridContext);
  const { isOpenDelete, userRowToDelete, deleteError, deleting, deleted, deletedData } = useSelector((state) => state.user);

  const toggleDeleteForm = useCallback(() => {
    dispatch(toggleDelete());
  }, [dispatch]);

  useEffect(() => {
    if (deleted && deleteError === null) {
      dataGridRef.current.instance.refresh();
      toggleDeleteForm();
    } else if (deleted && deleteError) {
      console.log("error =>", deleteError);
    }
  }, [deleted, deleteError, deletedData, dataGridRef, toggleDeleteForm]);

  return (
    <>
      <div>
        <DeleteModal show={isOpenDelete} loading={deleting} onDeleteClick={() => deleteUser(dispatch, userRowToDelete?.name)} onCloseClick={toggleDeleteForm} />
      </div>
    </>
  );
};

export default UserDelete;
