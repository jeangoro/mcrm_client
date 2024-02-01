import React from "react";
import '../../../assets/scss/pages/_contacts.scss';
import * as Yup from "yup";
import {ContactForm} from "./ContactForm";
import {saveContact} from "../../../helpers/backend_helper";
import {toast} from "react-toastify";

export const EditCommercialContactForm = ({refData, closeModal}) => {
    const form = [
        {
            name: 'lastName',
            type: 'text',
            label: 'Nom de famille',
            validation: Yup.string().required("Veuillez entrer le nom de famille")
        },
        {
            name: 'firstName',
            type: 'text',
            label: 'Prénom',
            validation: Yup.string().required("Veuillez entrer le prénom")
        },
        {
            name: 'country',
            type: 'select',
            optionsKey: 'countries',
            label: 'Pays de résidence',
            validation: Yup.string()
        },
        {
            name: 'city',
            type: 'text',
            label: 'Ville de résidence',
            validation: Yup.string()
        },
        {
            name: 'commercialProfile',
            type: 'text',
            label: 'Profil commercial',
            validation: Yup.string()
        },
        {
            name: 'assignedEntity',
            type: 'select',
            optionsKey: 'agencies',
            label: 'Société/Agent',
            validation: Yup.string().required("Veuillez entrer la Société/Agent")
        },
        {
            name: 'leadProfile',
            type: 'select',
            optionsKey: 'leadProfiles',
            label: 'Profil lead',
            validation: Yup.string().required("Veuillez entrer le Profil lead")
        },
        {
            name: 'commissionRate',
            type: 'select',
            optionsKey: 'commissionRates',
            label: 'Taux de commission',
            validation: Yup.number().required("Veuillez entrer le Taux de commission")
        },
        {
            name: 'spaces',
            type: 'select',
            optionsKey: 'partners',
            label:"Espaces d'appartenance",
            validation: Yup.string()
        },
        {
            name: 'products',
            type: 'select',
            optionsKey: 'productLabels',
            label: 'Choix des produits ou services',
            validation: Yup.string()
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            validation: Yup.string()
        },
        {
            name: 'phone',
            type: 'text',
            label: 'Télephone',
            validation: Yup.string()
        },
        {
            name: 'address',
            type: 'text',
            label: 'Adresse',
            validation: Yup.string()
        },
    ];
    const initialValues = {
        gender: '',
        idx: '',
    };
    const onSubmit = (values) => {
        saveContact(values).then(() => {
            closeModal(false);
            toast.success("Le contact a été créé avec succès", { autoClose: 3000 });
        }).catch(e => {
            console.log(e);
            toast.error("Une erreur est survenue lors de la création du contact", { autoClose: 3000 });
        })
    };

    return (
        <ContactForm form={form} refData={refData} initialValues={initialValues} onSubmit={onSubmit} />
    )
};