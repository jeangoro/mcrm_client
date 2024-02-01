import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initialise, toggleDelete } from "../../../store/authority/authoritySlice";
import { deleteAuthority } from "../../../store/authority";
import DeleteModal from "../../../components/common/DeleteModal";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";

const AuthorityDelete = () => {
  const dispatch = useDispatch();
  const { dataGridRef } = useContext(DevExtremeDataGridContext);
  const { isOpenDelete, authorityRowToDelete, deleteError, deleting, deleted, deletedData } = useSelector((state) => state.authority);

  useEffect(() => {
    return () => {
      // reinitialise de Authority state on Unmont
      dispatch(initialise());
    };
  }, [dispatch]);

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
        <DeleteModal show={isOpenDelete} loading={deleting} onDeleteClick={() => deleteAuthority(dispatch, authorityRowToDelete?.name)} onCloseClick={toggleDeleteForm} />
      </div>
    </>
  );
};

export default AuthorityDelete;
