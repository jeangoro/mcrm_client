import React, {useEffect} from "react";
import {ContactsTable} from "../../components/contacts/ContactsTable";
import "../../assets/scss/pages/_contacts.scss";
import {useDispatch, useSelector} from "react-redux";
import {findAllCountry, findAllParameter, findAllProduct, findAllServiceProvider} from "../../store/referential";
import withAuthProtected from "../../routes/withAuthProtected";
import {ROLE_CONTACT} from "../../routes/roles";

const Contacts = () => {
  document.title = "contacts | Mobility Expert";
  const dispatch = useDispatch();
  useEffect(() => {
    findAllParameter(dispatch);
    findAllCountry(dispatch);
    findAllProduct(dispatch);
    findAllServiceProvider(dispatch);
  }, [dispatch]);
  let refDataStore = useSelector((state) => state.referential);
  let refData = {
      countries: [],
      genders: [],
      contactsType: [],
      leadsType: [],
      opportunities: [],
      leadsQualified: [],
      productLabels: [],
      agencies: [],
      partners: [],
      commissionRates: [
          {value: 0.1, text: '10%'},
          {value: 0.2, text: '20%'},
      ]
  };
    const addRefData = (sourceData, destinationField, transformer) => {
        if(sourceData) {
            refData[destinationField] = sourceData.map(transformer);
        }
    };
    const paramsTransformer = ({value}) => ({value, text: value});
    const countriesTransformer = ({alpha3, name}) => ({value: alpha3.toUpperCase(), text: name});
    const productsTransformer = ({label, id}) => ({value: label, text: label, id});
    const serviceProviderTransformer = ({id, designation}) => ({value: id, text: designation, id});
    addRefData(refDataStore.countries, 'countries', countriesTransformer);
    addRefData(refDataStore.genders, 'genders', paramsTransformer);
    addRefData(refDataStore.contactsType, 'contactTypes', paramsTransformer);
    addRefData(refDataStore.leadsType, 'leadsType', paramsTransformer);
    addRefData(refDataStore.leadsQualified, 'leadsQualified', paramsTransformer);
    addRefData(refDataStore.opportunities, 'leadStatus', paramsTransformer);
    addRefData(refDataStore.products, 'productLabels', productsTransformer);
    addRefData(refDataStore.agencies, 'agencies', serviceProviderTransformer);
    addRefData(refDataStore.partners, 'partners', serviceProviderTransformer);
  return (
    <React.Fragment>
      <div className="page-content">
          <ContactsTable refData={refData} />
      </div>
    </React.Fragment>
  );
};

export default withAuthProtected(Contacts, [ROLE_CONTACT]);
