import React, { useContext, useEffect, useRef } from "react";

import DevExtremeDataGrid from "../../../../components/common/DevExtremeDataGrid";
import { ContactDataGrid } from "./contactDataGrid";
import { apiClient } from "../../../../helpers/api_helper";
import { useDispatch } from "react-redux";
import { gridActionType, toggleCreate, toggleDelete, toggleUpdate, toggleFilter, toggleStatus } from "../../../../store/commercial/contact/contactSlice";
import { useNavigate } from "react-router-dom";
import { DevExtremeDataGridContext } from "../../../../components/common/DevExtremeDataGridProvider";
import { getAuthorities } from "../../../../store/authority";

const ContactList = ({ contactFilterData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { keyExprRef, dataFilter } = useContext(DevExtremeDataGridContext);
  const searchAfter = useRef(null);
  const dataGridConfig = ContactDataGrid();

  useEffect(() => {
    console.log("Mount");
    getAuthorities(dispatch);
    // getGroupList(dispatch);
    keyExprRef.current = dataGridConfig.config.keyExpr;
    return () => {
      console.log("Unmount");
    };
  }, [keyExprRef, dataGridConfig, dispatch]);

  function onClickEdit(rowData) {
    dispatch(toggleUpdate(rowData));
  }

  function onClickAdd() {
    dispatch(toggleCreate());
  }

  function onClickDelete(rowData) {
    dispatch(toggleDelete(rowData));
  }

  function onClickOpenView(rowData) {
    navigate(`${rowData.contactId}`);
  }

  function onClickFilter() {
    dispatch(toggleFilter());
  }

  function onClickMoreAction(rowData, action) {
    switch (action) {
      case "SECURITY_ADD_OR_REMOVE_GROUP": {
        // getContactGroupsList(dispatch, rowData?.contactId);
        // dispatch(toggleSetContactGroup(rowData));
        break;
      }
      case "SECURITY_RESET_PASSWORD":
        // resetPassword(dispatch, { contactId: rowData.contactId });
        break;
      // case "UNLINK_SERVICE_PROVIDER":
      //   resetPassword(dispatch, { contactName: rowData.contactId });
      //   break;
      case "SECURITY_GET_STATUS": {
        // getContactStatus(dispatch, rowData.contactId);
        dispatch(toggleStatus(rowData));
        break;
      }
      // case "LINK_SERVICE_PROVIDER":
      //   resetPassword(dispatch, { contactName: rowData.contactId });
      //   break;
      case "SECURITY_RESENT_CODE":
        // resentCode(dispatch, { contactId: rowData.contactId });
        break;
      case "SECURITY_ACTIVATE":
        // activate(dispatch, { contactId: rowData.contactId });
        break;
      case "SECURITY_DEACTIVATE":
        // deactivate(dispatch, { contactId: rowData.contactId });
        break;

      default:
        break;
    }
  }

  function doLoad(params) {
    // console.log(newParams);
    let newParams = { ...contactFilterData };

    if (newParams.contactTypes && newParams.contactTypes[0] === "Tout") {
      delete newParams.contactTypes;
    }
    if (newParams.ids) {
      newParams["ids"] = newParams.ids.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.ids;
    }
    if (newParams.emails) {
      newParams["emails"] = newParams.emails.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.emails;
    }
    if (newParams.phoneNumber) {
      newParams["phoneNumber"] = newParams.phoneNumber.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.phoneNumber;
    }
    if (newParams.sourceContactTypes && newParams.sourceContactTypes.length === 0) {
      delete newParams.sourceContactTypes;
    }
    if (newParams.countryResidences && newParams.countryResidences.length === 0) {
      delete newParams.countryResidences;
    }
    // console.log(newParams.startCreationDate);
    if (newParams.startCreationDate && newParams.startCreationDate !== "Invalid Date") {
      newParams["startCreationDate"] = new Date(newParams.startCreationDate).toISOString();
    } else {
      delete newParams.startCreationDate;
    }
    if (newParams.endCreationDate && newParams.endCreationDate !== "Invalid Date") {
      newParams["endCreationDate"] = new Date(newParams.endCreationDate).toISOString();
    } else {
      delete newParams.endCreationDate;
    }

    //parametres liés à Partner
    // partnerId;
    if (newParams.marketerCountries && newParams.marketerCountries.length === 0) {
      delete newParams.marketerCountries;
    }
    //parametres liés à marketer
    if (newParams.subContactTypes && newParams.subContactTypes.length === 0) {
      delete newParams.subContactTypes;
    }
    if (newParams.marketerTypes && newParams.marketerTypes.length === 0) {
      delete newParams.marketerTypes;
    }
    if (newParams.cityResidences) {
      newParams["cityResidences"] = newParams.cityResidences.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.cityResidences;
    }
    if (newParams.phoneNumbers) {
      newParams["phoneNumbers"] = newParams.phoneNumbers.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.phoneNumbers;
    }
    if (newParams.marketerIds) {
      newParams["marketerIds"] = newParams.marketerIds.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.marketerIds;
    }
    if (newParams.parentIds) {
      newParams["parentIds"] = newParams.parentIds.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.parentIds;
    }
    if (newParams.enterpriseNames) {
      newParams["enterpriseNames"] = newParams.enterpriseNames.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.enterpriseNames;
    }
    if (newParams.enterpriseCityResidences) {
      newParams["enterpriseCityResidences"] = newParams.enterpriseCityResidences.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.enterpriseCityResidences;
    }
    if (newParams.commercialRegisterNumbers) {
      newParams["commercialRegisterNumbers"] = newParams.commercialRegisterNumbers.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.commercialRegisterNumbers;
    }
    if (newParams.enterpriseNui) {
      newParams["enterpriseNui"] = newParams.enterpriseNui.replace(/\s+/g, "").split(",");
    } else {
      delete newParams.enterpriseNui;
    }
    //parametres liés à Agent
    newParams["searchAfter"] = searchAfter.current;
    // console.log(params);

    if (params.search("&") !== -1) {
      newParams["limit"] = params.split("&")[1].split("=")[1];
    } else {
      newParams["limit"] = 20;
    }

    return apiClient.post(`api/contacts/search`, newParams).then((response) => {
      searchAfter.current = response.data.body.searchAfter;
      response.data = { data: response.data.body.elements, totalCount: response.data.body.totalElements };
      return response;
    });
  }

  function doOnSelectionChanged(selectedRowsData) {
    // console.log("doOnSelectionChanged from =>", selectedRowsData);
  }

  useEffect(() => {
    searchAfter.current = null;
  }, [contactFilterData]);

  return (
    <>
      {contactFilterData && <div className="badge bg-info mb-2">Filtre activé </div>}
      <DevExtremeDataGrid
        configGrid={dataGridConfig.config}
        configHeader={dataGridConfig.headers}
        doLoad={doLoad}
        doOnSelectionChanged={doOnSelectionChanged}
        // doUpdate={onClickEdit}
        doOpenView={onClickOpenView}
        doMoreAction={onClickMoreAction}
        moreActionsIsModal={true}
        doAdd={onClickAdd}
        // doDelete={onClickDelete}
        doFilter={onClickFilter}
        gridActionType={gridActionType().type}
        // dataSource={contactGridList}
      />
    </>
  );
};

export default ContactList;
