import React, { useContext } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../../store/authority/authoritySlice";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import Loader from "../../../components/common/Loader";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const AuthorityFilter = ({ authorityFilterData, setAuthorityFilterData }) => {
  const dispatch = useDispatch();

  const { isOpenFilter } = useSelector((state) => state.authority);
  const { groupList } = useSelector((state) => state.group);

  const { dataFilter, setDataFilter } = useContext(DevExtremeDataGridContext);

  const onCloseClick = () => {
    // console.log("onCloseClick => ");
    dispatch(toggleFilter());
  };

  const onClearClick = () => {
    // console.log("onClearClick => ");
    setAuthorityFilterData(null);
    onCloseClick();
  };

  const onFilterClick = (formValues) => {
    // console.log("onFilterClick => ", formValues);
    setAuthorityFilterData(formValues.groupId);
    onCloseClick();
  };

  let groupListFormated =
    groupList &&
    groupList.map((el) => {
      return { label: el.name, value: el.name };
    });

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        { name: "groupId", label: "Nom du groupe", type: "select", optionsValue: groupListFormated && groupListFormated, value: authorityFilterData, validation: Yup.string().notRequired() },
      ],
    },
  ];

  return (
    <Offcanvas direction="end" isOpen={isOpenFilter} id="offcanvasExample" toggle={onCloseClick} scrollable={true}>
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Filtre des autorisations
      </OffcanvasHeader>
      <OffcanvasBody>
        {!groupList ? (
          <Loader />
        ) : (
          <FormGeneratorV2
            isModal={false}
            formGroups={formFields}
            formConfig={{
              formId: "filter-authority-form",
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

export default AuthorityFilter;
