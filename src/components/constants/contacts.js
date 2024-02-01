import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import React from "react";
import {getContacts} from "../../helpers/backend_helper";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";

export const CONTACT_ITEMS_COLORS = {
    "Payé": "#219653",
    "Soumise": "#FF6F07",
    "Urgent": "#ED2F2F",
    "Non traité": "#FF6F07",
    "Traité": "#219653",
    "Chaud": "#F2C94C",
    "Close": "#219653",
    "Deal": "#FF6F07",
    "Froid": "#56CCF2"
}
export const tableConfigPerContactType = {
    "Etudiants": {
        filters: [
            {name: 'countries', title: 'Pays', filterType: 'select'},
            {name: 'productLabels', title: 'Services', filterType: 'tags'},
            {name: 'steps', title: 'Etape services', filterType: 'tags'},
            {name: 'status', title: 'Status', filterType: 'tags'},
            {name: 'kycs', title: 'KYC', filterType: 'tags'},
            {name: 'startCreationDate', title: 'Date', filterType: 'date'},
        ],
        columns: ['lastName', 'firstName', 'productLabel', 'serviceProviderName', 'country', 'step', 'status',
            'tickets', 'lead', 'leadStatus', 'email', 'phone']
    },
    "Agents": {
        filters: [
            {name: 'countries', title: 'Pays', filterType: 'select'},
            {name: 'startCreationDate', title: 'Date', filterType: 'date'},
        ],
        columns: [ 'serviceProviderName', 'productLabel',  'country', 'contactCount', 'clientCount',
        'suspectCount', 'ca', 'leadCount', 'prospectCount', 'fees', 'phone']
    },
    "Commerciaux": {
        filters: [
            {name: 'countries', title: 'Pays', filterType: 'select'},
            {name: 'serviceProviderNames', title: 'Agents', filterType: 'select'},
            {name: 'startCreationDate', title: 'Date', filterType: 'date'},
        ],
        columns: ['firstName', 'lastName','matricule', 'serviceProviderName',  'country', 'clientCount',
            'suspectCount', 'ca', 'leadCount', 'prospectCount', 'fees', 'phone']
    }
    ,
    "Partenaires": {
        filters: [
            {name: 'countries', title: 'Pays', filterType: 'select'},
            {name: 'partnershipTypes', title: 'Type de partenariat', filterType: 'select'},
            {name: 'serviceNames', title: 'Service', filterType: 'select'},
            {name: 'startCreationDate', title: 'Date', filterType: 'date'},
        ],
        columns: ['id', 'partner', 'partnershipType','serviceName', 'country', 'clientCount',
            'suspectCount', 'ca', 'leadCount', 'prospectCount', 'fees', 'email', 'phone']
    },
}
export const columns = [
    {name: "id", type: "number", title: "Id", minWidth: 60},
    {name: "lastName", type: "string", title: "Nom", hidingPriority: 1},
    {name: "firstName", type: "string", title: "Prénom", hidingPriority: 2},
    {name: "productLabel", type: "string", title: "Services"},
    {name: "serviceProviderName", type: "string", title: "Partenaires/Société", hidingPriority: 0},
    {name: "country", type: "string", title: "Pays", hidingPriority: 0},
    {name: "step", type: "string", title: "Etape services", hidingPriority: 0},
    {name: "status", type: "string", title: "Statut", hidingPriority: 1},
    {name: "lead", type: "string", title: "Leads", hidingPriority: 0},
    {name: "leadStatus", type: "string", title: "Statut Leads", filterType: "tags"},
    {name: "email", type: "string", title: "Email", hidingPriority: 1},
    {name: "phone", type: "string", title: "Téléphone", hidingPriority: 2},
    {name: "createDate", type: "date", title: "Date", hidingPriority: 0},
    {name: "tickets", type: "string", title: "Ticket", hidingPriority: 0},
    {name: "contactCount", type: "number", title: "Nombre de contacts", hidingPriority: 0},
    {name: "clientCount", type: "number", title: "Nombre de clients", hidingPriority: 0},
    {name: "suspectCount", type: "number", title: "Nombre de suspects", hidingPriority: 0},
    {name: "ca", type: "number", title: "CA", hidingPriority: 0},
    {name: "leadCount", type: "number", title: "Nombre de leads", hidingPriority: 0},
    {name: "prospectCount", type: "number", title: "Nombre de prospects", hidingPriority: 0},
    {name: "fees", type: "number", title: "Commission Réseau", hidingPriority: 0},
    {name: "matricule", type: "string", title: "Matricule Com", hidingPriority: 0},
    {name: "partner", type: "string", title: "Partenaire", hidingPriority: 0},
    {name: "partnershipType", type: "string", title: "Type de partenariat", hidingPriority: 0},
];
const searchAfterMapping = {};
export const getDataSource = (uiFilters) => {
    const filters = {};
    Object.keys(uiFilters).forEach(key => {
        if(['contactTypes', 'contactSources', 'countries'].includes(key) && uiFilters[key]) {
            filters[key] = [uiFilters[key]];
        } else {
            filters[key] = uiFilters[key]
        }
    })
    return (
        new DataSource(
            {
                requireTotalCount: true,
                store: new CustomStore({
                    loadMode: "processed",
                    requireTotalCount: true,
                    load: async function (options) {
                        const searchParam = {
                            limit: options.take,
                            searchAfter: searchAfterMapping[JSON.stringify(filters)],
                            ...filters,
                        };
                        const {data} = await getContacts(searchParam);
                        searchAfterMapping[JSON.stringify(filters)] = data.body.searchAfter;
                        return {
                            data: (data.body.elements || []).map((row) => ({
                                ...row,
                                status: row.steps ? row.steps[row.steps.length - 1].status : null,
                                step: row.steps ? row.steps[row.steps.length - 1].name : null,
                            })),
                            totalCount: data.body.totalElements,
                        };
                    },
                }),
            }));
}

export const ActionsCellRenderer = (toggleSendMsgModal, {data}) => (
    <span className="small-icon">
    <Link to={`/contacts/${data.id}`} className="table-action-button">
      <Button color="link" className="table-action-button">
        <i className="ri-eye-fill"></i>
      </Button>
    </Link>
    <Button
        color="link"
        className="table-action-button"
        onClick={toggleSendMsgModal}
    >
      <i className="ri-question-answer-fill " />
    </Button>
  </span>
);