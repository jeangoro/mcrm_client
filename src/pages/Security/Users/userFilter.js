import React, { useContext, useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../../store/user/userSlice";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import { countriesFR } from "../../../common/data/countries";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const UserFilter = ({ userFilterData, setUserFilterData }) => {
  const dispatch = useDispatch();

  const { isOpenFilter } = useSelector((state) => state.user);
  const { groupList } = useSelector((state) => state.group);

  const { dataFilter, setDataFilter } = useContext(DevExtremeDataGridContext);

  const onCloseClick = () => {
    // console.log("onCloseClick => ");
    dispatch(toggleFilter());
  };

  const onClearClick = () => {
    // console.log("onClearClick => ");
    setUserFilterData(null);
    onCloseClick();
  };

  const onFilterClick = (formValues) => {
    // console.log("onFilterClick => ", formValues);
    let newFormValues = {};
    let canFilter = false;
    if (formValues.countryResidence !== "Tout") {
      newFormValues["countryResidence"] = formValues.countryResidence;
      canFilter = true;
    }
    if (formValues.groupId !== "Tout") {
      newFormValues["groupId"] = formValues.groupId;
      canFilter = true;
    }
    if (formValues.email !== "") {
      newFormValues["email"] = formValues.email;
      canFilter = true;
    }
    if (formValues.userId !== "") {
      newFormValues["userId"] = formValues.userId;
      canFilter = true;
    }
    if (formValues.disabled === true) {
      newFormValues["disabled"] = formValues.disabled;
      canFilter = true;
    }

    if (canFilter) {
      setUserFilterData(newFormValues);
    } else {
      setUserFilterData(null);
    }
    onCloseClick();
  };

  let countryListFormated =
    countriesFR &&
    countriesFR.map((country) => {
      return { label: country.name, value: country.alpha2 };
    });

  let groupListFormated = groupList
    ? groupList.map((el) => {
        return { label: el.name, value: el.name };
      })
    : [];

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        {
          name: "countryResidence",
          label: "Pays de résidence",
          type: "select",
          optionsValue: countryListFormated && [{ label: "Tout", value: "Tout" }, ...countryListFormated],
          value: userFilterData?.countryResidence || "Tout",
          validation: Yup.string().notRequired(),
        },
        {
          name: "groupId",
          label: "Groupe",
          type: "select",
          optionsValue: [{ label: "Tout", value: "Tout" }, ...groupListFormated],
          value: userFilterData?.groupId || "Tout",
          validation: Yup.string().notRequired(),
        },
        { name: "email", label: "E-mail", type: "text", value: userFilterData?.email || "", validation: Yup.string().email("email invalide").notRequired() },
        { name: "userId", label: "Id utilisateur", type: "text", value: userFilterData?.userId || "", validation: Yup.string().notRequired() },
        { name: "disabled", label: "compte désactivé", type: "checkbox", value: userFilterData?.disabled || false, validation: Yup.string().notRequired() },
      ],
    },
  ];

  return (
    <form action="">
      <Offcanvas direction="end" isOpen={isOpenFilter} id="offcanvasExample" toggle={onCloseClick} scrollable={true}>
        <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
          Filtre des utilisateurs
        </OffcanvasHeader>

        <OffcanvasBody>
          <FormGeneratorV2
            isModal={false}
            formGroups={formFields}
            formConfig={{
              formId: "filter-user-form",
              fieldWidth: 6,
              onSubmit: onFilterClick,
              onCancel: onClearClick,
              btnSubmitText: "Filtrer",
              btnCancelText: "Reinitialiser",
              buttonsFloatBottom: true,
            }}
          />
        </OffcanvasBody>
      </Offcanvas>
    </form>
  );
};

export default UserFilter;
