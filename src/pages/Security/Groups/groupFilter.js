import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../../store/group/groupSlice";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import Loader from "../../../components/common/Loader";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const GroupFilter = ({ groupFilterData, setGroupFilterData }) => {
  const dispatch = useDispatch();

  const { isOpenFilter } = useSelector((state) => state.group);
  const { userList } = useSelector((state) => state.user);

  const onCloseClick = () => {
    // console.log("onCloseClick => ");
    dispatch(toggleFilter());
  };
  const gotoSetGroupFilterData = (value) => {
    setGroupFilterData(value);
  };

  const onClearClick = () => {
    // console.log("onClearClick => ");
    gotoSetGroupFilterData("");
    onCloseClick();
  };

  const onFilterClick = (formValues) => {
    // console.log("onFilterClick => ", formValues);
    gotoSetGroupFilterData(formValues.userId);
    onCloseClick();
  };

  let userListFormated =
    userList &&
    userList.map((el) => {
      return { label: el.firstName, value: el.userId };
    });

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        { name: "userId", label: "Nom de l'utilisateur", type: "select", optionsValue: userListFormated && userListFormated, value: groupFilterData, validation: Yup.string().notRequired() },
      ],
    },
  ];

  return (
    <Offcanvas direction="end" isOpen={isOpenFilter} id="offcanvasExample" toggle={onCloseClick} scrollable={true}>
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Filtre des groupes
      </OffcanvasHeader>

      <OffcanvasBody>
        {!userList ? (
          <Loader />
        ) : (
          <FormGeneratorV2
            isModal={false}
            formGroups={formFields}
            formConfig={{
              formId: "filter-group-form",
              fieldWidth: 12,
              onSubmit: onFilterClick,
              onCancel: onClearClick,
              btnSubmitText: "Filtrer",
              btnCancelText: "Reinitialiser",
              buttonsFloatBottom: true,
            }}
          />
        )}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default GroupFilter;
